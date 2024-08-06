import React, { useEffect, useState } from "react";
import Select from "react-select";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add, closeCircle } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DropzoneFile from "@/components/dropzone-files";

const DAYS = [
  { label: "Areas", value: "1" },
  { label: "Process Areas", value: "2" },
  { label: "Type of Turn", value: "3" },
  { label: "Positions", value: "4" },
  { label: "Positions Coordinate", value: "5" },
  { label: "Position Authority", value: "6" },
  { label: "Position Responsability", value: "7" },
  { label: "Position Perfil", value: "8" },
  { label: "Positions Conocimientos", value: "9" },
  { label: "Positions Languages", value: "10" },
  { label: "Users", value: "11" },
  { label: "Users Company Experience", value: "12" },
  { label: "Users Academy Info", value: "13" },
  { label: "Users Contracts", value: "14" },
];

function FormImport({ modal, setModal }) {
  const [processValue, setProcessValue] = useState([]);
  const navigation = useNavigation();
  const [processInputs, setProcessInputs] = useState([
    {
      proceso: "",
    },
  ]);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Import Data
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/organization"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input
                type="text"
                name="action"
                value="import-org"
                hidden
                readOnly
              />
              <Select
                name="type"
                placeholder={"Working Days"}
                options={DAYS}
                isMulti={false}
              />
              <input type="file" name="document" />
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Save
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormImport;
