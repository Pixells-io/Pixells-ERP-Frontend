
/*Using to calculate Total in table */
export const calculateTotal = (row) => {
  const value = parseFloat(row.value) || 0;
  const quantity = parseFloat(row.quantity) || 0;
  const discount = parseFloat(row.discount) || 0;
  const taxes = parseFloat(row.taxes) || 0;

  if (discount < 0 || discount >= 100) {
    return value * quantity * (1 + taxes / 100);
  } else {
    return value * quantity * (1 - (discount / 100)) * (1 + (taxes / 100));
  }
};

export const calculateSubTotal = (row) => {
  const value = parseFloat(row.value) || 0;
  const quantity = parseFloat(row.quantity) || 0;
 
  return value * quantity;
};

export const calculateTaxes = (row) => {
  const value = parseFloat(row.value) || 0;
  const quantity = parseFloat(row.quantity) || 0;
  const discount = parseFloat(row.discount) || 0;
  const taxes = parseFloat(row.taxes) || 0;

  if (discount < 0 || discount >= 100) {
    return value * quantity * (taxes / 100);
  } else {
    return value * quantity * (1 - (discount / 100)) * ((taxes / 100));
  }
};




/*ACTIONS OF TABLE*/
export const handleAddRow = (e, setTableData, initialRow) => {
  e.preventDefault();
  setTableData((prevData) => [...prevData, { ...initialRow }]);
};

export const handleInputChange = (rowIndex, key, value, setTableData, products = []) => {
  if(key == "product_idAux") {
    let findProduct = products.find(p => p.value == value);
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex ? { 
          ...item, 
          code: findProduct.code,
          value: findProduct.value,
          product_idAux: value, 
          quantity: 1,
          master_product: findProduct.product_master_id, 
          variations: findProduct.variation_id,
          taxes: 16,
          discount: 0,
          unit: findProduct.unit,

        } : item
      )
    );
  } else {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex ? { ...item, [key]: value } : item
      )
    );
  }
};

export const handleDeleteRow = (rowIndex, setTableData, tableData) => {
  setTableData((prevData) => {
    if (prevData.length > 1) {
      return prevData.filter((_, index) => index !== rowIndex);
    }
    return prevData;
  });
};
