import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

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
import TableFormSubProducts from "../../Components/TableFormSubProducts";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/navigation-header";

function NewFormula() {
  const { data } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [wastes, setWastes] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalSubProducts, setSubTotalProducts] = useState(0);
  const [totalWastes, setTotalWastes] = useState(0);

  const navigate = useNavigate();

  console.log(data);

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
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

        <div className="flex w-full items-center gap-x-6 rounded-xl bg-blancoBg px-6 py-2">
          <div>
            <Select name="article" className="h-10 min-w-0 flex-1">
              <SelectTrigger className="border-gris2-transparent w-[240px] rounded-xl border text-[14px] font-light text-[#696974] placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
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
            <Select
              name="accountingAccount"
              className="h-10 min-w-0 flex-1 space-x-3"
            >
              <SelectTrigger className="border-gris2-transparent w-[240px] rounded-xl border text-[14px] font-light text-[#696974] placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
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
                className="text-[14px] font-light text-grisText"
              >
                Producto
              </label>
              <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
            </div>
            <div className="flex gap-2">
              <label
                htmlFor="checBoxKit"
                className="text-[14px] font-light text-grisText"
              >
                Kit
              </label>
              <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
            </div>
            <div className="flex gap-2">
              <label
                htmlFor="checkBoxMultiProcess"
                className="text-[14px] font-light text-grisText"
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
            <TableFormSubProducts
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
  );
}

export default NewFormula;
