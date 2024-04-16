import React from "react";
import { useLoaderData } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import CheckboxRouter from "@/layouts/Masters/FormComponents/checkbox";
function AccordionModule(area) {

    const modulos = [
        {
            name: 'Organization',
            id: 1
        },
        {
            name: 'Project Manager',
            id: 2
        },
        {
            name: 'CRM',
            id: 3
        },
        {
            name: 'Chat',
            id: 4
        },
        {
            name: 'Analitycs',
            id: 5,
        },
        {
            name: 'Desarrollo Org.',
            id: 6
        },
        {
            name: 'Tickets',
            id: 7
        }
    ];

    const permision = [
        {
            name: 'Read',
            value: 1
        },
        {
            name: 'Edit',
            value: 2
        },
        {
            name: 'Create',
            value: 3
        },
        {
            name: 'Delete',
            value: 4
        }
    ]

    return (
        <div>
            {modulos?.map((modulo, i) => (
                <Accordion type="single" key={1} collapsible className="">
                    <AccordionItem value={1}>
                    <AccordionTrigger className="bg-[#F2F2F2] px-4 text-start p-4">
                        <p className="text-sm font-roboto font-normal text-grisHeading col-span-5 text-right pr-2">
                            {modulo.name}
                        </p>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 border-0">
                        <div className="items-center border-b-[1px] px-1">
                                <div className="flex border-b border[#D7D7D7] py-4">
                                    <div className="w-1/6 pl-8">

                                    </div>
                                    {area.area.positions?.map((position, i) => (
                                        <div>
                                            <span className="text-sm font-semibold text-grisText uppercase font-roboto" >{position.position_name}</span>
                                        </div>
                                    ))}
                                </div>
                            {permision?.map((permiso, i) => (
                                <div className="flex border-b border[#D7D7D7] py-4">
                                    <div className="w-1/6 pl-8">
                                        <span className="font-roboto text-grisHeading uppercase text-sm font-normal">
                                            {permiso.name}
                                        </span>
                                    </div>
                                    {area.area.positions?.map((position, i) => (
                                        <div>
                                            <CheckboxRouter
                                                name={position.id+"/"+permiso.value}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}
export default AccordionModule;