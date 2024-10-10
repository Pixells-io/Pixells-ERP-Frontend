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
import DatePicker from "@/components/DatePickerStyle/DatePicker";
import { useLocation } from "react-router-dom";
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
  discountGeneral,
  deliveryDateGlobal,
}) => {
  const initialRow = {
    type: productOrService == "product" ? "1" : "2",
    inventory_stock_id: "",
    service_id: "",
    item: "",
    code: "",
    // price: "",
    discount: "",
    // tax: "",
    quantity: "",
    delivery_date: "",
    product_idAux: "",
    // master_product: "",
    // variations: "",
    sub_total: "0.00",
    total: "0.00",
  };
  const [allProductsOrServices, setAllProductsOrServices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const auxProductsOrServices = [...allProductsOrServices];
    setAllProductsOrServices([
      ...auxProductsOrServices,
      { type: "service", value: services_map },
      { type: "product", value: products_map },
    ]);
  }, []);

  useEffect(() => {
    changeValueDiscountByGeneral();
  }, [discountGeneral]);

  useEffect(() => {
    changeValueDeliveryDateGlobalInInputs();
  }, [deliveryDateGlobal]);

  const changeValueDiscountByGeneral = () => {
    if (tableData.length > 0 && !location.pathname.includes("edit")) {
      const auxTableData = tableData.map((td) => {
        return {
          ...td,
          discount: discountGeneral,
          total: calculateTotal({
            value: td.value,
            quantity: td.quantity,
            discount: discountGeneral,
            taxes: td.taxes,
          }).toFixed(2),
        };
      });
      setTableData([...auxTableData]);
    }
  };

  const changeValueDeliveryDateGlobalInInputs = () => {
    if (tableData.length > 0 && !location.pathname.includes("edit")) {
      const auxTableData = tableData.map((td) => {
        return {
          ...td,
          delivery_date: deliveryDateGlobal,
        };
      });
      setTableData([...auxTableData]);
    }
  };

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
    ],
    [],
  );

  const handleInputChange = (rowIndex, key, value, type) => {
    //type 1 = products, type 2 = service
    //si es product_idAux y no tiene valor eliminar proceso
    if (key == "product_idAux" && value == "") return;
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
                  item.type == "1" ? findProduct?.id : null,
                service_id:
                  item.type == "2" ? findProduct?.id : null,
                code: findProduct?.code,
                sub_total: calculateSubTotal({
                  value: findProduct?.price,
                  quantity: 1,
                }).toFixed(2),
                total: calculateTotal({
                  value: findProduct?.price,
                  quantity: 1,
                  discount: item.discount,
                  taxes: 16,
                }).toFixed(2),
                value: findProduct?.price,
                product_idAux: value,
                quantity: 1,
                master_product: findProduct?.product_master_id,
                variations: findProduct?.variation_id,
                taxes: 16,
                discount: item.discount || "0",
              }
            : item,
        ),
      );
    } else {
      if (key == "discount") {
        setTableData((prevData) =>
          prevData.map((item, index) =>
            index === rowIndex && ((value >= 0 && value < 100) || value == "")
              ? {
                  ...item,
                  discount: value,
                  total: calculateTotal({
                    value: item.value,
                    quantity: item.quantity,
                    discount: value,
                    taxes: item.taxes,
                  }).toFixed(2),
                }
              : item,
          ),
        );
      } else if (key == "taxes") {
        setTableData((prevData) =>
          prevData.map((item, index) =>
            index === rowIndex && ((value >= 0 && value < 100) || value == "")
              ? {
                  ...item,
                  taxes: value,
                  total: calculateTotal({
                    value: item.value,
                    quantity: item.quantity,
                    discount: item.discount,
                    taxes: value,
                  }).toFixed(2),
                }
              : item,
          ),
        );
      } else if (key == "quantity") {
        setTableData((prevData) =>
          prevData.map((item, index) =>
            index === rowIndex &&
            (value >= 1 || value == "") &&
            value <= item.inventory
              ? {
                  ...item,
                  quantity: value,
                  total: calculateTotal({
                    value: item.value,
                    quantity: value,
                    discount: item.discount,
                    taxes: item.taxes,
                  }).toFixed(2),
                  sub_total: calculateSubTotal({
                    value: item.value,
                    quantity: value,
                  }).toFixed(2),
                }
              : item,
          ),
        );
      } else if (key == "value") {
        setTableData((prevData) =>
          prevData.map((item, index) =>
            index === rowIndex && (value >= 0 || value == "")
              ? {
                  ...item,
                  value: value,
                  total: calculateTotal({
                    value: value,
                    quantity: item.quantity,
                    discount: item.discount,
                    taxes: item.taxes,
                  }).toFixed(2),
                  sub_total: calculateSubTotal({
                    value: value,
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

  const handleDeleteRow = (rowIndex) => {
    setTableData((prevData) => {
      return prevData.filter((_, index) => index !== rowIndex);
    });
  };

  const handleAddRow = (e, setTableData, initialRow) => {
    e.preventDefault();
    setTableData((prevData) => [
      ...prevData,
      {
        ...initialRow,
        discount: discountGeneral || 0,
        type: productOrService == "product" ? "1" : "2",
        delivery_date: deliveryDateGlobal,
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
        <input
          type="hidden"
          className="hidden"
          hidden
          readOnly
          name={`productsOrService`}
          value={JSON.stringify(tableData)}
          onChange={() => {}}
        />
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-2 border-b-primario">
              <TableHead>Item</TableHead>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.header}</TableHead>
              ))}
              <TableHead>Fecha de Entrega</TableHead>
              <TableHead>SubTotal</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell className="pb-0">
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
                      <div className="flex flex-col pt-[4px]">
                        <Input
                          className="h-[32px] rounded-[10px] border border-[#D7D7D7] bg-inherit p-1 font-roboto text-sm text-[#44444f] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          value={row["product"].label || ""}
                          readOnly={!isEditable}
                        />
                        <p className="pl-3.5 font-roboto text-[10px] font-normal text-grisDisabled">
                          {row["type"] == "1" ? "Producto" : "Servicio"}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col pt-[4px]">
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
                                  pOrs?.type == "product"
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
                                  disabled={
                                    !!tableData.find(
                                      (td) => ( td.product_idAux == product.value && td.type == "1"),
                                    ) && row["type"] == "1"
                                  }
                                >
                                  {product.label}
                                </SelectItem>
                              </div>
                            ))}
                          </SelectContent>
                        </Select>
                        <p className="pl-3.5 font-roboto text-[10px] font-normal text-grisDisabled">
                          {row["type"] == "1" ? "Producto" : "Servicio"}
                        </p>
                      </div>
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
                    <DatePicker
                      title={"MM/DD/YYYY"}
                      value={row["delivery_date"]}
                      onChange={(e) =>
                        handleInputChange(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          "delivery_date",
                          e,
                        )
                      }
                      name={`delivery_date[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      className={"w-fit text-[11px] font-normal"}
                      required={true}
                      disabled={!isEditable}
                    />
                  </div>
                </TableCell>
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
                        )
                      }
                      disabled={!isEditable}
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
