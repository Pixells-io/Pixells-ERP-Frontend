import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckboxRouter from "@/layouts/Masters/FormComponents/checkbox";
import CheckboxAccordion from "./CheckboxAccordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
function AccordionModule(area) {
  const modulos = [
    {
      name: "Organization",
      id: 1,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Project Manager",
      id: 2,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "CRM",
      id: 3,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Chat",
      id: 4,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Analitycs",
      id: 5,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Desarrollo Org.",
      id: 6,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Tickets",
      id: 7,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Bank Management",
      id: 9,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Accounting",
      id: 10,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Inventory",
      id: 11,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Sales",
      id: 12,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Shopping",
      id: 13,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Transformation",
      id: 14,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Pos",
      id: 15,
      org_m: "0",
      tran_m: "1",
    },
  ];

  const permision = [
    {
      name: "Read",
      value: 1,
    },
    {
      name: "Edit",
      value: 2,
    },
    {
      name: "Create",
      value: 3,
    },
    {
      name: "Delete",
      value: 4,
    },
  ];

  return (
    <div>
      {modulos?.map((modulo, i) => (
        <>
          {modulo.org_m === import.meta.env.VITE_ORGANIZATIONAL_MODULES ||
          modulo.tran_m === import.meta.env.VITE_TRANSACTIONAL_MODULES ? (
            <Accordion
              type="single"
              key={"modulo" + i}
              collapsible
              className=""
            >
              <AccordionItem value={1}>
                <AccordionTrigger className="bg-[#F2F2F2] p-4 px-4 text-start">
                  <p className="col-span-5 pr-2 text-right font-roboto text-sm font-normal text-grisHeading">
                    {modulo.name}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="border-0 p-4">
                  {/* <div className="items-center border-b-[1px] px-1">
                  <div className="border[#D7D7D7] flex border-b py-4">
                    <div className="w-1/6 pl-8"></div>
                    {area.area.positions?.map((position, i) => (
                      <div key={"positionOne" + i}>
                        <span className="font-roboto text-sm font-semibold uppercase text-grisText">
                          {position.position_name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {permision?.map((permiso, i) => (
                    <div key={"permiso" + i} className="border[#D7D7D7] flex border-b py-4">
                      <div className="w-1/6 pl-8">
                        <span className="font-roboto text-sm font-normal uppercase text-grisHeading">
                          {permiso.name}
                        </span>
                      </div>
                      {area.area.positions?.map((position, i) => (
                        <div key={"positionTwo" + i}>
                          <CheckboxAccordion
                            position={position.id}
                            permision={permiso.value}
                            module={modulo.id}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div> */}

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]"></TableHead>
                        {area.area.positions?.map((position, i) => (
                          <TableHead key={"th" + i}>
                            <div className="flex justify-center">
                              <span className="text-center font-roboto text-sm font-semibold uppercase text-grisText">
                                {position.position_name}
                              </span>
                            </div>
                          </TableHead>
                        ))}
                        <TableHead className="w-full"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {permision?.map((permiso, i) => (
                        <TableRow
                          key={i}
                          className="border[#D7D7D7] border-b py-4"
                        >
                          <TableCell>
                            <span className="font-roboto text-sm font-normal uppercase text-grisHeading">
                              {permiso.name}
                            </span>
                          </TableCell>
                          {area.area.positions?.map((position, i) => (
                            <TableCell key={"tc" + i}>
                              <div className="flex w-full justify-center">
                                <CheckboxAccordion
                                  position={position.id}
                                  permision={permiso.value}
                                  module={modulo.id}
                                />
                              </div>
                            </TableCell>
                          ))}
                          <TableCell></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : null}
        </>
      ))}
    </div>
  );
}
export default AccordionModule;
