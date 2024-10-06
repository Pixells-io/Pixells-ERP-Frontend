import React from "react";
import "./Switch.css";

const Switch = ({
  checked,
  onCheckedChange,
  backgroundOnCheck,
  backgroundUnchecked,
  ...props
}) => {
  const handleClick = () => {
    // Alternar el estado y llamar a onCheckedChange
    const newChecked = checked == "1" ? false : true; // Cambiar el valor
    onCheckedChange(newChecked); // Pasar el nuevo valor
  };

  return (
    <>
      <input
        checked={checked == "1"}
        onChange={() => {}} // No hace nada aquí, el cambio se maneja en el click
        className="react-switch-checkbox"
        type="checkbox"
        {...props}
      />
      <label
        className="react-switch-label"
        onClick={handleClick} // Manejar el click en la etiqueta
        style={{
          background: checked == "1"
            ? backgroundOnCheck || "#5B89FF"
            : backgroundUnchecked || "#D7D7D7",
        }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
