import Cookies from "js-cookie";

export async function saveNewArea(data) {
  const process = data.get("procesos_del_area");

  const area = {
    nombre: data.get("nombre"),
    descripcion: data.get("descripcion"),
    procesos_del_area: process.split(","),
    tipo_horario: data.get("tipo_horario"),
    inicio: data.get("inicio"),
    fin: data.get("fin"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization/store-area`,
    {
      method: "POST",
      body: JSON.stringify(area),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
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
    total: data.get("total"),
    shared: data.get("shared"),
    authority_cordinate_id: data.get("authority_cordinate_id"),
    responsability: data.get("responsability"),
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
    end: data.get("end"),
    knowledge_1: data.get("knowledge_1"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization/store-puesto`,
    {
      method: "POST",
      body: JSON.stringify(position),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function loginUser(data) {
  const info = {
    email: data.get("email"),
    password: data.get("password"),
    // email: data.email,
    // password: data.password,
  };

  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}login`, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
    },
  });

  return response.json();
}

export async function saveNewUser(data) {
  const user = {
    name: data.get("name"),
    last_name: data.get("last_name"),
    second_last_name: data.get("second_last_name"),
    date_of_birth: data.get("date_of_birth"),
    city_of_birth: data.get("city_of_birth"),
    state_of_birth: data.get("state_of_birth"),
    genre: data.get("genre"),
    civil_status: data.get("civil_status"),
    childrens: data.get("childrens"),
    phone: data.get("phone"),
    personal_email: data.get("personal_email"),
    curp_file: data.get("curp_file"),
    curp_text: data.get("curp_text"),
    rfc_file: data.get("rfc_file"),
    rfc_text: data.get("rfc_text"),
    nss_file: data.get("nss_file"),
    nss_text: data.get("nss_text"),
    birth_certificade: data.get("birth_certificade"),
    id_file: data.get("id_file"),
    id_date: data.get("id_date"),
    chronic_diseases: data.get("chronic_diseases"),
    alergic: data.get("alergic"),
    specify_allergy: data.get("specify_allergy"),
    blood: data.get("blood"),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cp: data.get("cp"),
    address_voucher: data.get("address_voucher"),
    discrict: data.get("discrict"),
    city: data.get("city"),
    state: data.get("state"),
    emergency_name: data.get("emergency_name"),
    emergency_last_name: data.get("emergency_last_name"),
    emergency_second_last_name: data.get("emergency_second_last_name"),
    emergency_relationship: data.get("emergency_relationship"),
    emergency_phone: data.get("emergency_phone"),
    company_experience: data.get("company_experience"),
    position_experience: data.get("position_experience"),
    academic_voucher: data.get("academic_voucher"),
    academic_grade: data.get("academic_grade"),
    specify_academic: data.get("specify_academic"),
    years_experience: data.get("years_experience"),
    working_center: data.get("working_center"),
    income_date: data.get("income_date"),
    cv: data.get("cv"),
    area: data.get("area"),
    boss: data.get("boss"),
    position: data.get("position"),
    monthly_pay: data.get("monthly_pay"),
    income_date: data.get("income_date"),
    contract: data.get("contract"),
    start_contract: data.get("start_contract"),
    end_contract: data.get("end_contract"),
    bank: data.get("bank"),
    bank_account: data.get("bank_account"),
    regulation: data.get("regulation"),
    password: data.get("password"),
    confirm_password: data.get("confirm_password"),
  };

  console.log(data);

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization/store-user`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return 1;
}

export async function saveNewImage(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}sopas-perico`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
