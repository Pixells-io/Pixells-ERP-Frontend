import React from "react";
import "./Switch.css";

const Switch = ({
  checked,
  onCheckedChange,
  backgroundOnCheck,
  backgroundUnchecked,
  ...props
}) => {
  return (
    <>
      <input
        checked={checked == "1"}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        {...props}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{
          background: checked == "1"
            ? backgroundOnCheck || "#5B89FF"
            : !backgroundUnchecked || "#D7D7D7",
        }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
