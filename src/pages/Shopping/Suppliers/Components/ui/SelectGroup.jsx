import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  const ReSelect = ({ options, name, value, onChange, placeholder, label }) => {
    const StyleSelect = 'w-full border-grisBg border-lg placeholder:text-grisHeading focus-visible:ring-primarioBotones';
    return (
      <Select className={StyleSelect} value={value} onValueChange={onChange}>
        <SelectTrigger >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {options.map((option, index) => (
              <SelectItem key={index} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };
  
  export default ReSelect;