import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, useNavigation } from "react-router-dom";

function NewObjectiveForm({ open, setOpen, areas }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  // console.log(areas);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="w-5 h-5 border-2 text-primarioBotones border-primarioBotones rounded-full flex items-center justify-center">
          +
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-2">
            <DialogTitle>Agregar Objetivo Estratégico</DialogTitle>
            <div className="bg-gris rounded-lg p-4 flex flex-col gap-4">
              <DialogDescription>Objetivo Estratégico</DialogDescription>
              <Form
                className="flex flex-col gap-8"
                id="objective-form"
                action="/project-manager"
                method="post"
              >
                <Input
                  name="objetivo"
                  placeholder="Nombre del Objetivo"
                  className="rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0"
                />

                <Select name="area" className="">
                  <SelectTrigger className="border-0 border-b bg-gris rounded-none !ring-0 !ring-offset-0 focus:border-primarioBotones">
                    <SelectValue placeholder="Seleccionar un Área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Seleccionar un Área</SelectLabel>
                      {areas?.map((area, i) => (
                        <SelectItem key={i} value={area.id.toString()}>
                          {area.nombre}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Form>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button
              form="objective-form"
              className="bg-primario px-10"
              type="submit"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewObjectiveForm;
