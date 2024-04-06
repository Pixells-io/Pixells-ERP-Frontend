import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";

function FileRouter({ name, label }) {
    const [yourImage, setImage] = useState([]);

    const{getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: "pdf/*",
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })

  return (
    <div>
        <div {...getRootProps()} className="bg-indigo-100 text-center pt-4 pb-4 text-primario rounded-2xl border-2 border-dashed border-primario">
            <input {...getInputProps()} name={name} />
            {
                isDragActive ? <p> Drop the {label} here... </p> : <p> {label} </p>
            }
        </div>
        <div>
            {yourImage.map((upFile) => {
                return (
                    <div className="flex justify-center pt-2">
                        <img src={upFile.preview} alt="preview" style={{ width:"160px", height:"200px", border:"1px solid #ccc" }} />
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default FileRouter;