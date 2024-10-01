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

  // const [productCraft, setProductCraft] = useState({});

  const productCraft = data.product_craft.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const productNeed = data.product_need.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  console.log("productCraft ", productCraft);
  console.log("productNeed ", productNeed);

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

        <div className="flex h-full w-full flex-col justify-between gap-2 overflow-auto bg-blancoBg px-6 py-2">
          <div className="flex h-full flex-col gap-4 overflow-scroll pt-4">
            {/* config section */}
            <div className="flex h-20 w-full items-center justify-evenly gap-2 rounded-lg border px-6 py-2">
              <div className="flex w-1/3">
                <SelectRouter />
              </div>

              <div className="flex w-28">
                <InputRouter
                  type="number"
                  name="formula_tam"
                  placeholder="Tamaño Formula"
                />
              </div>
              <div className="flex w-28">
                <InputRouter type="text" name="unidad" placeholder="Unidad" />
              </div>
              <div className="flex w-20">
                <InputRouter type="number" name="merma" placeholder="Merma" />
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

                <TabsTrigger value="empaque">Materiales de Empaque</TabsTrigger>

                <TabsTrigger value="embalaje">
                  Materiales de Embalaje
                </TabsTrigger>

                <TabsTrigger value="subproductos">SubProductos</TabsTrigger>

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
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* end section */}
          <div className="flex w-full justify-center">
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Button
                type="button"
                onClick={() => navigate("/transformation/record/1")}
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
