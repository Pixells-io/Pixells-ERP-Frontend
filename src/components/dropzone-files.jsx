import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";

function DropzoneFile({ name, label }) {
  const [yourImage, setYourImage] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Logic for handling the dropped files
    setYourImage(
      acceptedFiles.map((upFile) =>
        Object.assign(upFile, {
          preview: URL.createObjectURL(upFile),
        }),
      ),
    );
    console.log(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop: handleDrop,
      accept: { "image/*": [".pdf", ".doc", ".docx", ".jpeg", ".jpg", ".png"] },
      multiple: true,
      useFsAccessApi: false,
    });
  return (
    <div className="">
      <div {...getRootProps()} className={` ${isDragActive ? "" : ""}`}>
        <input {...getInputProps()} name={name} />
        {acceptedFiles.length == 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-primario bg-[#DEE5F5] pb-4 pt-4 text-center font-light text-primario">
            <p>{label}</p>
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-primario bg-[#DEE5F5] pb-4 pt-4 text-center font-light text-primario">
            {yourImage.length !== 0 ? (
              <div className="relative flex flex-col px-2">
                <button
                  type="button"
                  className=""
                  onClick={() => setYourImage([])}
                >
                  <IonIcon
                    icon={closeCircle}
                    size=""
                    className="absolute -top-1 right-1"
                  />
                </button>
                <img src={yourImage[0].preview} alt="preview" className="" />
                <p>{yourImage[0].path}</p>
              </div>
            ) : (
              <p>{label}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropzoneFile;
