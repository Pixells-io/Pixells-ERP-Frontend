import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";

function ModalDeleteCategory({ category_id }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger
        disabled={navigation.state === "submitting"}
        className="flex items-center"
      >
        <IonIcon icon={trash} className="h-5 w-5"></IonIcon>
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>BORRAR CATEGORÍA</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          action={`/inventory`}
          method="post"
          className="flex flex-col gap-4 px-6"
        >
          <input
            type="hidden"
            className="hidden"
            hidden
            name="category_id"
            value={category_id}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type_option"
            value={"destroy_category"}
          />

          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/2 bg-[#343434] font-roboto text-xs font-semibold hover:bg-primarioBotones"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-red-400 font-roboto text-xs font-semibold hover:bg-red-600"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Borrar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDeleteCategory;
