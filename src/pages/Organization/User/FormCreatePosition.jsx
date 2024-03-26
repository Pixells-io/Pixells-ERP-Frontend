import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { useLoaderData } from "react-router-dom";

function FormCreatePosition() {
    const {data} = useLoaderData();

    return (
        <div className="flex w-full">
            <div className="flex flex-col w-full bg-gris p-8 ml-4 rounded-lg space-y-4 overflow-x-auto gap-4">
                {/* navigation inside */}
                <div className="flex gap-4 items-center">
                    <div className="flex gap-2  text-gris2">
                        <div className="w-12 h-12">
                            <IonIcon icon={chevronBack} size="large" className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                        </div>
                        <div className="w-12 h-12">
                            <IonIcon icon={chevronForward} size="large"  className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                        </div>
                    </div>
                    <div className="font-roboto text-grisText">organization</div>
                </div>
                {/* top content */}
                <div className="flex items-center gap-4">
                    <div>
                        <h2 className="font-poppins font-bold text-2xl text-[#44444F]">
                            USER MANAGEMENT
                        </h2>
                    </div>
                    <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
                        <div>4 service</div>
                        <div className="text-2xl">&bull;</div>
                        <div>9 costumers</div>
                    </div>
                </div>
                <div>
                    <h2 className="font-poppins font-bold text-xl text-[#44444F]">
                        New Position
                    </h2>
                </div>
                {/*USER BOX CREATE*/}
                <div className="bg-white rounded-xl p-4">
                    <div className="bg-blancoForms p-5 rounded-2xl">
                        <span className="text-roboto text-grisText text-sm font-medium">General Information</span>
                        <div className="flex pt-4">
                            <div>
                                <div className="flex">
                                    <div className="pr-4">
                                        <select  className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-52" name="area_id">
                                            <option value="" selected>Area</option>
                                            {data?.map((input, i) => (
                                                <option value={input.id}>{input.nombre} </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div  className="pr-4">
                                        <select  className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-52" name="puesto_nombre_1">
                                            <option value="" selected>Type</option>
                                            <option value="Operador">Operador</option>
                                            <option value="Analista">Analista</option>
                                            <option value="Técnico">Técnico</option>
                                            <option value="Líder">Líder</option>
                                            <option value="Ing.">Ing.</option>
                                            <option value="Coordinador">Coordinador</option>
                                            <option value="Gerente">Gerente</option>
                                            <option value="Director">Director</option>
                                        </select>
                                    </div>
                                    <div  className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-52" name="puesto_nombre_2" placeholder="Position Name" />
                                    </div>
                                    <div  className="pr-4">
                                        <select  className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-52" name="acceso_a_permiso">
                                            <option value="" selected>Permission Access</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex  w-full">
                                    <div className="flex w-52">
                                        <input type="file" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="curp" placeholder="CURP" />
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="curp" placeholder="CURP" />
                                    </div>
                                    <div className="flex w-52 ml-4">
                                        <input type="file" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="curp" placeholder="CURP" />
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="rfc" placeholder="RFC" />
                                    </div>
                                    <div className="flex w-52 ml-4">
                                        <input type="file" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="curp" placeholder="CURP" />
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="nss" placeholder="NSS" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-52">
                                <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="enfermedades_cronicas" placeholder="Enfermedades Cronicas" />
                                <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4 ml-4" name="blood_type" placeholder="Type of Blood" />
                            </div>
                            <div className="flex w-52 ml-4">
                                <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="alergic" placeholder="alergia" />
                                <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4 ml-4" name="especificar" placeholder="especificar" />
                            </div>
                        </div>
                    </div>
                    {/*Adress Card*/}
                    <div className="bg-blancoForms p-4 mt-10 rounded-xl">
                        <span className="text-roboto text-grisText text-sm font-medium">Domicilio</span>
                        <div className="flex pt-4">
                            <div className="w-4/6">
                                <div className="flex">
                                    <div className="w-52">
                                    <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-52" name="calle" placeholder="Calle" />
                                    </div>
                                    <div className="w-52 flex">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4" name="ext" placeholder="Ext." />
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-2/4 ml-4" name="int" placeholder="Int" />
                                    </div>
                                    <div className="w-52">

                                    </div>
                                    <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-36" name="cp" placeholder="C.P." />
                                    <input type="file" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-20" name="curp" placeholder="CURP" />
                                </div>
                                <div className="flex mt-2">
                                    <div className="pr-4">
                                        <input type="date" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-48" name="colonia" placeholder="Colonia" />
                                    </div>
                                    <div  className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-48" name="ciudad" placeholder="Ciudad" />
                                    </div>
                                    <div  className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-48" name="estado" placeholder="Estado" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Emergency Contact*/}
                    <div className="bg-blancoForms p-5 mt-10 rounded-2xl">
                        <span className="text-roboto text-grisText text-sm font-medium">Contacto de Emergencia</span>
                        <div className="flex pt-4">
                            <div className="w-4/6">
                                <div className="flex">
                                    <div className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-48" name="nombre" placeholder="Nombre" />
                                    </div>
                                    <div  className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-20" name="apellido_p" placeholder="Paterno" />
                                    </div>
                                    <div  className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-20" name="apellido_m" placeholder="Materno" />
                                    </div>
                                    <div  className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-36" name="parentesco" placeholder="Parentesco" />
                                    </div>
                                    <div  className="pr-4">
                                        <input type="text" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-36" name="telefono" placeholder="Telefono" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Password*/}
                    <div className="bg-blancoForms p-5 mt-10 rounded-2xl">
                        <span className="text-roboto text-grisText text-sm font-medium">Password</span>
                        <div className="flex pt-4">
                            <div className="w-4/6">
                                <div className="flex">
                                    <div className="pr-4">
                                        <input type="password" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-48" name="password" placeholder="Password" />
                                    </div>
                                    <div  className="pr-4">
                                        <input type="password" className="bg-transparent text-sm text-grisSubText border-b border-grisText p-3 outline-0 w-48" name="password_2" placeholder="Confirm the Password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormCreatePosition;