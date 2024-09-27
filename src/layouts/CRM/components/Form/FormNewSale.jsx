import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { add, addCircle, closeCircle } from "ionicons/icons";

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const monthlyArray = [
  { label: "Monthly", value: "0" },
  { label: "Annual", value: "1" },
];

function FormNewSale({ clients, membership, services }) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const [selectServ, setSelectServ] = useState([
    {
      service: "",
      recurrency: "",
      ammount: "",
    },
  ]);
  const [type, setType] = useState(1);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen({ prospect: false });
    }
  }, [navigation.state]);

  let serviceArray = [];
  services?.data.map((service, i) => {
    let newObj = { value: service.id, label: service.name };
    serviceArray.push(newObj);
  });

  let options = [];
  clients?.data.map((service, i) => {
    let newObj = { value: service.id, label: service.business_name };
    options.push(newObj);
  });

  let typeService = [
    { label: "Services", value: 1 },
    { label: "Membership", value: 2 },
  ];

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
    const newFields = selectServ.map((inputs, i) =>
      i === index ? { ...inputs, service: e } : inputs,
    );
    setSelectServ(newFields);
  }

  function updateSelectServSelect2(index, e) {
    const newFields = selectServ.map((inputs, i) =>
      i === index ? { ...inputs, recurrency: e } : inputs,
    );
    setSelectServ(newFields);
  }

  //Membership or Service

  const membership_options = [];

  arrayMembershipAdd(membership_options, membership.data);

  function arrayMembershipAdd(array, data) {
    data.forEach((element) => {
      array.push({
        label: element.name,
        value: element.id,
      });
    });
  }

  const [membershipPrice, setMembershipPrice] = useState("");

  function changeMembershipPrice(e) {
    let membership2 = membership.data.filter((item, i) => item.id === e);
    setMembershipPrice("");
    setMembershipPrice(membership2[0].price);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="group flex w-full justify-start gap-6 p-0 pl-4 text-gris2 hover:rounded-lg hover:bg-blue-100 hover:text-blue-500"
        >
          <IonIcon icon={add} size="large"></IonIcon>
          <p className="mr-2 text-base font-medium text-gris2 group-hover:text-blue-500">
            Add On
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[600px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle>New Sale</DialogTitle>
        </DialogHeader>
        <Form
          id="new-sale-form"
          className="flex flex-col gap-2 px-6"
          action="/crm"
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div>
                <SelectRouter
                  name="client_id"
                  placeholder="Select Client"
                  options={options}
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <div className="gap-8">
                  <p>Choose Type of Sale</p>
                  <SelectRouter
                    name="type_sale"
                    placeholder={`Type of sale`}
                    options={typeService}
                    onChange={(e) => setType(e.value)}
                    required={true}
                  />
                </div>
              </div>
              {type === 1 ? (
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
                          options={serviceArray}
                          onChange={(e) =>
                            updateSelectServSelect(i, e, "service")
                          }
                          required={true}
                        />
                        <SelectRouter
                          name="recurrency"
                          placeholder="Recurrency"
                          options={monthlyArray}
                          onChange={(e) => updateSelectServSelect2(i, e)}
                          required={true}
                        />
                        <InputRouter
                          placeholder="Ammount"
                          name="ammount"
                          type="number"
                          value={selectServ[i]?.ammount}
                          onChange={(e) => updateSelectServInput(i, e)}
                          required={true}
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
              ) : (
                <div className="flex flex-col gap-2 pt-4">
                  <div className="flex gap-8">
                    <p>Choose Membership</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex w-full items-center gap-2">
                      <SelectRouter
                        name="membership_id"
                        placeholder={`Membership`}
                        options={membership_options}
                        onChange={(e) => changeMembershipPrice(e.value)}
                      />
                      <SelectRouter
                        name="recurrency_membership"
                        placeholder="Recurrency"
                        options={monthlyArray}
                      />
                      <InputRouter
                        name="ammount_membership"
                        type="number"
                        placeholder={membershipPrice}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <input type="text" name="action" value="add-on" readOnly hidden />
            </div>
          </div>
          <DialogFooter className="px-4 pb-4">
            <Button
              form="new-sale-form"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewSale;
