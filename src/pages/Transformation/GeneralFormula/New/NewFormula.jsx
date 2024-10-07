import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";

import NavigationHeader from "@/components/navigation-header";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import TableForm from "../../Components/TableForm";
import TableFormWaste from "../../Components/TableFormWaste";
import TableFormSubProducts from "../../Components/TableFormSubProducts";

import StatusInformation from "@/components/StatusInformation/status-information";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function NewFormula() {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [wastes, setWastes] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalSubProducts, setSubTotalProducts] = useState(0);
  const [totalWastes, setTotalWastes] = useState(0);

  const [newFormula, setNewFormula] = useState({
    product_id: "",
    quantity: "",
    unit: "",
    comments: "",
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

  // const [productCraft, setProductCraft] = useState({});

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

  // console.log("productCraft ", productCraft);
  // console.log("productNeed ", productNeed);

  function fillFormulaProduct(e) {
    // console.log(e);
    setNewFormula({
      product_id: e.id,
      unit: e.unit,
    });
  }

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
          {/* <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div> */}
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
            <TabsList className="flex w-fit self-end bg-[#F2F2F2]">
              <TabsTrigger
                value="productos"
                className="text-grisSubText data-[state=active]:text-grisHeading"
              >
                Productos
              </TabsTrigger>

              <TabsTrigger
                value="proceso"
                className="text-grisSubText data-[state=active]:text-grisHeading"
              >
                Proceso
              </TabsTrigger>

              <TabsTrigger
                value="personal"
                className="text-grisSubText data-[state=active]:text-grisHeading"
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

                  {/* tabs section */}
                  <Tabs
                    defaultValue="fabricacion"
                    className="flex h-full w-full flex-col"
                  >
                    <TabsList className="flex justify-between bg-grisBg">
                      <TabsTrigger
                        value="fabricacion"
                        className="text-grisSubText data-[state=active]:text-grisHeading"
                      >
                        Materiales de Fabricación
                      </TabsTrigger>

                      <TabsTrigger
                        value="energeticos"
                        className="text-grisSubText data-[state=active]:text-grisHeading"
                      >
                        Recursos Energéticos
                      </TabsTrigger>

                      <TabsTrigger
                        value="empaque"
                        className="text-grisSubText data-[state=active]:text-grisHeading"
                      >
                        Materiales de Empaque
                      </TabsTrigger>

                      <TabsTrigger
                        value="embalaje"
                        className="text-grisSubText data-[state=active]:text-grisHeading"
                      >
                        Materiales de Embalaje
                      </TabsTrigger>

                      <TabsTrigger
                        value="subproductos"
                        className="text-grisSubText data-[state=active]:text-grisHeading"
                      >
                        SubProductos
                      </TabsTrigger>

                      <TabsTrigger
                        value="desechos"
                        className="text-grisSubText data-[state=active]:text-grisHeading"
                      >
                        Desechos
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="fabricacion" className="w-full">
                      {/* materiales fab section */}
                      <div className="rounded-xl p-4">
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

                    <TabsContent value="energeticos" className="w-full">
                      {/* recursos ene fab section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Recursos Energéticos
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="empaque" className="w-full">
                      {/* materiales empaque section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Empaque
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="embalaje" className="w-full">
                      {/* materiales embalaje section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Embalaje
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="subproductos" className="w-full">
                      {/* subproductos section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          SubProductos
                        </h2>
                        <div className="overflow-auto">
                          <TableFormSubProducts
                            tableData={subProducts}
                            setTableData={setSubProducts}
                            setTotalProducts={setSubTotalProducts}
                            productNeed={productNeed}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="desechos" className="w-full">
                      {/* desechos section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Desechos
                        </h2>
                        <div className="overflow-auto">
                          <TableFormWaste
                            tableData={wastes}
                            setTableData={setWastes}
                            setTotalProducts={setTotalWastes}
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

                  <Tabs
                    defaultValue="fabricacion"
                    className="flex h-full w-full flex-col"
                  >
                    <TabsList>
                      <TabsTrigger value="fabricacion">
                        Materiales de Fabricación
                      </TabsTrigger>

                      <TabsTrigger value="energeticos">
                        Recursos Energéticos
                      </TabsTrigger>

                      <TabsTrigger value="empaque">
                        Materiales de Empaque
                      </TabsTrigger>

                      <TabsTrigger value="embalaje">
                        Materiales de Embalaje
                      </TabsTrigger>

                      <TabsTrigger value="subproductos">
                        SubProductos
                      </TabsTrigger>

                      <TabsTrigger value="desechos">Desechos</TabsTrigger>
                    </TabsList>

                    <TabsContent value="fabricacion" className="w-full">
                      {/* materiales fab section */}
                      <div className="rounded-xl p-4">
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

                    <TabsContent value="energeticos" className="w-full">
                      {/* recursos ene fab section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Recursos Energéticos
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="empaque" className="w-full">
                      {/* materiales empaque section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Empaque
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="embalaje" className="w-full">
                      {/* materiales embalaje section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Embalaje
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="subproductos" className="w-full">
                      {/* subproductos section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          SubProductos
                        </h2>
                        <div className="overflow-auto">
                          <TableFormSubProducts
                            tableData={subProducts}
                            setTableData={setSubProducts}
                            setTotalProducts={setSubTotalProducts}
                            productNeed={productNeed}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="desechos" className="w-full">
                      {/* desechos section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Desechos
                        </h2>
                        <div className="overflow-auto">
                          <TableFormWaste
                            tableData={wastes}
                            setTableData={setWastes}
                            setTotalProducts={setTotalWastes}
                            productNeed={productNeed}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
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

                  <Tabs
                    defaultValue="fabricacion"
                    className="flex h-full w-full flex-col"
                  >
                    <TabsList>
                      <TabsTrigger value="fabricacion">
                        Materiales de Fabricación
                      </TabsTrigger>

                      <TabsTrigger value="energeticos">
                        Recursos Energéticos
                      </TabsTrigger>

                      <TabsTrigger value="empaque">
                        Materiales de Empaque
                      </TabsTrigger>

                      <TabsTrigger value="embalaje">
                        Materiales de Embalaje
                      </TabsTrigger>

                      <TabsTrigger value="subproductos">
                        SubProductos
                      </TabsTrigger>

                      <TabsTrigger value="desechos">Desechos</TabsTrigger>
                    </TabsList>

                    <TabsContent value="fabricacion" className="w-full">
                      {/* materiales fab section */}
                      <div className="rounded-xl p-4">
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

                    <TabsContent value="energeticos" className="w-full">
                      {/* recursos ene fab section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Recursos Energéticos
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="empaque" className="w-full">
                      {/* materiales empaque section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Empaque
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="embalaje" className="w-full">
                      {/* materiales embalaje section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Materiales de Embalaje
                        </h2>
                        <div className="overflow-auto">
                          <TableForm
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
                    </TabsContent>

                    <TabsContent value="subproductos" className="w-full">
                      {/* subproductos section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          SubProductos
                        </h2>
                        <div className="overflow-auto">
                          <TableFormSubProducts
                            tableData={subProducts}
                            setTableData={setSubProducts}
                            setTotalProducts={setSubTotalProducts}
                            productNeed={productNeed}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="desechos" className="w-full">
                      {/* desechos section */}
                      <div className="rounded-xl p-4">
                        <h2 className="text-md font-poppins font-medium text-[#44444F]">
                          Desechos
                        </h2>
                        <div className="overflow-auto">
                          <TableFormWaste
                            tableData={wastes}
                            setTableData={setWastes}
                            setTotalProducts={setTotalWastes}
                            productNeed={productNeed}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* end section */}
          <div className="flex w-full justify-center rounded-b-lg bg-blancoBg">
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Button
                type="button"
                // onClick={() => navigate("/transformation/record/1")}
                className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
              >
                Save
              </Button>
            </StatusInformation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFormula;
