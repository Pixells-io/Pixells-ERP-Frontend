export async function saveNewArea(data) {
  const area = {
    nombre: data.get("nombre"),
    descripcion: data.get("descripcion"),
    procesos_del_area: data.get("procesos_del_area"),
    tipo_horario: data.get("tipo_horario"),
    inicio: data.get("inicio"),
    fin: data.get("fin"),
  };

  console.log(area);

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization/store-area`,
    {
      method: "POST",
      body: JSON.stringify(area),
    }
  );

  console.log(response);

  return response;
}
