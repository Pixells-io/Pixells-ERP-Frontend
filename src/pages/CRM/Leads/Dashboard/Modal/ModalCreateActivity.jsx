import React, { useEffect, useState } from "react";
import { Form, redirect, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputForm from "@/components/InputForm/InputForm";
import DropzoneFile from "@/components/dropzone-files";
import { star, starOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function ModalCreateActivity({
  modal,
  setModal,
  lead_id,
  type,
  activity_name,
}) {
  const [inputTitle, setInputTitle] = useState(false);
  const [inputComment, setInputComment] = useState(false);
  const [inputMail, setInputMail] = useState(false);
  const [inputDate, setInputDate] = useState(false);
  const [inputHour, setInputHour] = useState(false);
  const [inputSelect, setInputSelect] = useState(false);
  const [inputDocument, setInputDocument] = useState(false);
  const [sizeLead, setSizeLead] = useState(false);
  const [productService, setProductService] = useState(false);

  const params = useParams();

  useEffect(() => {
    switch (type) {
      case 1:
        //Size Opportunity
        setInputTitle(false);
        setInputComment(false);
        setInputMail(false);
        setInputDate(false);
        setInputHour(false);
        setInputSelect(false);
        setInputDocument(false);
        setSizeLead(true);
        setProductService(false);
        break;
      case 2:
        //Send Email
        setInputTitle(true);
        setInputComment(true);
        setInputMail(true);
        setInputDate(false);
        setInputHour(false);
        setInputSelect(false);
        setInputDocument(true);
        setSizeLead(false);
        setProductService(false);
        break;
      case 3:
        //Program Email
        setInputTitle(true);
        setInputComment(true);
        setInputMail(true);
        setInputDate(true);
        setInputHour(true);
        setInputSelect(false);
        setInputDocument(true);
        setSizeLead(false);
        setProductService(false);
        break;
      case 4:
        //Program Message
        setInputTitle(true);
        setInputComment(true);
        setInputMail(false);
        setInputDate(true);
        setInputHour(true);
        setInputSelect(false);
        setInputDocument(false);
        setSizeLead(false);
        setProductService(false);
        break;
      case 5:
        //Add activity
        setInputTitle(true);
        setInputComment(true);
        setInputMail(false);
        setInputDate(true);
        setInputHour(false);
        setInputSelect(true);
        setInputDocument(false);
        setSizeLead(false);
        setProductService(false);
        break;
      case 6:
        //Quotes
        setInputTitle(false);
        setInputComment(false);
        setInputMail(false);
        setInputDate(false);
        setInputHour(false);
        setInputSelect(false);
        setInputDocument(false);
        setSizeLead(false);
        setProductService(false);
        break;
      case 7:
        //Add service / product
        setInputTitle(false);
        setInputComment(false);
        setInputMail(false);
        setInputDate(false);
        setInputHour(false);
        setInputSelect(false);
        setInputDocument(false);
        setSizeLead(false);
        setProductService(true);
        break;
      case 8:
        //Reminder to move lead
        setInputTitle(true);
        setInputComment(false);
        setInputMail(false);
        setInputDate(true);
        setInputHour(false);
        setInputSelect(false);
        setInputDocument(false);
        setSizeLead(false);
        setProductService(false);
        break;
      case 9:
        //Convert to client
        setInputTitle(false);
        setInputComment(false);
        setInputMail(false);
        setInputDate(false);
        setInputHour(false);
        setInputSelect(false);
        setInputDocument(false);
        setSizeLead(false);
        setProductService(false);
        break;
    }
  });

  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            {activity_name}
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-edit-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/crm/dashboard/${params.id}`}
          method="POST"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input
                type="text"
                name="action"
                value="action-lead"
                hidden
                readOnly
              />
              <input
                type="text"
                name="lead_id"
                value={lead_id}
                hidden
                readOnly
              />
              {sizeLead == true ? (
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="cursor-pointer"
                      onClick={() => handleClick(value)}
                    >
                      <input type="hidden" name="rating" value={rating} />
                      {rating >= value ? (
                        <IonIcon
                          icon={star}
                          className="text-xl text-grisHeading"
                        ></IonIcon>
                      ) : (
                        <IonIcon
                          icon={starOutline}
                          className="text-xl text-grisHeading"
                        ></IonIcon>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
              {inputTitle == true ? (
                <InputForm
                  name={"title"}
                  placeholder={"Titulo"}
                  type={"text"}
                />
              ) : null}
              {inputComment == true ? (
                <InputForm
                  name={"comment"}
                  placeholder={"Comentario"}
                  type={"text"}
                />
              ) : null}
              {inputMail == true ? (
                <InputForm
                  name={"email"}
                  placeholder={"Correo"}
                  type={"email"}
                />
              ) : null}
              {inputDate == true ? (
                <InputForm name={"date"} placeholder={"Fecha"} type={"date"} />
              ) : null}
              {inputHour == true ? (
                <InputForm name={"hour"} placeholder={"Hora"} type={"time"} />
              ) : null}
              {inputSelect == true ? (
                <SelectRouter name={"select"} placeholder={"Selecciona"} />
              ) : null}
              {inputDocument == true ? (
                <DropzoneFile name="document" label="Documento" />
              ) : null}
            </div>
          </div>

          <DialogFooter className="px-10 pb-6">
            <Button className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold">
              Guardar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCreateActivity;
