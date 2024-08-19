import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, useNavigation } from "react-router-dom";

import { useDropzone } from "react-dropzone";

import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";

function NewTopic({ modal, setModal, functionModal, categories, user }) {
  const [stepped, setStepped] = useState(1);
  const [files, setFiles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const { getRootProps, getInputProps, acceptedFiles, inputRef } = useDropzone({
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          typeDocument: file.type,
        }),
      );
      setFiles([...newFiles]);
      setStepped(3);
    },
    accept: { "image/*": [".pdf", ".jpeg", ".jpg", ".png"] },
    multiple: true,
    useFsAccessApi: false,
  });

  useEffect(() => {
    clearData();
  }, [modal]);

  const clearData = () => {
    setStepped(1);
    setFiles([]);
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[380px] gap-0 overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Topic
          </DialogTitle>
        </DialogHeader>

        <Form
          id="form-topic"
          encType="multipart/form-data"
          action="/topics"
          method="post"
          className={`w-full ${stepped !== 3 ? "flex items-center justify-center" : "hidden"} `}
        >
          <input type="hidden" name="type_function" value={1} />
          <div className={stepped == 1 ? "flex h-[250px] w-full" : "hidden"}>
            <StepOne
              setStepped={setStepped}
              category={categories}
              user={user}
            />
          </div>

          <div
            className={`h-[318px] w-full ${stepped == 2 ? "flex items-center justify-center" : "hidden"}`}
          >
            <StepTwo
              getRootProps={getRootProps}
              getInputProps={getInputProps}
            />
          </div>
        </Form>

        <div className={stepped == 3 ? "block" : "hidden"}>
          <StepThree
            setStepped={setStepped}
            files={files}
            setFiles={setFiles}
            acceptedFiles={acceptedFiles}
            inputRef={inputRef}
          />
        </div>

        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default NewTopic;
