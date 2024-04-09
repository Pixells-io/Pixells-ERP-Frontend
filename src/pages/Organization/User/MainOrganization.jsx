import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Form, Link, redirect,useLoaderData } from "react-router-dom";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormInput from "@/layouts/CRM/components/Form/FormInput";
import { saveNewArea } from "../utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UsersTable from "./Tables/Users";
import PositionsTable from "./Tables/Positions";
import AreasTable from "./Tables/Areas";

const areaInputs = [
    {
        name: "nombre",
        type: "text",
        placeholder: "Name of the area",
    },
    {
        name: "descripcion",
        type: "text",
        placeholder: "Description of the area",
    },
    {
        name: "procesos_del_area",
        type: "text",
        placeholder: "Process of the area",
    },
    {
        name: "tipo_horario",
        type: "text",
        placeholder: "Type of turn",
    },
    {
        name: "inicio",
        type: "time",
        placeholder: "Start",
    },
    {
        name: "fin",
        type: "time",
        placeholder: "End",
    }
]

function MainOrganization() {
    const [modal, setModal] = useState(false);

    const { users } = useLoaderData();
    const { positions } = useLoaderData();
    const { areas } = useLoaderData();

    return (
        <div className="flex w-full">
            <Dialog open={modal} onOpenChange={setModal}>
                <DialogContent className="sm:max-w-[425px] overflow-auto">
                    <DialogHeader>
                        <DialogTitle className="font-poppins">Create Area</DialogTitle>
                    </DialogHeader>
                    <Form
                    id="area-form"
                    className="flex flex-col gap-0 h-auto"
                    action="/organization"
                    method="post">
                        <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
                            <div className="flex flex-col font-light gap-4 pb-4">
                                {areaInputs?.map((input, i) => (
                                    <FormInput
                                        key={i}
                                        name={input.name}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                    />
                                ))}
                            </div>
                        </div>
                    </Form>
                    <DialogFooter className="h-auto">
                        <Button form="area-form" className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones">
                            Save
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full">
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
                    <div className="font-roboto text-sm text-grisText">organization</div>
                </div>
                {/* top content */}
                <div className="flex items-center gap-4">
                    <div>
                        <h2 className="font-poppins font-bold text-xl text-[#44444F]">
                            USER MANAGEMENT
                        </h2>
                    </div>
                    <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
                        <div className="text-xs">4 service</div>
                        <div className="text-2xl">&bull;</div>
                        <div className="text-xs">9 costumers</div>
                    </div>
                </div>
                {/*button create reg*/}
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <IonIcon icon={addCircleOutline} size="large"  className="text-blue-500"></IonIcon>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setModal(true)}>
                                Areas
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to={"/organization/create-position"}>
                                    Position
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to={"/organization/create-user"}>
                                    User
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {/*component accion*/ }
                <div className="bg-white rounded-xl p-7">
                    <div className="flex">
                        <div>
                            <Tabs defaultValue="users" className="">
                                <TabsList className="bg-transparent">
                                    <TabsTrigger className="rounded-none text-sm font-medium font-roboto text-blue-500 border-b-2 border-blue-500 p-3" value="users">USERS</TabsTrigger>
                                    <TabsTrigger className="rounded-none text-sm font-normal font-roboto text-grisSubText border-b-2 border-slate-300 p-3" value="positions">POSITIONS</TabsTrigger>
                                    <TabsTrigger className="active:text-red-500 rounded-none text-sm font-normal font-roboto text-grisSubText border-b-2 border-slate-300 p-3" value="areas">AREAS</TabsTrigger>
                                </TabsList>
                                <TabsContent value="users" className="">
                                    <UsersTable
                                        users={users.data}
                                    />
                                </TabsContent>
                                <TabsContent value="positions">
                                    <PositionsTable
                                        positions={positions.data}
                                    />
                                </TabsContent>
                                <TabsContent value="areas">
                                    <AreasTable
                                        areas={areas.data}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainOrganization;

export async function Action({request}) {
    const data = await request.formData();
    
    const validation = await saveNewArea(data)

    return redirect("/organization")
}