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
  handleDeleteRow,
  handleInputChange,
} from "./Utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
}) => {
  const initialRow = {
    item: "",
    code: "",
    value: "",
    discount: "",
    taxes: "",
    quantity: "",
    unitHidden: "",
    unit: "",
    delivery_date: "",
    product_idAux: undefined,
    master_product: "",
    variations: "",
  };
  const location = useLocation();
  const productsArray = [];
  const [productDelete, setProductDelete] = useState([]);

  arrayFillProducts(allProducts, productsArray);

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

  function arrayFillProducts(data, array) {
    let dataParse = data;

    dataParse.forEach((element, index) => {
      array.push({
        ...element,
        label: element.name,
        value: index + 1,
      });
    });
  }

  const columns = useMemo(
    () => [
      { key: "code", header: "Código", type: "text", disabled: false },
      { key: "value", header: "value", type: "number", disabled: false },
      {
        key: "discount",
        header: "Descuento (%)",
        type: "number",
        disabled: false,
      },
      { key: "taxes", header: "Impuesto (%)", type: "number", disabled: false },
      { key: "quantity", header: "Cantidad", type: "number", disabled: false },
      { key: "unit", header: "Unidad", type: "text", disabled: true },
      {
        key: "delivery_date",
        header: "Fecha de Entrega",
        type: "date",
        disabled: false,
      },
    ],
    [],
  );

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
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <div className="w-[200px]">
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`totalRow[]`}
                      value={""}
                    />
                    <input
                      type="hidden"
                      className="hidden"
                      hidden
                      readOnly
                      name={`id_product[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={!!row["id"] ? row["id"] : ""}
                    />
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`master_product[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={row["master_product"]}
                    />
                    <input
                      type="hidden"
                      hidden
                      className="hidden"
                      readOnly
                      name={`variations[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={row["variations"]}
                    />

                    <input
                      type="text"
                      hidden
                      className="hidden"
                      readOnly
                      name={`unitHidden[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={row["unit"]}
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
                            setTableData,
                            productsArray,
                          )
                        }
                      >
                        <SelectTrigger className="w-full rounded-xl border border-[#D7D7D7] text-[#44444f] text-sm h-[32px] rounded-[10px] bg-inherit font-roboto font-light placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                          <SelectValue
                            placeholder={"Producto"}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {productsArray.map((product, index) => (
                            <div key={index}>
                              {!tableData.find(
                                (td) => (td.product_idAux == product.value) && td.id == undefined,
                              ) ? (
                                <SelectItem
                                  key={"product-" + index}
                                  value={String(product.value)}
                                >
                                  {product.label}
                                </SelectItem>
                              ) : (
                                <SelectItem
                                  key={"product-" + index}
                                  value={String(product.value)}
                                  disabled={true}
                                >
                                  {product.label}
                                </SelectItem>
                              )}
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
                      className="text-[#44444f] text-sm h-[32px] rounded-[10px] border border-[#D7D7D7] bg-inherit p-1 font-roboto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={row[column.key]}
                      disabled={column.disabled}
                      onChange={(e) =>
                        isEditable &&
                        handleInputChange(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          column.key,
                          e.target.value,
                          setTableData,
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
                          setTableData,
                          tableData,
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
