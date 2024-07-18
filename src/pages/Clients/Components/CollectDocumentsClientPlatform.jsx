import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { IonIcon } from "@ionic/react";
import {
  addCircle,
  addOutline,
  chevronBackCircle,
  chevronForwardCircle,
  close,
  searchOutline,
} from "ionicons/icons";
import FormUploadPlatform from "./FormUploadPlatform";

function CollectDocumentsClientPlatform({ documents }) {
  const [modalComplete, setModalComplete] = useState(false);
  const [documentId, setDocumentId] = useState(false);

  function setModalOpen(id) {
    setDocumentId(id);
    setModalComplete(true);
  }

  return (
    <div className="mt-2 w-full rounded-xl bg-white px-8 py-8">
      <FormUploadPlatform
        modal={modalComplete}
        setModal={setModalComplete}
        document_id={documentId}
      />
      <div className="flex w-full px-3 py-3">
        <div className="w-3/12">
          <span className="font-roboto text-sm font-semibold text-grisText">
            DOC. REQUIRED
          </span>
        </div>
        <div className="w-3/12">
          <span className="font-roboto text-sm font-semibold text-grisText">
            COMMENT
          </span>
        </div>
        <div className="w-2/12">
          <span className="font-roboto text-sm font-semibold text-grisText">
            DESIRED DATE
          </span>
        </div>
        <div className="w-2/12">
          <span className="font-roboto text-sm font-semibold text-grisText">
            SERVICE
          </span>
        </div>
        <div className="w-2/12 text-center">
          <span className="font-roboto text-sm font-semibold text-grisText">
            DOC
          </span>
        </div>
      </div>
      {documents?.map((document, i) => (
        <div
          className="mt-4 flex w-full rounded-2xl bg-[#E8E8E8] px-3 pt-2"
          key={i}
        >
          <div className="w-3/12">
            <span
              title={document.name}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {document.name}
            </span>
          </div>
          <div className="w-3/12">
            <span
              title={document.comment}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {document.comment}
            </span>
          </div>
          <div className="w-2/12">
            <span
              title={document.required_date}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {document.required_date}
            </span>
          </div>
          <div className="w-2/12">
            <span
              title={document.service}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {document.service}
            </span>
          </div>
          <div className="w-2/12 text-center">
            <IonIcon
              icon={addOutline}
              className="mt-[-16px] text-2xl text-primario"
              onClick={() => setModalOpen(document.id)}
            ></IonIcon>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CollectDocumentsClientPlatform;
