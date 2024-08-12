// src/components/InputField.jsx
import React from 'react';
import { Input } from '@/components/ui/input';

/**
 * InputField component with styling
 *
 * @param {string} type - The type of the input (e.g., "text", "password")
 * @param {string} name - The name attribute for the input
 * @param {string} value - The value attribute for the input
 * @param {function} onChange - The function to call when the input value changes
 * @param {string} placeholder - The placeholder text for the input
 * @returns {JSX.Element} The styled input component
 */
const InputField = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones"
    />
  </div>
);

export default InputField;
