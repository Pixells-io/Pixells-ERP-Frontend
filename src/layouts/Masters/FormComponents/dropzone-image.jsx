import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { personCircle } from "ionicons/icons";

function DropzoneImage({ name, url, initials, disabled }) {
  // console.log(url);
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
    useFsAccessApi: false,
  });

  return (
    <div className="upload-container">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} name={name} disabled={disabled} />
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <div>
            {yourImage.length !== 0 ? (
              <div className="ml-3 flex">
                <Avatar className="h-40 w-40">
                  <AvatarImage
                    src={yourImage[0].preview}
                    className="object-cover"
                  />
                </Avatar>
              </div>
            ) : (
              <div>
                {url === undefined ? (
                  <IonIcon
                    icon={personCircle}
                    className="flex size-40 text-9xl text-primario"
                  />
                ) : (
                  <div className="flex pb-2">
                    <Avatar className="h-40 w-40">
                      <AvatarImage src={url} className="object-cover" />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropzoneImage;
