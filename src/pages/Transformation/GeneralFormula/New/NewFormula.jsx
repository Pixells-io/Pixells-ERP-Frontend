import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useSubmit } from "react-router-dom";

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

import TableForm from "../../Components/TableForm";
import EnergyTable from "../../Components/Tables/EnergyTable";
import PackagesTable from "../../Components/Tables/PackagesTable";
import CrateTable from "../../Components/Tables/CrateTable";
import SubProductsTable from "../../Components/Tables/SubProductsTable";

import ProcesoTable from "../../Components/Tables/ProcesoTable";
import PersonalTable from "../../Components/Tables/PersonalTable";
import ArticleSelectOptions from "./ArticleSelectOptions";

function NewFormula() {
  const { catalogTransformation, positions } = useLoaderData();
  const data = catalogTransformation.data;
  const submit = useSubmit();

  const [optionGlobalMerma, setOptionGlobalMerma] = useState({
    merma: 0,
    percentegeCheck: "1",
    unitCheck: "0",
  });
  const [optionGInditOrGlobalMerma, setOptionGIndiOrGlobalMerma] = useState({
    globalCheck: "0",
    individualCheck: "1",
  });

  const [newFormula, setNewFormula] = useState({
    product_id: "",
    quantity: "",
    unit: "",
    comments: "",
    type: "",
    label: "Selecciona un Articulo",
    value: "default",
    // vars: [
    //   {
    //     product_variable_id: 1,
    //     quantity: 10,
    //     unit: "kg",
    //   },
    // ],
    // slots: [
    //   {
    //     type: "primary",
    //     product_master_id: 123,
    //     product_variable_id: 2,
    //     quantity: 50,
    //     unit: "kg",
    //   },
    // ],
    // energetics: [
    //   {
    //     type: "electricity",
    //     product_master_id: 456,
    //     product_variable_id: 3,
    //     quantity: 200,
    //     unit: "kWh",
    //   },
    // ],
    // packaging: [
    //   {
    //     type: "box",
    //     product_master_id: 789,
    //     product_variable_id: 4,
    //     quantity: 30,
    //     quantity_per_unity: 5,
    //     unit: "pieces",
    //   },
    // ],
    // packaging_package: [
    //   {
    //     type: "pallet",
    //     product_master_id: 987,
    //     product_variable_id: 5,
    //     quantity: 10,
    //     quantity_per_unity: 2,
    //     unit: "pallets",
    //   },
    // ],
    // sub_products: [
    //   {
    //     type: "byproduct",
    //     product_master_id: 654,
    //     product_variable_id: 6,
    //     quantity: 20,
    //     unit: "kg",
    //   },
    // ],
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

  const [totalProductsSection, setTotalProductsSection] = useState(0);

  const [proceso, setProceso] = useState([]);
  const [totalProceso, setTotalProceso] = useState(0);

  const [personal, setPersonal] = useState([]);
  const [totalPersonal, setTotalPersonal] = useState(0);

  const [totalTableSection, setTotalTableSection] = useState(totalProducts);
  const [tableName, setTableName] = useState("FABRICACION");

  const [totalFormula, setTotalFormula] = useState(0);

  useEffect(() => {
    switch (tableName.toLowerCase()) {
      case "fabricacion":
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

  const [sectionName, setSectionName] = useState("PRODUCTOS");

  function setSectionTotal(table) {
    switch (table) {
      case "productos":
        setSectionName(table.toUpperCase());
        // setTotalProductsSection(totalProductsSection);
        break;
      case "proceso":
        setSectionName(table.toUpperCase());
        // setTotalProductsSection(totalProceso);
        break;
      case "personal":
        setSectionName(table.toUpperCase());
        // setTotalProductsSection(totalPersonal);
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

  const [productsSelected, setProductsSelected] = useState(productNeed);

  useEffect(() => {
    const combinedArrays = [...products, ...energetics, ...packages, ...crate];
    const combinedIDs = new Set(combinedArrays.map((item) => item.id));
    const uniqueFromMaster = productNeed.filter(
      (item) => !combinedIDs.has(item.id),
    );
    const uniqueFromCombined = combinedArrays.filter(
      (item) => !productNeed.some((masterItem) => masterItem.id === item.id),
    );
    const result = [...uniqueFromMaster, ...uniqueFromCombined].filter(
      (r) => r.label != "Selecciona",
    );
    setProductsSelected([
      ...result,
      {
        idAux: 1,
        amount: 0,
        unit: "",
        price: 0,
        subTotal: 0,
        label: "Selecciona",
        value: "selecciona",
      },
    ]);
  }, [products, energetics, packages, crate]);

  useEffect(() => {
    setTotalProductsSection(
      (
        Number(totalProducts) +
        Number(totalEnergetics) +
        Number(totalPackages) +
        Number(totalCrate) +
        Number(totalSubProducts)
      ).toFixed(2),
    );
  }, [
    totalProducts,
    totalEnergetics,
    totalPackages,
    totalCrate,
    totalSubProducts,
  ]);

  useEffect(() => {
    setTotalFormula(
      Number(Number(totalProductsSection) + Number(totalPersonal)).toFixed(2),
    );
  }, [totalProductsSection, totalPersonal]);

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

  const [allSelected, setAllSelected] = useState([]);

  useEffect(() => {
    const getVariablesSelect = variables.filter((v) => v.checked);

    let newArray = [];
    if (getVariablesSelect.length > 0) {
      getVariablesSelect.forEach((v) => {
        newArray.push({
          ...newFormula,
          label:
            newFormula.label + " / " + v.name.map((n) => n.name).join(" - "),
          variable: v,
        });
      });
    } else {
      newArray = products.concat(
        energetics,
        packages,
        crate,
        subProducts,
        newFormula,
      );
    }

    // delete "selecciona" options
    const newArrayDeleteSelecciona = newArray.filter(
      (e) => e.value != "selecciona",
    );

    setAllSelected([...newArrayDeleteSelecciona]);
  }, [
    products,
    energetics,
    packages,
    crate,
    subProducts,
    newFormula,
    variables,
  ]);

  function handleSubmit() {}

  const changeValueCheckedVariable = (index) => {
    setVariables((prevData) =>
      prevData.map((row, i) =>
        i === index ? { ...row, checked: !row.checked } : row,
      ),
    );
  };

  useEffect(() => {
    if (optionGlobalMerma.merma == "" || optionGlobalMerma.merma == null)
      return;

    const newProductsMerma = products.map((p) =>
      p.isMerma == "1"
        ? {
            ...p,
            merma: optionGlobalMerma.merma,
            totalNeto: (
              p.amount *
              (optionGlobalMerma.merma / 100)
            ).toFixed(2),
          }
        : { ...p },
    );
    
    const newEnergeticsMerma = energetics.map((p) =>
      p.isMerma == "1"
        ? {
            ...p,
            merma: optionGlobalMerma.merma,
            totalNeto: (
              p.amount *
              (optionGlobalMerma.merma / 100)
            ).toFixed(2),
          }
        : { ...p },
    );

    const newPackagesMerma = packages.map((p) =>
      p.isMerma == "1"
        ? {
            ...p,
            merma: optionGlobalMerma.merma,
            totalNeto: (
              p.amount *
              (optionGlobalMerma.merma / 100)
            ).toFixed(2),
          }
        : { ...p },
    );
    
    const newCrateMerma = crate.map((p) =>
      p.isMerma == "1"
        ? {
            ...p,
            merma: optionGlobalMerma.merma,
            totalNeto: (
              p.amount *
              (optionGlobalMerma.merma / 100)
            ).toFixed(2),
          }
        : { ...p },
    );
    
    const newSubProductMerma = subProducts.map((p) =>
      p.isMerma == "1"
        ? {
            ...p,
            merma: optionGlobalMerma.merma,
            totalNeto: (
              p.amount *
              (optionGlobalMerma.merma / 100)
            ).toFixed(2),
          }
        : { ...p },
    );

    

    setProducts([...newProductsMerma]);
    setEnergetics([...newEnergeticsMerma]);
    setPackages([...newPackagesMerma]);
    setCrate([...newCrateMerma]);
    setSubProducts([...newSubProductMerma]);
  }, [optionGlobalMerma]);

  useEffect(() => {
    let newProductsMerma = [];
    let newEnergeticsMerma = [];
    let newPackagesMerma = [];
    let newCrateMerma = [];
    let newSubProductMerma = [];
    if (optionGInditOrGlobalMerma.individualCheck == "1") {
      //if---------------------------------------------------------------------------------------------------
      newProductsMerma = products.map((p) =>
        p.isMerma == "1"
          ? {
              ...p,
              merma: optionGlobalMerma.merma,
              totalNeto: (
                p.amount *
                (optionGlobalMerma.merma / 100)
              ).toFixed(2),
            }
          : { ...p },
      );

      newEnergeticsMerma = energetics.map((p) =>
        p.isMerma == "1"
          ? {
              ...p,
              merma: optionGlobalMerma.merma,
              totalNeto: (
                p.amount *
                (optionGlobalMerma.merma / 100)
              ).toFixed(2),
            }
          : { ...p },
      );
      
      newPackagesMerma = packages.map((p) =>
        p.isMerma == "1"
          ? {
              ...p,
              merma: optionGlobalMerma.merma,
              totalNeto: (
                p.amount *
                (optionGlobalMerma.merma / 100)
              ).toFixed(2),
            }
          : { ...p },
      );
      
      newCrateMerma = crate.map((p) =>
        p.isMerma == "1"
          ? {
              ...p,
              merma: optionGlobalMerma.merma,
              totalNeto: (
                p.amount *
                (optionGlobalMerma.merma / 100)
              ).toFixed(2),
            }
          : { ...p },
      );
      
      newSubProductMerma = subProducts.map((p) =>
        p.isMerma == "1"
          ? {
              ...p,
              merma: optionGlobalMerma.merma,
              totalNeto: (
                p.amount *
                (optionGlobalMerma.merma / 100)
              ).toFixed(2),
            }
          : { ...p },
      );
      //-------------------------------------------------------------------------------------------------------
    } else if (optionGInditOrGlobalMerma.globalCheck == "1") {
      // second if --------------------------------------------------------------------------------------------
      newProductsMerma = products.map((p) => {
        return {
          ...p,
          merma: optionGlobalMerma.merma,
          isMerma: "1",
          totalNeto: (
            p.amount *
            (optionGlobalMerma.merma / 100)
          ).toFixed(2),
        };
      });

      newEnergeticsMerma = energetics.map((p) => {
        return {
          ...p,
          merma: optionGlobalMerma.merma,
          isMerma: "1",
          totalNeto: (
            p.amount *
            (optionGlobalMerma.merma / 100)
          ).toFixed(2),
        };
      });
      
      newPackagesMerma = packages.map((p) => {
        return {
          ...p,
          merma: optionGlobalMerma.merma,
          isMerma: "1",
          totalNeto: (
            p.amount *
            (optionGlobalMerma.merma / 100)
          ).toFixed(2),
        };
      });
      
      newCrateMerma = crate.map((p) => {
        return {
          ...p,
          merma: optionGlobalMerma.merma,
          isMerma: "1",
          totalNeto: (
            p.amount *
            (optionGlobalMerma.merma / 100)
          ).toFixed(2),
        };
      });
      
      newSubProductMerma = subProducts.map((p) => {
        return {
          ...p,
          merma: optionGlobalMerma.merma,
          isMerma: "1",
          totalNeto: (
            p.amount *
            (optionGlobalMerma.merma / 100)
          ).toFixed(2),
        };
      });

      //--------------------------------------------------------------------------------------------------------
    }

    setProducts([...newProductsMerma]);
    setEnergetics([...newEnergeticsMerma]);
    setPackages([...newPackagesMerma]);
    setCrate([...newCrateMerma]);
    setSubProducts([...newSubProductMerma]);
  }, [optionGInditOrGlobalMerma]);

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
            onValueChange={(e) => setSectionTotal(e)}
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
                  <ArticleSelectOptions
                    productCraft={productCraft}
                    fillFormulaProduct={fillFormulaProduct}
                    newFormula={newFormula}
                    setNewFormula={setNewFormula}
                    optionGlobalMerma={optionGlobalMerma}
                    setOptionGlobalMerma={setOptionGlobalMerma}
                    optionGInditOrGlobalMerma={optionGInditOrGlobalMerma}
                    setOptionGIndiOrGlobalMerma={setOptionGIndiOrGlobalMerma}
                  />

                  {/* variable section */}
                  {newFormula.type == "2" && (
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="flex font-poppins font-medium text-grisHeading">
                          Variables
                        </AccordionTrigger>
                        <AccordionContent className="flex max-h-[240px] w-full flex-col gap-4 overflow-y-scroll px-4 py-2">
                          {variables?.map((variable, i) => (
                            <div
                              className="flex items-center justify-between gap-4"
                              key={variable.id}
                            >
                              <div className="flex items-center gap-4">
                                <Checkbox
                                  className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                                  checked={variable.checked}
                                  onCheckedChange={(e) =>
                                    changeValueCheckedVariable(i)
                                  }
                                />
                                <span>V{i + 1}</span>
                                <div className="flex items-center gap-2">
                                  {variable.name.map(({ name }, i) => (
                                    <div
                                      className="rounded-xl bg-grisBg px-3 py-1 text-[10px] font-light text-grisText"
                                      key={i}
                                    >
                                      {name}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <input
                                type="number"
                                name=""
                                id=""
                                className="h-8 rounded-lg border border-[#D7D7D7] px-3 py-1"
                                min={0}
                                defaultValue={0}
                              />
                            </div>
                          ))}
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
                            productNeed={productsSelected}
                          />
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
                          <EnergyTable
                            tableData={energetics}
                            setTableData={setEnergetics}
                            setTotalProducts={setTotalEnergetics}
                            productNeed={productsSelected}
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
                            productNeed={productsSelected}
                          />
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
                            productNeed={productsSelected}
                          />
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
                  {/* <div className="flex h-20 w-full items-center justify-evenly gap-2 rounded-lg border px-6 py-2">
                    <div className="flex w-1/3">
                      <SelectRouter
                        options={productCraft}
                        onChange={(e) => fillFormulaProduct(e)}
                        value={newFormula}
                        placeholder="Selecciona el artículo"
                      />
                    </div>

                    <div className="flex w-28">
                      <InputRouter
                        type="number"
                        name="quantity"
                        placeholder="Cantidad"
                        value={newFormula.quantity}
                        onChange={(e) =>
                          setNewFormula({
                            ...newFormula,
                            quantity: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex w-28">
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
                  </div> */}
                  <ArticleSelectOptions
                    productCraft={productCraft}
                    fillFormulaProduct={fillFormulaProduct}
                    newFormula={newFormula}
                    setNewFormula={setNewFormula}
                    optionGlobalMerma={optionGlobalMerma}
                    setOptionGlobalMerma={setOptionGlobalMerma}
                    optionGInditOrGlobalMerma={optionGInditOrGlobalMerma}
                    setOptionGIndiOrGlobalMerma={setOptionGIndiOrGlobalMerma}
                  />

                  {/* materiales fab section */}
                  <div className="rounded-xl p-4">
                    <h2 className="text-md font-poppins font-medium text-[#44444F]">
                      Proceso
                    </h2>
                    <div className="overflow-auto">
                      <ProcesoTable
                        tableData={proceso}
                        setTableData={setProceso}
                        setTotalProducts={setTotalProceso}
                        productNeed={allSelected}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personal" className="h-full">
              <div className="flex h-full w-full flex-col justify-between gap-2 overflow-auto bg-blancoBg px-6 py-2">
                <div className="flex h-full flex-col gap-4 overflow-scroll pt-4">
                  {/* config section */}
                  {/* <div className="flex h-20 w-full items-center justify-evenly gap-2 rounded-lg border px-6 py-2">
                    <div className="flex w-1/3">
                      <SelectRouter
                        options={productCraft}
                        onChange={(e) => fillFormulaProduct(e)}
                        value={newFormula}
                        placeholder="Selecciona el artículo"
                      />
                    </div>

                    <div className="flex w-28">
                      <InputRouter
                        type="number"
                        name="quantity"
                        placeholder="Cantidad"
                        value={newFormula.quantity}
                        onChange={(e) =>
                          setNewFormula({
                            ...newFormula,
                            quantity: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex w-28">
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
                  </div> */}
                  <ArticleSelectOptions
                    productCraft={productCraft}
                    fillFormulaProduct={fillFormulaProduct}
                    newFormula={newFormula}
                    setNewFormula={setNewFormula}
                    optionGlobalMerma={optionGlobalMerma}
                    setOptionGlobalMerma={setOptionGlobalMerma}
                    optionGInditOrGlobalMerma={optionGInditOrGlobalMerma}
                    setOptionGIndiOrGlobalMerma={setOptionGIndiOrGlobalMerma}
                  />

                  {/* materiales fab section */}
                  <div className="rounded-xl p-4">
                    <h2 className="text-md font-poppins font-medium text-[#44444F]">
                      Personal
                    </h2>
                    <div className="overflow-auto">
                      <PersonalTable
                        tableData={personal}
                        setTableData={setPersonal}
                        setTotalProducts={setTotalPersonal}
                        productNeed={proceso}
                        positions={positions?.data}
                      />
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

            <div className="flex items-center gap-2">
              {sectionName == "PRODUCTOS" && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-grisSubText">
                      TOTAL “{tableName}”
                    </div>
                    <div className="flex h-8 w-24 items-center rounded-xl border border-grisSubText pl-2 text-sm text-grisSubText">
                      ${totalTableSection}
                    </div>
                  </div>
                  <IonIcon
                    icon={chevronForward}
                    className="size-4 text-black"
                  />
                </>
              )}
              <div className="flex items-center gap-2">
                <div className="text-xs text-grisSubText">
                  TOTAL “{sectionName}”
                </div>
                <div className="flex h-8 w-24 items-center rounded-xl border border-grisSubText pl-2 text-sm text-grisSubText">
                  $
                  {sectionName == "PRODUCTOS"
                    ? totalProductsSection
                    : sectionName == "PROCESO"
                      ? totalProceso
                      : sectionName == "PERSONAL" && totalPersonal}
                </div>
              </div>
              <IonIcon icon={chevronForward} className="size-4 text-black" />
              <div className="flex items-center gap-2">
                <div className="text-xs text-grisSubText">TOTAL “FÓRMULA”</div>
                <div className="flex h-8 w-24 items-center rounded-xl border border-grisSubText pl-2 text-sm text-grisSubText">
                  ${totalFormula}
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
