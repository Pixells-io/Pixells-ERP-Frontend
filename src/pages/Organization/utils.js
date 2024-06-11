import Cookies from "js-cookie";

export async function saveNewArea(data) {
  // const process = data.get("procesos_del_area");
  const days = [];
  for (const [key, value] of data.entries()) {
    if (key === "tipo_horario") {
      days.push(value);
    }
  }
  console.log(days);

  const area = {
    nombre: data.get("nombre"),
    descripcion: data.get("descripcion"),
    procesos_del_area: data.getAll("proceso"),
    tipo_horario: days,
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
    coordinate_id: data.getAll("coordinate_id"),
    objetive: data.get("objetive"),
    authority: data.getAll("authority"),
    total: data.getAll("total"),
    shared: data.getAll("shared"),
    authority_cordinate_id: data.getAll("authority_cordinate_id"),
    responsability: data.getAll("responsability_input"),
    experience_years: data.get("experience_years"),
    experience_sector: data.get("experience_sector"),
    experience_description: data.get("experience_description"),
    academy: data.get("academy"),
    name_studies: data.get("name_studies"),
    home_office: data.get("home_office"),
    position_work_type: data.get("position_work_type"),
    language: data.getAll("language"),
    language_percent: data.getAll("language_percent"),
    working_day: data.get("working_day"),
    start: data.get("start"),
    end: data.get("end"),
    knowledge: data.getAll("knowledge"),
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
  const info = {
    // Personal Info
    name: data.get("name"),
    last_name: data.get("last_name"),
    second_last_name: data.get("second_last_name"),
    date_of_birth: data.get("date_of_birth"),
    city_of_birth: data.get("city_of_birth"),
    state_of_birth: data.get("state_of_birth"),
    genre: data.get("genre"),
    civil_status: data.get("civil_status"),
    childrens: data.get("childrens"),
    spouse_firstname: data.get("spouse_firstname"),
    spouse_lastname: data.get("spouse_lastname"),
    spouse_taxid: data.get("spouse_taxid"),
    phone: data.get("phone"),
    personal_email: data.get("personal_email"),
    curp_text: data.get("curp_text"),
    rfc_text: data.get("rfc_text"),
    nss_text: data.get("nss_text"),
    birth_certificade: data.get("birth_certificade"),
    id_date: data.get("id_date"),

    //Health Info
    chronic_diseases: data.get("chronic_diseases"),
    alergic: data.get("alergic"),
    specify_allergy: data.get("specify_allergy"),
    blood: data.get("blood"),

    // Address Info
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cp: data.get("cp"),
    // address_voucher: data.get("address_voucher"),
    discrict: data.get("discrict"),
    city: data.get("city"),
    state: data.get("state"),

    // Emergency Contact Info
    emergency_name: data.get("emergency_name"),
    emergency_last_name: data.get("emergency_last_name"),
    emergency_second_last_name: data.get("emergency_second_last_name"),
    emergency_relationship: data.get("emergency_relationship"),
    emergency_phone: data.get("emergency_phone"),

    // Academic Info
    academics: data.get("academics"),
    academic_grade: data.getAll("academic_grade"),
    specify_academic: data.getAll("specify_academic"),

    // Last Work Info
    working_info: data.get("working-info"),
    company_experience: data.getAll("company_experience"),
    position_experience: data.getAll("position_experience"),
    years_experience: data.getAll("years_experience"),

    // Position Info
    working_center: data.get("working_center"),
    income_date: data.get("income_date"),

    area: data.get("area"),
    boss: data.get("boss"),
    position: data.get("position"),

    monthly_pay: data.get("monthly_pay"),
    legal_benefits: data.get("legal_benefits"),

    institutional_email: data.get("institutional_email"),
    institutional_phone: data.get("institutional_phone"),
    institutional_phone_ext: data.get("institutional_phone_ext"),

    contracts: data.get("contracts"),
    contract: data.getAll("contract"),
    start_contract: data.getAll("start_contract"),
    end_contract: data.getAll("end_contract"),

    bank: data.get("bank"),
    bank_account: data.get("bank_account"),
    regulation: data.get("regulation"),

    password: data.get("password"),
    confirm_password: data.get("confirm_password"),
  };

  // console.log(info);

  const formData = new FormData();

  //User Image
  formData.append("user_image", data.get("user_image"));

  //Data Files
  formData.append("curp_file", data.get("curp_file"));
  formData.append("rfc_file", data.get("rfc_file"));
  formData.append("nss_file", data.get("nss_file"));
  formData.append("birth_certificade", data.get("birth_certificade"));
  formData.append("id_file", data.get("id_file"));
  formData.append("address_voucher", data.get("address_voucher"));
  formData.append("academic_voucher", data.getAll("academic_voucher"));
  formData.append("cv", data.get("cv"));

  formData.append("info", JSON.stringify(info));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization/store-user`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
  // return "ok";
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
