export const calculateImpuesto = (subtotal, taxRate) => {
    return subtotal * taxRate;
  };
  
  export const calculateTotal = (subtotal, impuesto) => {
    return subtotal + impuesto;
  };
  