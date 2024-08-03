import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Form } from "react-router-dom";

function NewTopic({ modal, setModal, functionModal }) {
  const [stepped, setStepped] = useState(1);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[380px] overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Topic
          </DialogTitle>
        </DialogHeader>

        {/* FORMA 1 */}
        <form
        //   onSubmit={handleSubmit}
          encType="multipart/form-data"
          action="/topics"
          method="post"
        >
          <div className={stepped == 1 ? "block" : "hidden"}>
            <div className="rounded-xl bg-[#FBFBFB] px-4">
              <div className="mb-8 grid grid-cols-12 gap-x-8 gap-y-4">
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <div className="flex items-center gap-x-2">
                    <img
                      src={"https://picsum.photos/id/237/200/300"}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="text-sm font-semibold text-grisText">
                      Don Formularo
                    </span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <SelectRouter
                    name={"categories"}
                    className="w-full text-sm font-light"
                    placeholder={"Selecciona Categoría"}
                    options={[]}
                    // onChange={(e) => setStatus(e.value)}
                  />
                </div>

                <div className="col-span-12">
                  <InputRouter
                    name="title"
                    placeholder="Agrega Título"
                    type="text"
                  />
                </div>
                <div className="col-span-12">
                  <InputRouter
                    name="text"
                    placeholder={"Que deseas compartir, Arturo Sáncehz?"}
                    type="text"
                  />
                </div>
                <div className="col-span-12">
                  <div className="flex w-full justify-end">
                    <button
                      type="button"
                      className="rounded-xl bg-primario p-2 text-white"
                      onClick={() => setStepped(2)}
                    >
                      next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={stepped == 2 ? "block" : "hidden"}>
            <input
              type="file"
              accept="image/*"
              multiple="multiple"
              name="fileInput[]"
              id="fileInput"
            />
            <button type="submit">submit</button>
          </div>
        </form>
        <br />
        {/* FORMA 2 */}
        {/* <div className={stepped == 1 ? "hidden" : "block"}>
          Paso 1
          <button type="button" onClick={() => setStepped(2)}>
            {" "}
            Change Step 2
          </button>
        </div>
        <div className={stepped == 2 ? "hidden" : "block"}>
          Paso 2
          <button type="button" onClick={() => setStepped(2)}>
            {" "}
            Change Step 3
          </button>
        </div>
        <div className={stepped == 2 ? "hidden" : "block"}>Paso 3</div> */}

        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default NewTopic;
