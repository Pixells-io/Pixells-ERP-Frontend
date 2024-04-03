import React from "react";

import Stage from "./Stage";

import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

const stages = [
    {
        id: 1,
        name: "Etapa 1",
        leads: [
            {
                id: 11,
                name: "Original Constructor",
            },
            {
                id: 12,

                name: "Copy Constructor",
            },
            {
                id: 13,

                name: "Fake Constructor",
            },
        ],
    },
    {
        id: 2,
        name: "Etapa 2",
        leads: [
            {
                id: 21,

                name: "New Constructor",
            },
        ],
    },
    {
        id: 3,
        name: "Etapa 3",
        leads: [
            {
                id: 31,

                name: "Old Constructor",
            },
        ],
    },
    {
        id: 4,
        name: "Etapa 4",
        leads: [
            {
                id: 41,
                name: "OG Constructor",
            },
        ],
    },
];

const Stages = () => {
    const [modal, setModal] = React.useState(false);
    console.log(stages);
    return (
        <div className="flex gap-2">
            {/* modal */}
            <Dialog open={modal} onOpenChange={setModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when
                            you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {/* etapas */}
            {stages?.map((stage, i) => (
                <Stage
                    setModal={setModal}
                    key={stage.id}
                    name={stage.name}
                    stageId={stage.id}
                    leads={stage.leads}
                />
            ))}

            {/* crear etapa? */}
            <div className="flex h-16 items-center text-3xl text-primario">
                +
            </div>
        </div>
    );
};

export default Stages;
