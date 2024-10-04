import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  calculateSubTotal,
  calculateTotal,
  handleAddRow,
} from "@/components/table/Quote/Utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
/**
 * initialItems -> Lista de items para cargar en tabla
 * isEditable - True -> permite realizar las acciones de la tabla
 * setTotalChanges -> es el estado que retorna el total de los items
 *
 */
const QuoteTable = ({
  initialItems,
  isEditable,
  allProducts,
  setTableData,
  tableData,
  productOrService,
  services_map,
  services_data,
  products_map,
}) => {
  const initialRow = {
    item: "",
    code: "",
    value: "",
    discount: "",
    taxes: "",
    quantity: "",
    unitHidden: "",
    delivery_date: "",
    product_idAux: undefined,
    master_product: "",
    variations: "",
  };
  const location = useLocation();
  const [productDelete, setProductDelete] = useState([]);
  const [allProductsOrServices, setAllProductsOrServices] = useState([]);

  useEffect(() => {
    if (location.pathname.includes("edit")) {
      setTableData(
        initialItems.length > 0
          ? initialItems.map((item) => {
              return {
                ...item,
                product_idAux: item.product.value,
              };
            })
          : [initialRow],
      );
    } else {
      setTableData([initialRow]);
    }
  }, [location.pathname, initialItems]);

  useEffect(() => {
    if (productOrService == "service") {
      setAllProductsOrServices(services_map);
    }
    if (productOrService == "product") {
      setAllProductsOrServices(products_map || []);
    }
  }, [productOrService]);

  const columns = useMemo(
    () => [
      { key: "code", header: "Código", type: "text", disabled: false },
      {
        key: "value",
        header: "Precio x Unidad",
        type: "number",
        disabled: false,
      },
      {
        key: "discount",
        header: "Descuento (%)",
        type: "number",
        disabled: false,
      },
      { key: "taxes", header: "Impuesto (%)", type: "number", disabled: false },
      { key: "quantity", header: "Cantidad", type: "number", disabled: false },
      {
        key: "delivery_date",
        header: "Fecha de Entrega",
        type: "date",
        disabled: false,
      },
    ],
    [],
  );

  const handleInputChange = (rowIndex, key, value) => {
    if (key == "product_idAux" && !!value) {
      let findProduct = null;
      if (productOrService == "service") {
        findProduct = services_data.find((sd) => sd.id == value);
      }
      if (productOrService == "product") {
        findProduct = products.find((p) => p.value == value);
      }

      setTableData((prevData) =>
        prevData.map((item, index) =>
          index === rowIndex
            ? {
                ...item,
                code: findProduct.code,
                value: findProduct.price,
                product_idAux: value,
                quantity: 1,
                master_product: findProduct.product_master_id,
                variations: findProduct.variation_id,
                taxes: 16,
                discount: 0,
                unit: findProduct.unit,
              }
            : item,
        ),
      );
    } else {
      setTableData((prevData) =>
        prevData.map((item, index) =>
          index === rowIndex ? { ...item, [key]: value } : item,
        ),
      );
    }
  };

  const handleDeleteRow = (rowIndex, setProductDelete, productDelete) => {
    setTableData((prevData) => {
      if (prevData.length > 1) {
        if (!!tableData[rowIndex]?.id) {
          setProductDelete([...productDelete, tableData[rowIndex].id]);
        }
        return prevData.filter((_, index) => index !== rowIndex);
      }
      return prevData;
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className="flex overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-2 border-b-primario">
              <TableHead>Item</TableHead>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.header}</TableHead>
              ))}
              <TableHead>SubTotal</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <input
              type="hidden"
              className="hidden"
              hidden
              readOnly
              name={`productsOrService`}
              value={JSON.stringify(tableData)}
            />
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <div className="w-[200px]">
                    <input
                      type="hidden"
                      className="hidden"
                      hidden
                      readOnly
                      name={`id_product[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={!!row["id"] ? row["id"] : ""}
                    />

                    {!!row["id"] ? (
                      <label>{row["product"].label}</label>
                    ) : (
                      <Select
                        name={`product[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                        value={row["product_idAux"]}
                        required={true}
                        onValueChange={(e) =>
                          isEditable &&
                          handleInputChange(
                            (currentPage - 1) * itemsPerPage + rowIndex,
                            "product_idAux",
                            e,
                          )
                        }
                      >
                        <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                          <SelectValue placeholder={"Producto"} />
                        </SelectTrigger>
                        <SelectContent>
                          {allProductsOrServices.map((product, index) => (
                            <div key={index}>
                              <SelectItem
                                key={"product-" + index}
                                value={String(product.value)}
                              >
                                {product.label}
                              </SelectItem>
                            </div>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    <Input
                      type={column.type}
                      name={`${column.key}[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      className="h-[32px] rounded-[10px] border border-[#D7D7D7] bg-inherit p-1 font-roboto text-sm text-[#44444f] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={row[column.key]}
                      disabled={column.disabled}
                      onChange={(e) =>
                        isEditable &&
                        handleInputChange(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          column.key,
                          e.target.value,
                        )
                      }
                      readOnly={!isEditable}
                      required={true}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <div className="flex items-center justify-between gap-x-2">
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`sub_total[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={calculateSubTotal(row).toFixed(2)}
                    />
                    ${calculateSubTotal(row).toFixed(2)}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-between gap-x-2">
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`total[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={calculateTotal(row).toFixed(2)}
                    />
                    ${calculateTotal(row).toFixed(2)}
                    <Button
                      variant="ghost"
                      size="icon"
                      type={"button"}
                      onClick={() =>
                        isEditable &&
                        handleDeleteRow(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          setProductDelete,
                          productDelete,
                        )
                      }
                      disabled={tableData.length === 1 || !isEditable}
                      className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                    >
                      <IonIcon
                        icon={closeCircle}
                        size="small"
                        className="cursor-pointer text-grisDisabled"
                      />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Productos que se van a eliminar */}
      {productDelete.map((pd) => (
        <input
          type="hidden"
          hidden
          className="hidden"
          readOnly
          name={`productDelete[]`}
          value={pd}
        />
      ))}
      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={(e) =>
            isEditable && handleAddRow(e, setTableData, initialRow)
          }
          disabled={!isEditable}
          className="rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
        >
          <IonIcon
            icon={addCircle}
            size="small"
            className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
          />
        </Button>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={chevronBack}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={chevronForward}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuoteTable;
