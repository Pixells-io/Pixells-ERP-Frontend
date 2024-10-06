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
} from "@/components/table/Quote/Utils";
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
  productOrService,
  services_map,
  services_data,
  products_map,
  products_info,
  wharehouseSelect,
}) => {
  const initialRow = {
    type: productOrService == "product" ? "1" : "2",
    inventory_stock_id: "",
    service_id: "",
    item: "",
    code: "",
    price: "",
    discount: "",
    tax: "",
    quantity: "",
    delivery_date: "",
    product_idAux: "",
    master_product: "",
    variations: "",
    sub_total: "0.00",
    total: "0.00",
    wharehouseSelect: wharehouseSelect,
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
                product_idAux: item?.product?.value,
              };
            })
          : [initialRow],
      );
    } else {
      setTableData([initialRow]);
    }
  }, [location.pathname, initialItems]);

  useEffect(() => {
    // si ya existe
    const findProducts = allProductsOrServices.find(
      (p) => p.type == wharehouseSelect,
    );
    if (
      !!findProducts &&
      JSON.stringify(products_map) == JSON.stringify(findProducts?.value)
    )
      return;
    const auxProductsOrServices = [...allProductsOrServices];
    setAllProductsOrServices([
      ...auxProductsOrServices,
      { type: wharehouseSelect, value: products_map },
    ]);
  }, [products_map]);

  useEffect(() => {
    const auxProductsOrServices = [...allProductsOrServices];
    setAllProductsOrServices([
      ...auxProductsOrServices,
      { type: "service", value: services_map },
    ]);
  }, []);

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

  const handleInputChange = (rowIndex, key, value, type) => {
    //type 1 = products, type 2 = service
    if (key == "product_idAux" && !!value) {
      let findProduct = null;
      if (type == "2") {
        findProduct = services_data.find((sd) => sd.id == value);
      }
      if (type == "1") {
        findProduct = products_info.find((p) => p.id == value);
      }

      setTableData((prevData) =>
        prevData.map((item, index) =>
          index === rowIndex
            ? {
                ...item,
                // type: productOrService == "product" ? "1" : "2",
                inventory_stock_id:
                  productOrService == "product" ? findProduct?.id : null,
                service_id:
                  productOrService == "service" ? findProduct?.id : null,
                code: findProduct?.code,
                sub_total: calculateSubTotal({
                  value: findProduct?.price,
                  quantity: 1,
                }).toFixed(2),
                total: calculateTotal({
                  value: findProduct?.price,
                  quantity: 1,
                  discount: 0,
                  taxes: 16,
                }).toFixed(2),
                value: findProduct?.price,
                product_idAux: value,
                quantity: 1,
                master_product: findProduct?.product_master_id,
                variations: findProduct?.variation_id,
                taxes: 16,
                discount: "0",
              }
            : item,
        ),
      );
    } else {
      if (key == "total") {
        setTableData((prevData) =>
          prevData.map((item, index) =>
            index === rowIndex
              ? {
                  ...item,
                  total: calculateTotal({
                    value: value,
                    quantity: item.quantity,
                    discount: item.discount,
                    taxes: item.taxes,
                  }).toFixed(2),
                }
              : item,
          ),
        );
      } else if (key == "sub_total") {
        setTableData((prevData) =>
          prevData.map((item, index) =>
            index === rowIndex
              ? {
                  ...item,
                  sub_total: calculateSubTotal({
                    value: findProduct.price,
                    quantity: item.quantity,
                  }).toFixed(2),
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

  const handleAddRow = (e, setTableData, initialRow) => {
    e.preventDefault();
    setTableData((prevData) => [
      ...prevData,
      {
        ...initialRow,
        type: productOrService == "product" ? "1" : "2",
        wharehouseSelect: wharehouseSelect,
      },
    ]);
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
              onChange={() => {}}
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
                      onChange={() => {}}
                    />
                    <input
                      type="hidden"
                      className="hidden"
                      hidden
                      readOnly
                      name={`type[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      value={!!row["type"] ? row["type"] : ""}
                      onChange={() => {}}
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
                            row["type"],
                          )
                        }
                      >
                        <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                          <SelectValue
                            placeholder={
                              row["type"] == "1" ? "Producto" : "Servicio"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {(
                            allProductsOrServices.find((pOrs) => {
                              if (
                                row["type"] == "1" &&
                                pOrs?.type == row["wharehouseSelect"]
                              ) {
                                return pOrs;
                              } else if (
                                row["type"] == "2" &&
                                pOrs?.type == "service"
                              ) {
                                return pOrs;
                              }
                            })?.value ?? []
                          ).map((product, index) => (
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
                      value={row[column.key] || ""}
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
                      value={row["sub_total"]}
                      onChange={() => {}}
                    />
                    ${row["sub_total"]}
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
                      value={row["total"]}
                      onChange={() => {}}
                    />
                    ${row["total"]}
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
          onChange={() => {}}
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
          disabled={!isEditable || (productOrService == "product" && !wharehouseSelect)}
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
