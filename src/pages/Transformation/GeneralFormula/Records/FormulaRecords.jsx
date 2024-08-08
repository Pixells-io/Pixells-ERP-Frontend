import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
  closeCircle,
} from "ionicons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import TableForm from "../../Components/TableForm";
import TableFormWaste from "../../Components/TableFormWaste";
import StatusInformation from "@/components/StatusInformation/status-information";
import OnlyTable from "../../Components/OnlyTable";
import { ProductsInformationColumn } from "./Table/ProductsInformationColumn";
import { SubProductsInformationColumn } from "./Table/SubProductsInformationColumn";
import { WasteProductsInformationColumn } from "./Table/WasteProductsInformationColumn";
import TableFormSubProducts from "../../Components/TableFormSubProducts";

const productsPrueba = [
  {
    component: 1,
    componentName: "Aceite Vegetal",
    amount: 3,
    unit: "L",
    cost: "60.00",
    amountTax: 16,
    subTotal: "208.80",
  },
  {
    component: 1,
    componentName: "Aceite Vegetal",
    amount: 3,
    unit: "L",
    cost: "60.00",
    amountTax: 16,
    subTotal: "208.80",
  },
  {
    component: 1,
    componentName: "Aceite Vegetal",
    amount: 3,
    unit: "L",
    cost: "60.00",
    amountTax: 16,
    subTotal: "208.80",
  },
];

const subProductsPrueba = [
  {
    component: 1,
    componentName: "Aceite Vegetal",
    amount: 1,
    unit: "U",
    cost: "10.00",
    amountTax: 16,
    subTotal: "16.80",
  },
];

const wateProductsPrueba = [
  {
    component: 1,
    componentName: "Aceite Vegetal",
    amount: 1,
    unit: "U",
    cost: "3.00",
    subTotal: "3.00",
  },
];

function FormulaRecords() {
  const [products, setProducts] = useState(productsPrueba);
  const [subProducts, setSubProducts] = useState(subProductsPrueba);
  const [wastes, setWastes] = useState(wateProductsPrueba);

  const [totalProducts, setTotalProducts] = useState(203);
  const [totalSubProducts, setSubTotalProducts] = useState(0);
  const [totalWastes, setTotalWastes] = useState(0);

  const [productsEdit, setProductsEdit] = useState(productsPrueba);
  const [subProductsEdit, setSubProductsEdit] = useState(subProductsPrueba);
  const [wastesEdit, setWastesEdit] = useState(wateProductsPrueba);

  const [totalProductsEdit, setTotalProductsEdit] = useState(203);
  const [totalSubProductsEdit, setSubTotalProductsEdit] = useState(0);
  const [totalWastesEdit, setTotalWastesEdit] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Convertir FormData a un objeto para ver los datos
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log(data); // Mostrar los datos en la consola  };
  };

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              TRANSFORMACIÓN
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Registro de Formula
          </p>

          <div className="flex items-center justify-end gap-5">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={copy}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={print}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8] ${isEdit ? "bg-primarioBotones" : "bg-[#E8E8E8]"}`}
                onClick={() => setIsEdit(!isEdit)}
              >
                <IonIcon
                  icon={create}
                  size="small"
                  className={`cursor-pointer ${isEdit ? "text-[#FBFBFB]" : "text-[#696974]"}`}
                ></IonIcon>
              </div>
            </div>
          </div>
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

        {isEdit && (
          <div className="flex w-fit items-center gap-x-6 rounded-xl bg-blancoBg px-6 py-2">
            <div>
              <Select name="article" className="h-10 min-w-0 flex-1">
                <SelectTrigger className="w-[240px] border-b border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit text-xs font-light text-grisSubText">
                  <SelectValue placeholder="Selecciona el Artículo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select name="accountingAccount" className="h-10 min-w-0 flex-1">
                <SelectTrigger className="w-[240px] border-b border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit text-xs font-light text-grisSubText">
                  <SelectValue placeholder="Cuenta Contable" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="ml-6 flex flex-col items-end gap-y-2">
              <div className="flex gap-2">
                <label
                  htmlFor="checkBoxProduct"
                  className="text-xs font-light text-grisText"
                >
                  Producto
                </label>
                <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex gap-2">
                <label
                  htmlFor="checBoxKit"
                  className="text-xs font-light text-grisText"
                >
                  Kit
                </label>
                <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex gap-2">
                <label
                  htmlFor="checkBoxMultiProcess"
                  className="text-xs font-light text-grisText"
                >
                  MultiProceso
                </label>
                <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
            </div>
          </div>
        )}

        <div className="rounded-xl bg-blancoBg p-4">
          <div className="max-h-[400px] overflow-auto">
            {isEdit ? (
              <TableForm
                tableData={productsEdit}
                setTableData={setProductsEdit}
                setTotalProducts={setTotalProductsEdit}
              />
            ) : (
              <OnlyTable data={products} columns={ProductsInformationColumn} />
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <div className="flex items-center gap-x-4">
              <h2 className="text-sm font-medium text-grisText">Total</h2>
              <div className="min-w-24 rounded-lg border border-[#8F8F8F] px-2 py-1">
                <p className="text-end text-sm font-medium text-grisText">
                  {isEdit ? totalProductsEdit : totalProducts}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full rounded-xl bg-blancoBg p-4">
          <h2 className="text-md font-poppins font-medium text-[#44444F]">
            SubProductos
          </h2>
          <div className="overflow-container flex-1">
            {isEdit ? (
              <TableFormSubProducts
                tableData={subProductsEdit}
                setTableData={setSubProductsEdit}
                setTotalProducts={setSubTotalProductsEdit}
              />
            ) : (
              <OnlyTable
                data={subProducts}
                columns={SubProductsInformationColumn}
              />
            )}
          </div>
          <div className="mt-6 rounded-xl bg-blancoBg">
            <textarea
              placeholder="Observaciones"
              className="h-[56px] w-[260px] resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs"
              name="template"
            ></textarea>
          </div>
        </div>

        <div className="h-full rounded-xl bg-blancoBg p-4">
          <h2 className="text-md font-poppins font-medium text-[#44444F]">
            Desechos
          </h2>
          <div className="overflow-container flex-1">
            {isEdit ? (
              <TableFormWaste
                tableData={wastesEdit}
                setTableData={setWastesEdit}
                setTotalProducts={setTotalWastesEdit}
              />
            ) : (
              <OnlyTable
                data={wastes}
                columns={WasteProductsInformationColumn}
              />
            )}
          </div>
        </div>

        <StatusInformation
          status={isEdit ? "inProgress" : "done"}
          comments={
            "Todo los productos, subProductos y desechos estan correctamente registrados"
          }
          approvedBy={"Agustin Hdez"}
          date={"08 Agosto 2024"}
          applyFunction={() => setIsEdit(false)}
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
      </div>
    </div>
  );
}

export default FormulaRecords;
