import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import InputRouter from "../../../layouts/Masters/FormComponents/input";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";
import FileRouter from "../../../layouts/Masters/FormComponents/file";
import UserImage from "../../../layouts/Masters/FormComponents/userImage";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { saveNewUser } from "../utils";

function FormCreateUser() {

    const {areas, positions } = useLoaderData();

    const selectArea = [];
    const selectPosition = [];

    arrayFillAreas(areas, selectArea);
    arrayFillPositions(positions, selectPosition);

    function arrayFillAreas(data, array) {

        let dataParse = data.data;

        dataParse.forEach(element => {
            array.push({
                label: element.nombre,
                value: element.id,
                placeholder: "0"
            });
        });
    }

    function arrayFillPositions(data, array) {

        let dataParse = data.data;

        dataParse.forEach(element => {
            array.push({
                label: element.position_name,
                value: element.id,
                placeholder: "0"
            });
        });
    }

    const selectBasics = [
        {
            label: "Yes",
            value: "1",
        },
        {
            label: "No",
            value: "0",
        },
    ];

    const genreSelect = [
        {
            label: "Male",
            value: "Male",
        },
        {
            label: "Female",
            value: "Female",
        }
    ];

    const civilStatus = [
        {
            label: "Single",
            value: "Single",
        },
        {
            label: "Married",
            value: "Married",
        },
        {
            label: "Concubinage",
            value: "Concubinage",
        },
        {
            label: "Divorced",
            value: "Divorced",
        },
        {
            label: "Widower",
            value: "Widower",
        }
    ];

    const bloodType = [
        {
            label: "A+",
            value: "A+",
        },
        {
            label: "A-",
            value: "A-",
        },
        {
            label: "B+",
            value: "B+",
        },
        {
            label: "B-",
            value: "B-",
        },
        {
            label: "AB+",
            value: "AB+",
        },
        {
            label: "AB-",
            value: "AB-",
        },
        {
            label: "O+",
            value: "O+",
        },
        {
            label: "O-",
            value: "O-",
        }
    ];


    const academyGrade = [
        {
            label: "Elementary School",
            value: "Elementary School"
        },
        {
            label: "Middle School",
            value: "Middle School"
        },
        {
            label: "High School",
            value: "High School"
        },
        {
            label: "University",
            value: "University"
        }
    ];

    const workingbenefits = [
        {
            label: "Health Insurance",
            value: "Health Insurance"
        },
    ];

    const contracts = [
        {
            label: "Example",
            value: "Example"
        },
    ];

    const banks = [
        {
            label: "Bank",
            value: "Bank"
        },
    ];


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
                        New User
                    </h2>
                </div>
                {/*USER BOX CREATE*/}
                <form
                    action="https://demoback.pixells.io/api/organization/store-user"
                    method="post"
                    enctype="multipart/form-data">
                    <div className="bg-white rounded-xl p-4">
                        <div className="w-1/4">
                            <UserImage
                                name={"user_image"}
                                label={"User Image"}
                            />
                        </div>
                        <div className="bg-blancoForms p-5 rounded-2xl">
                            <span className="text-roboto text-grisText text-sm font-medium">Personal Information</span>
                            <div className="flex pt-4">
                                <div className="w-4/6 pr-8">
                                    <div className="flex">
                                        <div className="pr-4 w-1/3">
                                            <InputRouter
                                                name={"name"}
                                                placeholder={"Name"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4 w-1/3">
                                            <InputRouter
                                                name={"last_name"}
                                                placeholder={"Last Name"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4 w-1/3">
                                            <InputRouter
                                                name={"second_last_name"}
                                                placeholder={"Second Last Name"}
                                                type={"text"}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="pr-4 w-1/3">
                                            <InputRouter
                                                name={"date_of_birth"}
                                                placeholder={"Date of Birth"}
                                                type={"date"}
                                            />
                                        </div>
                                        <div  className="pr-4 w-1/3">
                                            <InputRouter
                                                name={"city_of_birth"}
                                                placeholder={"City of Birth"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4 w-1/3">
                                            <InputRouter
                                                name={"state_of_birth"}
                                                placeholder={"State of Birth"}
                                                type={"text"}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="pr-4 w-1/3">
                                            <SelectRouter
                                                name={"genre"}
                                                placeholder={"Genre"}
                                                options={genreSelect}
                                            />
                                        </div>
                                        <div  className="pr-4 w-1/3">
                                            <SelectRouter
                                                name={"civil_status"}
                                                placeholder={"Civil Status"}
                                                options={civilStatus}
                                            />
                                        </div>
                                        <div  className="pr-4 w-1/3">
                                            <InputRouter
                                                name={"childrens"}
                                                placeholder={"Children"}
                                                type={"number"}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="pr-4  w-1/3">
                                            <InputRouter
                                                name={"phone"}
                                                placeholder={"Phone"}
                                                type={"number"}
                                            />
                                        </div>
                                        <div  className="pr-4  w-1/3">
                                            <InputRouter
                                                name={"personal_email"}
                                                placeholder={"Personal Email"}
                                                type={"email"}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="pr-4  w-1/3 flex">
                                            <div className="w-1/2">
                                                <FileRouter
                                                    name={'curp_file'}
                                                    label={'CURP'}
                                                />
                                            </div>
                                            <div className="PR-4 w-1/2">                              
                                                <InputRouter
                                                    name={"curp_text"}
                                                    placeholder={"Curp"}
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                        <div className="pl-4 pr-4  w-1/3 flex">
                                            <div className="w-1/2">
                                                <FileRouter
                                                    name={'rfc_file'}
                                                    label={'RFC'}
                                                />
                                            </div>
                                            <div className="w-1/2">                              
                                                <InputRouter
                                                    name={"rfc_text"}
                                                    placeholder={"Rfc"}
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                        <div className="pl-4 pr-4 w-1/3 flex">
                                            <div className="w-1/2">
                                                <FileRouter
                                                    name={'nss_file'}
                                                    label={'NSS'}
                                                />
                                            </div>
                                            <div className="w-1/2">                              
                                                <InputRouter
                                                    name={"nss_text"}
                                                    placeholder={"NSS"}
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/6">
                                    <div>
                                        <FileRouter
                                            name={'birth_certificade'}
                                            label={'Birth Certificate'}
                                        />
                                    </div>
                                    <div className="flex pt-4 pr-6">
                                        <div className="w-1/2">
                                            <FileRouter
                                                name={'id_file'}
                                                label={'ID'}
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <InputRouter
                                                name={"id_date"}
                                                placeholder={"Id Date"}
                                                type={"date"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Health Card*/}
                        <div className="bg-blancoForms p-4 mt-10 rounded-xl">
                            <span className="text-roboto text-grisText text-sm font-medium">Health Information</span>
                            <div className="flex pt-4">
                                <div className="flex w-full pr-8">
                                    <div className="pr-4 w-1/4">
                                        <SelectRouter
                                            name={"chronic_diseases"}
                                            placeholder={"Chronic Diseases"}
                                            options={selectBasics}
                                        />
                                    </div>
                                    <div className="pr-4 w-1/4">
                                        <SelectRouter
                                            name={"alergic"}
                                            placeholder={"Alergic"}
                                            options={selectBasics}
                                        />
                                    </div>
                                    <div className="pr-4 w-1/4">
                                        <InputRouter
                                            name={"specify_allergy"}
                                            placeholder={"Specify the Allergy"}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="pr-4 w-1/4">
                                        <SelectRouter
                                            name={"blood"}
                                            placeholder={"Type of Blood"}
                                            options={bloodType}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Address Card*/}
                        <div className="bg-blancoForms p-4 mt-10 rounded-xl">
                            <span className="text-roboto text-grisText text-sm font-medium">Address Information</span>
                            <div className="flex pt-4">
                                <div className="">
                                    <div className="flex w-full">
                                        <div className="pr-4 w-1/4">
                                            <InputRouter
                                                name={"street"}
                                                placeholder={"Street"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="pr-4 w-1/4 flex">
                                            <div className="w-1/2">
                                                <InputRouter
                                                    name={"ext"}
                                                    placeholder={"Ext"}
                                                    type={"text"}
                                                />
                                            </div>
                                            <div className="pl-4 w-1/2">
                                                <InputRouter
                                                    name={"int"}
                                                    placeholder={"Int"}
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                        <div className="pr-4 w-1/4">
                                            <InputRouter
                                                name={"cp"}
                                                placeholder={"CP"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="pr-4 pl-4 w-1/4">
                                            <FileRouter
                                                name={'address_voucher'}
                                                label={'Adress Voucher'}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mt-2">
                                        <div className="pr-4 w-1/4">
                                            <InputRouter
                                                name={"discrict"}
                                                placeholder={"Discrict"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4  w-1/4">
                                            <InputRouter
                                                name={"city"}
                                                placeholder={"City"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4  w-1/4">
                                            <InputRouter
                                                name={"state"}
                                                placeholder={"State"}
                                                type={"text"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Emergency Contact*/}
                        <div className="bg-blancoForms p-5 mt-10 rounded-2xl">
                            <span className="text-roboto text-grisText text-sm font-medium">Emergency Contact</span>
                            <div className="flex pt-4">
                                <div className="w-full">
                                    <div className="flex">
                                        <div className="pr-4">
                                            <InputRouter
                                                name={"emergency_name"}
                                                placeholder={"Name"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4">
                                            <InputRouter
                                                name={"emergency_last_name"}
                                                placeholder={"Last Name"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4">
                                            <InputRouter
                                                name={"emergency_second_last_name"}
                                                placeholder={"Second Last Name"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4">
                                            <InputRouter
                                                name={"emergency_relationship"}
                                                placeholder={"Relationship"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div  className="pr-4">
                                            <InputRouter
                                                name={"emergency_phone"}
                                                placeholder={"Phone"}
                                                type={"text"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Academic Information*/}
                        <div className="bg-blancoForms p-4 mt-10 rounded-xl">
                            <span className="text-roboto text-grisText text-sm font-medium">Academic Information</span>
                            <div className="flex pt-4">
                                <div className="flex w-full">
                                    <div className="pr-4 w-1/3">
                                        <InputRouter
                                            name={"company_experience"}
                                            placeholder={"Company"}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="pr-4 w-1/3">
                                        <InputRouter
                                            name={"position_experience"}
                                            placeholder={"Position"}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="pr-4 pl-4 w-1/3">
                                        <FileRouter
                                            name={'academic_voucher'}
                                            label={'Academic Voucher'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Working Information*/}
                        <div className="bg-blancoForms p-4 mt-10 rounded-xl">
                            <span className="text-roboto text-grisText text-sm font-medium">Working Information</span>
                            <div className="flex w-full pt-4">
                                <div className="pr-4 w-1/3">
                                    <SelectRouter
                                        name={"academic_grade"}
                                        placeholder={"Academic Grade"}
                                        options={academyGrade}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <InputRouter
                                        name={"specify_academic"}
                                        placeholder={"Specify the Academic Grade"}
                                        type={"text"}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <InputRouter
                                        name={"years_experience"}
                                        placeholder={"Years of Experience"}
                                        type={"number"}
                                    />
                                </div>
                            </div>
                            <div className="flex pt-4">
                                <div className="pr-4 w-1/3">
                                    <InputRouter
                                        name={"working_center"}
                                        placeholder={"Working Center"}
                                        type={"text"}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <InputRouter
                                        name={"income_date"}
                                        placeholder={"Income Date"}
                                        type={"date"}
                                    />
                                </div>
                                <div className="pr-4 pl-4 w-1/3">
                                    <FileRouter
                                        name={'cv'}
                                        label={'CV'}
                                    />
                                    
                                </div>
                            </div>
                            <div className="flex pt-4">
                                <div className="pr-4 w-1/3">
                                    <SelectRouter
                                        name={"area"}
                                        placeholder={"Area"}
                                        options={selectArea}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <SelectRouter
                                        name={"boss"}
                                        placeholder={"Boss"}
                                        options={selectArea}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <SelectRouter
                                        name={"position"}
                                        placeholder={"Position"}
                                        options={selectPosition}
                                    />
                                </div>
                            </div>
                            <div className="flex pt-4">
                                <div className="pr-4 w-1/3">
                                    <InputRouter
                                        name={"monthly_pay"}
                                        placeholder={"Monthly Pay"}
                                        type={"number"}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <InputRouter
                                        name={"income_date"}
                                        placeholder={"Income Date"}
                                        type={"date"}
                                    />
                                </div>
                            </div>
                            <div className="flex pt-4">
                                <div className="pr-4 w-1/3">
                                    <SelectRouter
                                        name={"contract"}
                                        placeholder={"Type of Contract"}
                                        options={contracts}
                                    />
                                </div>
                                <div className="pr-4 w-1/3 flex">
                                    <div className="w-1/2">
                                        <InputRouter
                                            name={"start_contract"}
                                            placeholder={"Start Contract"}
                                            type={"date"}
                                        />
                                    </div>
                                    <div className="w-1/2 pl-4">
                                        <InputRouter
                                            name={"end_contract"}
                                            placeholder={"End Contract"}
                                            type={"date"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-4">
                                <div className="pr-4 w-1/3">
                                    <SelectRouter
                                        name={"bank"}
                                        placeholder={"Bank"}
                                        options={banks}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <InputRouter
                                        name={"bank_account"}
                                        placeholder={"bank Account"}
                                        type={"text"}
                                    />
                                </div>
                                <div className="pr-4 w-1/3">
                                    <SelectRouter
                                        name={"regulation"}
                                        placeholder={"Regulation"}
                                        options={selectBasics}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*Password*/}
                        <div className="bg-blancoForms p-5 mt-10 rounded-2xl">
                            <span className="text-roboto text-grisText text-sm font-medium">Password</span>
                            <div className="flex pt-4">
                                <div className="w-full">
                                    <div className="flex w-full">
                                        <div className="pr-4 w-1/4">
                                            <InputRouter
                                                name={"password"}
                                                placeholder={"********"}
                                                type={"password"}
                                            />
                                        </div>
                                        <div  className="pr-4 w-1/4">
                                            <InputRouter
                                                name={"confirm_password"}
                                                placeholder={"********"}
                                                type={"password"}
                                            />
                                        </div>
                                        <div className="w-2/4 text-end pr-5">
                                            <button type="submit" className="font-roboto font-semibold text-sm p-4 text-white justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FormCreateUser;

export async function Action({request}) {
    const data = await request.formData();

    const validation = await saveNewUser(data)

    //return redirect("/organization");
}