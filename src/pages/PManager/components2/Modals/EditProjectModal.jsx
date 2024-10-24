import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import InputRouter from "@/layouts/Masters/FormComponents/input";

function EditProjectModal({ modal, setModal, objective, form }) {
  const navigation = useNavigation();

  console.log(objective);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-6">
          <DialogTitle>Editar {objective?.name}</DialogTitle>
        </DialogHeader>

        <Form
          className="flex flex-col gap-2"
          id="ed-form"
          action={form.route}
          method="post"
        >
          {/* selector de task */}
          <div className="flex gap-2">
            <div className="cursor-pointer rounded-lg bg-[#5B89FF1F] px-3 py-2 text-[10px] text-primarioBotones">
              Proyecto
            </div>
            <Input
              className="hidden"
              name="hidden"
              type="text"
              defaultVal={1}
              hidden
            />
          </div>

          {/* form parte 1 */}
          <div className="grid grid-cols-6 gap-4 rounded-lg p-4">
            <div className="col-span-4">
              <InputRouter
                name="name"
                placeholder="Título"
                defaultVal={objective.name}
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="flex flex-col ">
                <p className="pb-1 text-[11px] font-light text-grisHeading">
                  Prioridad
                </p>
                <Select name="priority">
                  <SelectTrigger className="rounded-lg border-0 border-b bg-gris text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones">
                    <SelectValue placeholder="Prioridad" />
                  </SelectTrigger>
                  <SelectContent className="text-grisText">
                    <SelectItem value="0">Baja</SelectItem>
                    <SelectItem value="1">Media</SelectItem>
                    <SelectItem value="2">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
          </div>

          {/* form parte 2 */}
          <div className="grid grid-cols-6 gap-4 rounded-lg px-4">
            <div className="col-span-4">
              <InputRouter
                type="textarea"
                name="description"
                placeholder="Descripción"
                defaultVal={objective?.description}
              />
            </div>
          </div>

          <Input
            type="hidden"
            className="hidden"
            name="action"
            value="edit-project"
            hidden
          />
          <Input
            type="hidden"
            className="hidden"
            name="project_id"
            value={objective?.id}
            hidden
          />

          <DialogFooter>
            <Button
              className="bg-primario px-10"
              type="submit"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditProjectModal;
