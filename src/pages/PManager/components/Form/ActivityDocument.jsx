import React from "react";
import { Form, useParams } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import DropzoneFile from "@/components/dropzone-files";

import { IonIcon } from "@ionic/react";
import { add, send } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function ActivityDocument({ activity_id }) {
  console.log(activity_id);
  const { id, projectId } = useParams();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IonIcon icon={add} className="size-6 text-primario" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex max-h-[300px] w-[250px] flex-col gap-2 p-4">
        <div>Lista de documentos</div>
        <DropdownMenuSeparator />
        <div className="flex h-full flex-col overflow-scroll"></div>
        <DropdownMenuSeparator />
        <Form
          method="post"
          action={`/project-manager/${id}/projects/${projectId}`}
          encType="multipart/form-data"
          id="activity-file-form"
          name="activity-file"
          className="flex flex-col gap-2 overflow-scroll"
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
            value={activity_id}
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
            className="flex items-center justify-center rounded-lg border bg-primarioBotones py-1"
          >
            <IonIcon icon={send} className="size-6 text-white" />
          </button>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ActivityDocument;
