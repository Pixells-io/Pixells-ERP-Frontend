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

function NewFormula() {
  const [products, setProducts] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [wastes, setWastes] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalSubProducts, setSubTotalProducts] = useState(0);
  const [totalWastes, setTotalWastes] = useState(0);

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
            Nueva Formula
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
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={create}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center">
            <Link to={"/transformation/"}>
              <IonIcon
                icon={closeCircle}
                size="small"
                className="cursor-pointer text-grisDisabled"
              ></IonIcon>
            </Link>
          </div>
        </div>

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

        <div className="rounded-xl bg-blancoBg p-4">
          <div className="max-h-[400px] overflow-auto">
            <TableForm
              tableData={products}
              setTableData={setProducts}
              setTotalProducts={setTotalProducts}
            />
          </div>

          <div className="mt-4 flex justify-end">
            <div className="flex items-center gap-x-4">
              <h2 className="text-sm font-medium text-grisText">Total</h2>
              <div className="min-w-24 rounded-lg border border-[#8F8F8F] px-2 py-1">
                <p className="text-end text-sm font-medium text-grisText">
                  {totalProducts}
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
            <TableForm
              tableData={subProducts}
              setTableData={setSubProducts}
              setTotalProducts={setSubTotalProducts}
            />
          </div>
        </div>

        <div className="h-full rounded-xl bg-blancoBg p-4">
          <h2 className="text-md font-poppins font-medium text-[#44444F]">
            Desechos
          </h2>
          <div className="overflow-container flex-1">
            <TableFormWaste
              tableData={wastes}
              setTableData={setWastes}
              setTotalProducts={setTotalWastes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFormula;