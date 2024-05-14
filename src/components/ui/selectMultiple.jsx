import Select from "react-select";
import makeAnaimated, { Placeholder } from "react-select/animated";

const styles = {
  control: (styles) => {
    return {
      ...styles,
      backgroundColor: "transparent",
      color: "#8F8F8F",
      borderWidth: 1,
      borderColor: "#8F8F8F",
      borderRadius: 0,
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      color: "#8F8F8F",
    };
  },
  option: (styles) => {
    return {
      ...styles,
      color: "#8F8F8F",
    };
  },
};

function SelectMultiple({ name, placeholder, options }) {
  const animatedComponents = makeAnaimated();

  return (
    <div className="h-auto">
      <Select
        isMulti
        options={options}
        closeMenuOnSelect={false}
        components={animatedComponents}
        styles={styles}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SelectMultiple;
