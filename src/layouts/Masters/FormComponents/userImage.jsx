import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { personCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function UserImage({ name, label }) {
  const [yourImage, setImage] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "pdf/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          }),
        ),
      );
    },
  });
  if (yourImage.length > 0) {
    /*in this case have a img*/
    return (
      <div>
        <div className="pb-4 pt-3">
          {yourImage.map((upFile, i) => {
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
