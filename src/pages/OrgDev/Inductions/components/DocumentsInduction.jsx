import React, { useEffect, useState } from "react";
import { Form, Link, useNavigation, useParams } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { add, closeCircle, send } from "ionicons/icons";

import DropzoneFile from "@/components/dropzone-files";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function DocumentsInduction({ inductionId, documents }) {
  const navigation = useNavigation();
  const { id, projectId } = useParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  function deleteDocument(id) {
    console.log(id);
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
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

                <Avatar className="size-4">
                  <AvatarImage src={document?.creator.img} />
                  <AvatarFallback>
                    {document?.creator.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* 
              <DocumentDestroy
                documentId={document.id}
                name={document?.title}
              />
            */}
            </div>
          ))}
        </div>
        <DropdownMenuSeparator />
        <Form
          action={`/org-development/induction`}
          method="post"
          encType="multipart/form-data"
          className="flex h-full flex-col gap-2 overflow-scroll"
        >
          <p>Agregar documento</p>
          <DropzoneFile name="document" label="Document" />
          <InputRouter
            name="title"
            className=""
            type="text"
            placeholder="Document Name"
          />
          <input
            name="activity_id"
            className="hidden"
            hidden
            value={inductionId}
            readOnly
          />
          <input
            name="action"
            className="hidden"
            hidden
            value="file"
            readOnly
          />
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
  );
}

export default DocumentsInduction;
