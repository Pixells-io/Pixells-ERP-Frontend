export const getDocumentInfo = () => ({
    logoUrl: "https://assets.turbologo.com/assets/landing/logo_maker/Frame-413-fd071c7116548f4e90154b784ff58331d19c846b4bf82a6395d84c2b6906f088.webp",
    numero: "1456",
    fechaDoc: "15 Junio 2024",
    fechaEntrega: "17 Junio 2024",
    proveedor: {
      nombre: "Coca Cola inc.",
      direccion: "Santa Sofia 1456-4 Zapopan, Jalisco",
      telefono: "01222",
      descripcion: "proveedor ejemplo",
      correo: "email@correo.com"
    },
    entrega: {
      direccion: "Av. Revolución 1234, Ciudad de México",
      telefono: "55 1234 5678",
      descripcion: "Entrega a domicilio",
      correo: "entrega@example.com"
    },
    totales: {
      subtotal: "353,280.00",
      impuesto: "56,524.00",
      retencion: "0.00",
      total: "409,804.00"
    }
  });
  
  export const getDocumentItems = () => [
    {
      item: "Producto 1",
      codigo: "001",
      valor: 100,
      descuento: 10,
      impuesto: 5,
      cantidad: 2,
      unidad: "pza",
      fecha: "2024-07-29",
      total: 190,
    },
    // ... más items si es necesario
  ];
  