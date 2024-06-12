import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { personCircle } from "ionicons/icons";

function DropzoneImage({ name, url, initials }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
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
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { "image/*": [".pdf", ".doc", ".docx", ".jpeg", ".jpg", ".png"] },
    multiple: true,
  });
  return (
    <div className="upload-container">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} name={name} />
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <div>
            {yourImage.length !== 0 ? (
              <div className="ml-3 flex justify-center">
                <img
                  src={yourImage[0].preview}
                  alt="preview"
                  style={{
                    width: "176px",
                    height: "176px",
                    borderRadius: "100px",
                  }}
                />
              </div>
            ) : (
              // <IonIcon icon={personCircle} className="text-9xl text-primario" />
              <div className="flex justify-center">
                <Avatar className="h-44 w-44">
                  <AvatarImage src={url} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropzoneImage;
