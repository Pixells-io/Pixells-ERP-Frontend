export async function saveNewArea(data) {
  const area = {
    nombre: data.get("nombre"),
    descripcion: data.get("descripcion"),
    procesos_del_area: data.get("procesos_del_area"),
    tipo_horario: data.get("tipo_horario"),
    inicio: data.get("inicio"),
    fin: data.get("fin"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization/store-area`,
    {
      method: "POST",
      body: JSON.stringify(area),
    }
  );

  return response;
}

export async function saveNewPosition(data) {
  const position = {
    area_id: data.get("area_id"),
    position_type: data.get("position_type"),
    position_name: data.get("position_name"),
    permision_access: data.get("permision_access"),
    boss_id: data.get("boss_id"),
    coordinate_id: data.get("coordinate_id"),
    objetive: data.get("objetive"),
    authority: data.get("authority"),
    authority_cordinate_id: data.get("authority_cordinate_id"),
    responsability: data.get("responsability"),
    total_check: data.get("total_check"),
    experience_years: data.get("experience_years"),
    experience_sector: data.get("experience_sector"),
    experience_description: data.get("experience_description"),
    academy: data.get("academy"),
    name_studies: data.get("name_studies"),
    home_office: data.get("home_office"),
    position_work_type: data.get("position_work_type"),
    language: data.get("language"),
    language_percent: data.get("language_percent"),
    working_day: data.get("working_day"),
    start: data.get("start"),
    start: data.get("end"),
    start: data.get("knowledge_1"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization/store-puesto`,
    {
      method: "POST",
      body: JSON.stringify(position),
    }
  );

  return response;
}
