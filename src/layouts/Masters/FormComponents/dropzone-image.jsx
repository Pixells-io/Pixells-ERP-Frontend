import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import { IonIcon } from "@ionic/react";
import { personCircle } from "ionicons/icons";

function DropzoneImage({ name }) {
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
              <div className="ml-3 flex">
                <img
                  src={yourImage[0].preview}
                  alt="preview"
                  style={{
                    width: "105px",
                    height: "105px",
                    borderRadius: "100px",
                  }}
                />
              </div>
            ) : (
              <IonIcon icon={personCircle} className="text-9xl text-primario" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropzoneImage;
