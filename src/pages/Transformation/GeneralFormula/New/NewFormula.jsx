import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chatbubbleEllipsesOutline,
  chevronForward,
  closeCircle,
} from "ionicons/icons";

import NavigationHeader from "@/components/navigation-header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import TableForm from "../../Components/TableForm";
import TableFormWaste from "../../Components/TableFormWaste";
import TableFormSubProducts from "../../Components/TableFormSubProducts";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import EnergyTable from "../../Components/Tables/EnergyTable";
import PackagesTable from "../../Components/Tables/PackagesTable";
import CrateTable from "../../Components/Tables/CrateTable";
import SubProductsTable from "../../Components/Tables/SubProductsTable";
import ProcesoTable from "../../Components/Tables/ProcesoTable";
import PersonalTable from "../../Components/Tables/PersonalTable";

function NewFormula() {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const [newFormula, setNewFormula] = useState({
    product_id: "",
    quantity: "",
    unit: "",
    comments: "",
    type: "",
    label: "",
    value: "",
    vars: [
      {
        product_variable_id: 1,
        quantity: 10,
        unit: "kg",
      },
    ],
    slots: [
      {
        type: "primary",
        product_master_id: 123,
        product_variable_id: 2,
        quantity: 50,
        unit: "kg",
      },
    ],
    energetics: [
      {
        type: "electricity",
        product_master_id: 456,
        product_variable_id: 3,
        quantity: 200,
        unit: "kWh",
      },
    ],
    packaging: [
      {
        type: "box",
        product_master_id: 789,
        product_variable_id: 4,
        quantity: 30,
        quantity_per_unity: 5,
        unit: "pieces",
      },
    ],
    packaging_package: [
      {
        type: "pallet",
        product_master_id: 987,
        product_variable_id: 5,
        quantity: 10,
        quantity_per_unity: 2,
        unit: "pallets",
      },
    ],
    sub_products: [
      {
        type: "byproduct",
        product_master_id: 654,
        product_variable_id: 6,
        quantity: 20,
        unit: "kg",
      },
    ],
    wastes: [
      {
        type: "scrap",
        product_master_id: 321,
        product_variable_id: 7,
        quantity: 5,
        unit: "kg",
      },
    ],
  });

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0.0);

  const [variables, setVariables] = useState([]);

  const [energetics, setEnergetics] = useState([]);
  const [totalEnergetics, setTotalEnergetics] = useState(0);

  const [packages, setPackages] = useState([]);
  const [totalPackages, setTotalPackages] = useState(0);

  const [crate, setCrate] = useState([]);
  const [totalCrate, setTotalCrate] = useState(0);

  const [subProducts, setSubProducts] = useState([]);
  const [totalSubProducts, setSubTotalProducts] = useState(0);

  const [proceso, setProceso] = useState([]);
  const [totalProceso, setTotalProceso] = useState(0);

  const [personal, setPersonal] = useState([]);
  const [totalPersonal, setTotalPersonal] = useState(0);

  const [totalTableSection, setTotalTableSection] = useState(totalProducts);
  const [tableName, setTableName] = useState("FABRICACION");

  useEffect(() => {
    console.log(tableName);
    switch (tableName.toLowerCase()) {
      case "fabricacion":
        console.log("fabricacion");
        setTotalTableSection(totalProducts);
        break;

      case "energeticos":
        setTotalTableSection(totalEnergetics);
        break;

      case "empaque":
        setTotalTableSection(totalPackages);
        break;

      case "embalaje":
        setTotalTableSection(totalCrate);
        break;

      case "subproductos":
        setTotalTableSection(totalSubProducts);
        break;

      default:
        break;
    }
  }, [
    totalProducts,
    totalEnergetics,
    totalPackages,
    totalCrate,
    totalSubProducts,
    tableName,
  ]);

  function setTableTotal(table) {
    switch (table) {
      case "fabricacion":
        setTableName(table.toUpperCase());
        setTotalTableSection(totalProducts);
        break;
      case "energeticos":
        setTableName(table.toUpperCase());
        setTotalTableSection(totalEnergetics);
        break;
      case "empaque":
        setTableName(table.toUpperCase());
        setTotalTableSection(totalPackages);
        break;
      case "embalaje":
        setTableName(table.toUpperCase());
        setTotalTableSection(totalCrate);
        break;
      case "subproductos":
        setTableName(table.toUpperCase());
        setTotalTableSection(totalSubProducts);
        break;

      default:
        break;
    }
  }

  const productCraft = data.product_craft.map((product) => ({
    label: product.name,
    value: product.id,
    ...product,
  }));

  const productNeed = data.product_need.map((product) => ({
    label: product.name,
    value: product.id,
    ...product,
  }));

  function fillFormulaProduct(e) {
    console.log(e);
    if (e.variables) {
      setVariables(e.variables);
    }
    setNewFormula({
      ...newFormula,
      product_id: e.id,
      unit: e.unit,
      type: e.type,
      price: e.price,
      quantity: 1,
      comments: "",
      label: e.name,
      value: e.id,
    });
  }

  const rows2 = [
    {
      name: "Grande",
      id: 15,
    },
    {
      name: "Mediana",
      id: 16,
    },
    {
      name: "Pequeña",
      id: 17,
    },
  ];
  const columns = ["Col 1", "Col 2", "Col 3"];

  return (
    <div className="flex h-full w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-grisHeading">
              TRANSFORMACIÓN
            </h2>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Nueva Formula
          </p>

          <div className="flex items-end justify-center">
            <Link to={"/transformation"}>
              <IonIcon
                icon={closeCircle}
                size="small"
                className="cursor-pointer text-grisDisabled"
              ></IonIcon>
            </Link>
          </div>
        </div>

        <div className="flex h-full w-full flex-col justify-between">
          <Tabs
            defaultValue="productos"
            className="flex h-full w-full flex-col"
          >
            {/* <TabsList className="relative bottom-12 left-60"> */}
            <TabsList className="flex h-8 w-fit self-end bg-[#E8E8E8] p-1 px-1">
              <TabsTrigger
                value="productos"
                className="h-[24px] px-3 py-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:text-grisHeading"
              >
                Productos
              </TabsTrigger>

              <TabsTrigger
                value="proceso"
                className="h-[24px] px-3 py-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:text-grisHeading"
              >
                Proceso
              </TabsTrigger>

              <TabsTrigger
                value="personal"
                className="h-[24px] px-3 py-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:text-grisHeading"
              >
                Personal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="productos" className="h-full">
              <div className="flex h-full w-full flex-col justify-between gap-2 overflow-auto bg-blancoBg px-6 py-2">
                <div className="flex h-full flex-col gap-4 overflow-scroll pt-4">
                  {/* config section */}
                  <div className="flex h-20 w-full items-center justify-evenly gap-2 rounded-lg border px-6 py-2">
                    <div className="flex w-1/3">
                      <SelectRouter
                        options={productCraft}
                        onChange={(e) => fillFormulaProduct(e)}
                        value={newFormula}
                      />
                    </div>

                    <div className="flex w-28">
                      <InputRouter
                        type="number"
                        name="formula_tam"
                        placeholder="Cantidad"
                      />
                    </div>
                    <div className="flex w-28">
                      {/* <div className="w-full border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus-visible:ring-primarioBotones">
                  {newFormula.unit}
                </div> */}
                      <InputRouter
                        type="text"
                        name="unidad"
                        placeholder="Unidad"
                        value={newFormula.unit}
                      />
                    </div>
                    <div className="flex w-20">
                      <InputRouter
                        type="number"
                        name="merma"
                        placeholder="Merma"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="checkBoxMultiProcess"
                        className="flex items-center gap-2 text-[14px] font-light text-grisText"
                      >
                        <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
                        <p className="text-[12px]">Porcentaje</p>
                      </label>
                      <label
                        htmlFor="checkBoxMultiProcess"
                        className="flex items-center gap-2 text-[14px] font-light text-grisText"
                      >
                        <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
                        <p className="text-[12px]">Unidad</p>
                      </label>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="checkBoxMultiProcess"
                        className="flex items-center gap-2 text-[14px] font-light text-grisText"
                      >
                        <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
                        <p className="text-[12px]">Global</p>
                      </label>
                      <label
                        htmlFor="checkBoxMultiProcess"
                        className="flex items-center gap-2 text-[14px] font-light text-grisText"
                      >
                        <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
                        <p className="text-[12px]">Individual</p>
                      </label>
                    </div>
                  </div>

                  {/* variable section */}
                  {newFormula.type == "2" && (
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="flex font-poppins font-medium text-grisHeading">
                          Variables
                        </AccordionTrigger>
                        <AccordionContent>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                              gap: "10px",
                            }}
                          >
                            {rows2.map((row, rowIndex) =>
                              columns.map((col, colIndex) => (
                                <div
                                  key={`${rowIndex}-${colIndex}`}
                                  style={{
                                    border: "1px solid black",
                                    padding: "10px",
                                    textAlign: "center",
                                  }}
                                >
                                  {row.name}
                                </div>
                              )),
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}

                  {/* tabs section */}
                  <Tabs
                    defaultValue="fabricacion"
                    className="flex h-full w-full flex-col"
                    onValueChange={(e) => setTableTotal(e)}
                  >
                    <TabsList className="flex justify-start gap-4 rounded-none border-b bg-inherit py-6">
                      <TabsTrigger
                        value="fabricacion"
                        className="rounded-none border-b-2 border-blancoBg px-0 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                      >
                        MATERIALES
                      </TabsTrigger>

                      <TabsTrigger
                        value="energeticos"
                        className="rounded-none border-b-2 border-blancoBg px-0 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                      >
                        RECURSOS
                      </TabsTrigger>

                      <TabsTrigger
                        value="empaque"
                        className="rounded-none border-b-2 border-blancoBg px-0 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                      >
                        EMPAQUE
                      </TabsTrigger>

                      <TabsTrigger
                        value="embalaje"
                        className="rounded-none border-b-2 border-blancoBg px-0 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                      >
                        EMBALAJE
                      </TabsTrigger>

                      <TabsTrigger
                        value="subproductos"
                        className="rounded-none border-b-2 border-blancoBg px-0 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                      >
                        SUBPRODUCTOS
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="fabricacion" className="w-full">
                      {/* materiales fab section */}
                      <div className="rounded-xl py-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Fabricación
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
                            tableData={products}
                            setTableData={setProducts}
                            setTotalProducts={setTotalProducts}
                            productNeed={productNeed}
                          />
                        </div>

                        {/* <div className="mt-4 flex justify-end">
                          <div className="flex items-center gap-x-4">
                            <h2 className="text-sm font-medium text-grisText">
                              Total
                            </h2>
                            <div className="min-w-24 rounded-lg border border-[#8F8F8F] px-2 py-1">
                              <p className="text-end text-sm font-medium text-grisText">
                                {totalProducts}
                              </p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </TabsContent>

                    <TabsContent value="energeticos" className="w-full">
                      {/* recursos ene fab section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Recursos Energéticos
                        </h2>
                        <div className="overflow-auto">
                          <EnergyTable
                            tableData={energetics}
                            setTableData={setEnergetics}
                            setTotalProducts={setTotalEnergetics}
                            productNeed={productNeed}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="empaque" className="w-full">
                      {/* materiales empaque section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Empaque
                        </h2>
                        <div className="overflow-auto">
                          <PackagesTable
                            tableData={packages}
                            setTableData={setPackages}
                            setTotalProducts={setTotalPackages}
                            productNeed={productNeed}
                          />
                        </div>

                        <div className="mt-4 flex justify-end">
                          <div className="flex items-center gap-x-4">
                            <h2 className="text-sm font-medium text-grisText">
                              Total
                            </h2>
                            <div className="min-w-24 rounded-lg border border-[#8F8F8F] px-2 py-1">
                              <p className="text-end text-sm font-medium text-grisText">
                                {totalProducts}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="embalaje" className="w-full">
                      {/* materiales embalaje section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Embalaje
                        </h2>
                        <div className="overflow-auto">
                          <CrateTable
                            tableData={crate}
                            setTableData={setCrate}
                            setTotalProducts={setTotalCrate}
                            productNeed={productNeed}
                          />
                        </div>

                        <div className="mt-4 flex justify-end">
                          <div className="flex items-center gap-x-4">
                            <h2 className="text-sm font-medium text-grisText">
                              Total
                            </h2>
                            <div className="min-w-24 rounded-lg border border-[#8F8F8F] px-2 py-1">
                              <p className="text-end text-sm font-medium text-grisText">
                                {totalProducts}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="subproductos" className="w-full">
                      {/* subproductos section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          SubProductos
                        </h2>
                        <div className="overflow-auto">
                          <SubProductsTable
                            tableData={subProducts}
                            setTableData={setSubProducts}
                            setTotalProducts={setSubTotalProducts}
                            productNeed={productNeed}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="proceso" className="h-full">
              <div className="flex h-full w-full flex-col justify-between gap-2 overflow-auto bg-blancoBg px-6 py-2">
                <div className="flex h-full flex-col gap-4 overflow-scroll pt-4">
                  {/* config section */}
                  <div className="flex h-20 w-full items-center justify-evenly gap-2 rounded-lg border px-6 py-2">
                    <div className="flex w-1/3">
                      <SelectRouter
                        options={productCraft}
                        onChange={(e) => fillFormulaProduct(e)}
                        value={newFormula}
                      />
                    </div>

                    <div className="flex w-28">
                      <InputRouter
                        type="number"
                        name="formula_tam"
                        placeholder="Cantidad"
                      />
                    </div>
                    <div className="flex w-28">
                      {/* <div className="w-full border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus-visible:ring-primarioBotones">
                  {newFormula.unit}
                </div> */}
                      <InputRouter
                        type="text"
                        name="unidad"
                        placeholder="Fecha de producción"
                      />
                    </div>
                    <div className="flex w-28">
                      <InputRouter
                        type="text"
                        name="merma"
                        placeholder="Cuenta Contable"
                      />
                    </div>
                    <div className="flex w-28">
                      <InputRouter
                        type="text"
                        name="merma"
                        placeholder="Almacen PEP"
                      />
                    </div>
                    <div className="flex w-28">
                      <InputRouter
                        type="text"
                        name="merma"
                        placeholder="Almacen Destino"
                      />
                    </div>
                  </div>

                  {/* materiales fab section */}
                  <div className="rounded-xl p-4">
                    <h2 className="text-md font-poppins font-medium text-[#44444F]">
                      Proceso
                    </h2>
                    <div className="overflow-auto">
                      <ProcesoTable
                        tableData={products}
                        setTableData={setProducts}
                        setTotalProducts={setTotalProducts}
                        productNeed={productNeed}
                      />
                    </div>

                    <div className="mt-4 flex justify-end">
                      <div className="flex items-center gap-x-4">
                        <h2 className="text-sm font-medium text-grisText">
                          Total
                        </h2>
                        <div className="min-w-24 rounded-lg border border-[#8F8F8F] px-2 py-1">
                          <p className="text-end text-sm font-medium text-grisText">
                            {totalProducts}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personal" className="h-full">
              <div className="flex h-full w-full flex-col justify-between gap-2 overflow-auto bg-blancoBg px-6 py-2">
                <div className="flex h-full flex-col gap-4 overflow-scroll pt-4">
                  {/* config section */}
                  <div className="flex h-20 w-full items-center justify-evenly gap-2 rounded-lg border px-6 py-2">
                    <div className="flex w-1/3">
                      <SelectRouter
                        options={productCraft}
                        onChange={(e) => fillFormulaProduct(e)}
                        value={newFormula}
                      />
                    </div>

                    <div className="flex w-28">
                      <InputRouter
                        type="number"
                        name="formula_tam"
                        placeholder="Cantidad"
                      />
                    </div>
                    <div className="flex w-28">
                      {/* <div className="w-full border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus-visible:ring-primarioBotones">
                  {newFormula.unit}
                </div> */}
                      <InputRouter
                        type="text"
                        name="unidad"
                        placeholder="Fecha de producción"
                      />
                    </div>
                    <div className="flex w-28">
                      <InputRouter
                        type="text"
                        name="merma"
                        placeholder="Cuenta Contable"
                      />
                    </div>
                    <div className="flex w-28">
                      <InputRouter
                        type="text"
                        name="merma"
                        placeholder="Almacen PEP"
                      />
                    </div>
                    <div className="flex w-28">
                      <InputRouter
                        type="text"
                        name="merma"
                        placeholder="Almacen Destino"
                      />
                    </div>
                  </div>

                  {/* materiales fab section */}
                  <div className="rounded-xl p-4">
                    <h2 className="text-md font-poppins font-medium text-[#44444F]">
                      Personal
                    </h2>
                    <div className="overflow-auto">
                      <PersonalTable
                        tableData={products}
                        setTableData={setProducts}
                        setTotalProducts={setTotalProducts}
                        productNeed={productNeed}
                      />
                    </div>

                    <div className="mt-4 flex justify-end">
                      <div className="flex items-center gap-x-4">
                        <h2 className="text-sm font-medium text-grisText">
                          Total
                        </h2>
                        <div className="min-w-24 rounded-lg border border-[#8F8F8F] px-2 py-1">
                          <p className="text-end text-sm font-medium text-grisText">
                            {totalProducts}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* end section */}
          <div className="flex w-full items-center justify-between rounded-b-lg bg-blancoBg px-4 py-2">
            <div className="flex rounded-full border-2 p-2">
              <IonIcon
                icon={chatbubbleEllipsesOutline}
                className="flex size-5"
              />
            </div>

            <div className="">|</div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="text-xs text-grisSubText">
                  TOTAL “{tableName}”
                </div>
                <div className="flex h-8 w-24 items-center rounded-xl border border-grisSubText pl-2 text-sm text-grisSubText">
                  ${totalTableSection}
                </div>
              </div>
              <IonIcon icon={chevronForward} className="size-4 text-black" />
              <div className="flex items-center gap-2">
                <div className="text-xs text-grisSubText">TOTAL “SECCIÓN”</div>
                <div className="flex h-8 w-24 items-center rounded-xl border border-grisSubText pl-2 text-sm text-grisSubText">
                  $765.99
                </div>
              </div>
              <IonIcon icon={chevronForward} className="size-4 text-black" />
              <div className="flex items-center gap-2">
                <div className="text-xs text-grisSubText">TOTAL “FÓRMULA”</div>
                <div className="flex h-8 w-24 items-center rounded-xl border border-grisSubText pl-2 text-sm text-grisSubText">
                  $765.99
                </div>
              </div>
            </div>

            <div className="">|</div>

            <div className="flex gap-4">
              <button
                type="button"
                className="h-8 w-24 rounded-xl border border-blancoBox2 bg-blancoBg text-sm font-semibold text-grisSubText"
              >
                <Link to={"/transformation"}>Cancelar</Link>
              </button>
              <button
                type="button"
                className="h-8 w-24 rounded-xl bg-blancoBox2 text-sm font-semibold text-grisHeading"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFormula;
