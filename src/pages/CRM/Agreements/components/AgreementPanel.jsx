import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AgreementsPanel({ data }) {
  const [value, setValue] = useState(data.template);

  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["image"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  let module = {
    toolbar: toolbarOptions,
  };

  function addVariable(valueNumber) {
    let varValue = null;
    switch (valueNumber) {
      case 1:
        varValue = "{person_name}";
        break;
      case 2:
        varValue = "{service_name}";
        break;
      case 3:
        varValue = "{date}";
        break;
      case 4:
        varValue = "<img>";
        break;
      case 5:
        varValue = "________________________";
        break;

      default:
        break;
    }

    let actualValue = value.toString();
    setValue(actualValue + varValue);
  }

  return (
    <div>
      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ maxHeight: "420px", overflow: "auto" }}
          modules={module}
        />
        <textarea name="template" className="hidden" value={value}></textarea>
      </div>
      <div className="mt-2 flex gap-4">
        <div>
          <button
            onClick={() => addVariable(1)}
            type="button"
            className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
          >
            Nombre del Cliente
          </button>
        </div>
        <div>
          <button
            onClick={() => addVariable(2)}
            type="button"
            className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
          >
            Servicio
          </button>
        </div>
        <div>
          <button
            onClick={() => addVariable(3)}
            type="button"
            className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
          >
            Fecha
          </button>
        </div>
        <div>
          <button
            onClick={() => addVariable(4)}
            type="button"
            className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
          >
            Firma
          </button>
        </div>
        <div>
          <button
            onClick={() => addVariable(5)}
            type="button"
            className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
          >
            Campo Abierto
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgreementsPanel;
