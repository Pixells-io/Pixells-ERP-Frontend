import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import TableForm from "../../components/DataTableForm";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionData from "../../components/DataSection";

const CreateAccount = () => {
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">
            Accounting - policy
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Asiento contable
          </p>
        </div>

        {/* content */}
        <div className="flex items-stretch rounded-xl bg-white p-7">
          <section className="flex w-full items-start justify-between space-x-3">
            <Input
              placeholder="Fecha"
              className="w-25 box-border h-10 rounded border"
            />
            <Input
              placeholder="Numeracion"
              className="w-25 box-border h-10 rounded border"
            />

            {/* Select */}
            <Select className="w-25 box-border h-10 rounded border">
              <SelectTrigger className="box-border rounded border">
                <SelectValue placeholder="Tipo de asiento contable" />
              </SelectTrigger>
              {/* select content */}
              <SelectContent className="box-border rounded border">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            {/* Select 2 */}
            <Select className="w-25 box-border h-10 rounded border">
              <SelectTrigger className="box-border rounded border">
                <SelectValue placeholder="Codigo" />
              </SelectTrigger>
              {/* select content */}
              <SelectContent className="box-border rounded border">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </section>
        </div>

        <TableForm />
        <SectionData/>
      </div>
    </div>
  );
};

export default CreateAccount;
