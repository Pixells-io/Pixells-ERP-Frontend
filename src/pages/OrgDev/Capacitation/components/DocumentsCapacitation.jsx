import React, { useEffect, useState } from "react";
import { Form, Link, useNavigation, useParams } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IonIcon } from "@ionic/react";
import { add, send } from "ionicons/icons";

import DropzoneFile from "@/components/dropzone-files";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DocumentDestroy from "./DocumentsDestroy";

function DocumentsCapacitation({ rel_id, documents }) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <div div className="flex items-center gap-1">
      <span className="flex size-5 items-center justify-center rounded-full bg-primarioBotones text-[12px] text-white">
        {documents?.length}
      </span>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="flex items-center">
          <IonIcon icon={add} className="size-6 text-primario" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex max-h-[400px] w-[250px] flex-col gap-2 p-4">
          <div className="flex items-center gap-4">
            Lista de documentos{" "}
            <span className="flex size-5 items-center justify-center rounded-full bg-primarioBotones text-[12px] text-white">
              {documents?.length}
            </span>
          </div>
          <DropdownMenuSeparator />
          <div className="flex h-full flex-col gap-1 overflow-scroll">
            {documents?.map((document, i) => (
              <div className="flex items-center justify-between gap-2" key={i}>
                <div className="flex gap-2">
                  <Link
                    to={document?.document}
                    target="_blank"
                    className="cursor-pointer text-[12px] text-grisSubText"
                  >
                    - {document?.title}
                  </Link>
                </div>

                <DocumentDestroy
                  documentId={document.id}
                  name={document?.title}
                />
              </div>
            ))}
          </div>
          <DropdownMenuSeparator />
          <Form
            action={`/org-development/capacitation`}
            method="post"
            encType="multipart/form-data"
            className="flex h-full flex-col gap-2 overflow-scroll"
          >
            <p>Agregar documento</p>
            <DropzoneFile name="document" label="Document" />
            <InputRouter name="title" type="text" placeholder="Document Name" />
            <input
              name="rel_id"
              className="hidden"
              hidden
              value={rel_id}
              readOnly
            />
            <input name="action" className="hidden" hidden value="2" readOnly />
            <input name="type" className="hidden" hidden value="2" readOnly />
            <button
              type="submit"
              className="flex items-center justify-center rounded-lg border bg-primarioBotones py-1 text-white"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? (
                "Submitting..."
              ) : (
                <IonIcon icon={send} className="size-6 text-white" />
              )}
            </button>
          </Form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DocumentsCapacitation;
