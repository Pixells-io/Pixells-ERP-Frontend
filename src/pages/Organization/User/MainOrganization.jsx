import React from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function MainOrganization() {
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
                {/*button create reg*/}
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <IonIcon icon={addCircleOutline} size="large"  className="text-blue-500"></IonIcon>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                Area
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Position
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
                            <span className="text-sm font-medium font-roboto text-blue-500 border-b-2 border-blue-500 p-3">USERS</span>
                            <span className="text-sm font-medium font-roboto text-grisSubText border-b-2 border-slate-300 p-3">POSITIONS</span>
                            <span className="text-sm font-medium font-roboto text-grisSubText border-b-2 border-slate-300 p-3">AREAS</span>
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