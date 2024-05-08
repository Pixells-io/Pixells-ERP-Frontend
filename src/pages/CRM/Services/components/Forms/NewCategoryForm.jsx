import React, { useState, useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormInput from "@/layouts/CRM/components/Form/FormInput";

const categoryInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Description",
  },
];

function NewCategoryForm({ modalCategories, setModalCategories }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalCategories(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modalCategories} onOpenChange={setModalCategories}>
      <DialogContent className="sm:max-w-[425px] overflow-auto ">
        <DialogHeader>
          <DialogTitle className="font-poppins">
            Create New Category
          </DialogTitle>
        </DialogHeader>
        <Form
          id="category-services-form"
          className="flex flex-col gap-4"
          action="/crm/services"
          method="post"
        >
          {/* <FormSelect /> */}

          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">
              Information
            </div>
            <div className="flex flex-col font-light gap-4 pb-4">
              <input type="hidden" name="type" value={2} />
              {categoryInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="category-services-form"
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
            disabled={navigation.state === "submitting"}
          >
            {" "}
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewCategoryForm;
