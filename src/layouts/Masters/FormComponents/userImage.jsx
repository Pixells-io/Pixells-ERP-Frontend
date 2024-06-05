import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { personCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function UserImage({ name, label }) {
  const [yourImage, setYourImage] = useState([]);
  const [envio, setEnvio] = useState([]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: "img/*",
      onDrop: (acceptedFiles) => {
        setYourImage(
          acceptedFiles.map((upFile) =>
            Object.assign(upFile, {
              preview: URL.createObjectURL(upFile),
            }),
          ),
        );
        setEnvio(acceptedFiles);
      },
    });
  if (yourImage.length > 0) {
    /*in this case have a img*/
    return (
      <div>
        <div className="pb-4 pt-3">
          {yourImage.map((upFile, i) => {
            console.log(upFile);
            return (
              <div key={i} {...getRootProps()}>
                <input {...getInputProps()} name={name} />
                <div className="pl-3">
                  <img
                    src={upFile.preview}
                    alt="preview"
                    style={{
                      width: "105px",
                      height: "105px",
                      borderRadius: "100px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    /*In this case dont have Img*/
    return (
      <div>
        <div {...getRootProps()}>
          <input {...getInputProps()} name={name} />
          {isDragActive ? (
            <IonIcon icon={personCircle} className="text-9xl text-primario" />
          ) : (
            <IonIcon
              icon={personCircle}
              className="text-9xl text-grisSubText"
            />
          )}
        </div>
      </div>
    );
  }
}

export default UserImage;
