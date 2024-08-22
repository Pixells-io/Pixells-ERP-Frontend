
/*Using to calculate Total in table */
export const calculateTotal = (row) => {
  const valor = parseFloat(row.valor) || 0;
  const cantidad = parseFloat(row.cantidad) || 0;
  const descuento = parseFloat(row.descuento) || 0;
  const impuesto = parseFloat(row.impuesto) || 0;

  if (descuento < 0 || descuento >= 100) {
    return valor * cantidad * (1 + impuesto / 100);
  } else {
    return valor * cantidad * (1 - descuento / 100) * (1 + impuesto / 100);
  }
};




/*ACTIONS OF TABLE*/
export const handleAddRow = (e, setTableData, initialRow) => {
  e.preventDefault();
  setTableData((prevData) => [...prevData, { ...initialRow }]);
};

export const handleInputChange = (rowIndex, key, value, setTableData) => {
  setTableData((prevData) =>
    prevData.map((item, index) =>
      index === rowIndex ? { ...item, [key]: value } : item
    )
  );
};

export const handleDeleteRow = (rowIndex, setTableData, tableData) => {
  setTableData((prevData) => {
    if (prevData.length > 1) {
      return prevData.filter((_, index) => index !== rowIndex);
    }
    return prevData;
  });
};
