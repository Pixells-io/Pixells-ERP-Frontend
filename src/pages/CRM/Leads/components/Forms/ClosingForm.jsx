import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import DropzoneFile from "@/components/dropzone-files";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import UserSelect from "@/components/UserSelect";

import { IonIcon } from "@ionic/react";
import { addCircle, chevronForward, closeCircle } from "ionicons/icons";

const monthlyArray = [
  { label: "Monthly", value: "0" },
  { label: "Annual", value: "1" },
];

function ClosingForm({
  modal,
  setModal,
  leadId,
  services,
  users,
  leadAssigned,
}) {
  const navigation = useNavigation();
  const [selectServ, setSelectServ] = useState([
    {
      service: "",
      recurrency: "",
      ammount: "",
    },
  ]);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal({ prospect: false });
    }
  }, [navigation.state]);

  let options = [];
  services?.data.map((service, i) => {
    let newObj = { value: service.id, label: service.name };
    options.push(newObj);
  });

  function addSelectServInput() {
    const newInput = {
      service: "",
      recurrency: "",
      ammount: "",
    };
    setSelectServ([...selectServ, newInput]);
  }

  function removeSelecServInput(index) {
    const newArray = selectServ.filter((item, i) => index !== i);
    setSelectServ(newArray);
  }

  function updateSelectServInput(index, e) {
    const newFields = selectServ.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    setSelectServ(newFields);
  }

  function updateSelectServSelect(index, e) {
    // console.log(e);
    const newFields = selectServ.map((inputs, i) =>
      i === index ? { ...inputs, service: e } : inputs,
    );
    setSelectServ(newFields);
  }

  function updateSelectServSelect2(index, e) {
    // console.log(e);
    const newFields = selectServ.map((inputs, i) =>
      i === index ? { ...inputs, recurrency: e } : inputs,
    );
    setSelectServ(newFields);
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[600px] overflow-scroll p-0 sm:max-w-[600px]">
        <div className="flex h-fit rounded-t-lg border-b p-6">
          <DialogHeader>
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              <span className="font-normal">Proposal Form </span>
              &gt; Closing Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="closing-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <DropzoneFile
                  name="service_paymnent"
                  label="Payment agreement"
                />
              </div>
              <div>
                <DropzoneFile
                  name="service_agreement"
                  label="Service agreement"
                />
              </div>
              <div>
                <InputRouter
                  name="comments"
                  type="text"
                  placeholder="Comments"
                />
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <div className="flex gap-8">
                  <p>Choose Services</p>
                  <button type="button" onClick={() => addSelectServInput()}>
                    <IonIcon
                      icon={addCircle}
                      className="h-6 w-6 text-primario hover:text-grisText"
                    />
                  </button>
                </div>
                {selectServ?.map((input, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex w-full items-center gap-2">
                      <SelectRouter
                        name="service"
                        placeholder={`Service ${i + 1}`}
                        options={options}
                        onChange={(e) =>
                          updateSelectServSelect(i, e, "service")
                        }
                      />
                      <SelectRouter
                        name="recurrency"
                        placeholder="Recurrency"
                        options={monthlyArray}
                        onChange={(e) => updateSelectServSelect2(i, e)}
                      />
                      <InputRouter
                        placeholder="Ammount"
                        name="ammount"
                        type="number"
                        value={selectServ[i]?.ammount}
                        onChange={(e) => updateSelectServInput(i, e)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeSelecServInput(i)}
                    >
                      <IonIcon
                        icon={closeCircle}
                        className="h-5 w-5 text-grisDisabled hover:text-grisText"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <input
                type="text"
                className="hidden"
                name="services"
                value={selectServ}
                hidden
                readOnly
              />
              <input
                type="text"
                name="lead_id"
                value={leadId}
                hidden
                readOnly
              />
              <input
                type="text"
                name="action"
                value="closing"
                readOnly
                hidden
              />
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex w-16 flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={leadAssigned?.url} />
                  <AvatarFallback>
                    {leadAssigned?.name?.search("\b[a-zA-Z]")}
                  </AvatarFallback>
                </Avatar>
                <p className="text-[10px] text-grisText">Assigned</p>
              </div>
              <div className="flex self-start pt-2">
                <IonIcon
                  icon={chevronForward}
                  className="h-6 w-6 text-grisText"
                ></IonIcon>
              </div>
              <div className="flex w-16 flex-col items-center gap-2">
                <UserSelect users={users} leadAssigned={leadAssigned} />
                <p className="text-[10px] text-grisText">Assign To</p>
              </div>
            </div>
            <Button
              form="closing-leads-form"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ClosingForm;
