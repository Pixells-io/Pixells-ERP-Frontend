import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Form, Link, useLoaderData } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  closeCircle,
  copy,
  print,
} from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import SelectsQuoteShow from "./Components/SelectsQuoteShow";
import TotalShow from "../../Components/TotalSectionShow";
import QuoteTableShow from "../../Components/QuoteTableShow";
import { WrappedMain } from "@/layouts/Masters/WrappedMain/WrappedMain";
import NavigationHeader from "@/components/navigation-header";

const TicketDetails = () => {
  const { ticketSale } = useLoaderData();

  const url = "/sales/tickets/document/" + ticketSale?.data?.id;
  const [isShipping, setIsShipping] = useState(
    !(ticketSale?.data?.shipping == "0.00"),
  );

  return (
   <WrappedMain>
        {/* navigation inside */}
        <NavigationHeader/>
        {/* top content */}
        <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">VENTAS</h2>
        <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">&bull; 4 objective </div>
          <div className="text-xs">&bull; 25 SFC </div>
          <div className="text-xs">&bull; 43 Activities</div>
        </div>
      </div>

        <div className="flex items-center justify-between">
          <p className="mb-4 font-poppins text-[20px] font-bold text-[#44444F]">
            Consultando Ticket/Remisión: { ticketSale?.data?.id }
          </p>
          <div className="flex flex-row">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={copy}
                size="small"
                className="cursor-pointer text-[#696974]"
              />
            </Button>
            <Link to={url}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={print}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                />
              </Button>
            </Link>
            <Link to="/sales/tickets">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12">
          <div className="overflow-auto">
            <div className="rounded-xl border border-blancoBox p-4">
              <SelectsQuoteShow data={ticketSale?.data} />
            </div>

            <div className="my-6 grid w-full grid-cols-12 gap-2 px-9">
              <div className="col-span-2 flex items-center justify-start gap-x-2 pt-2">
                <Checkbox
                  className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                  checked={isShipping}
                  onCheckedChange={(e) => {
                    setIsShipping(e);
                  }}
                  disabled={true}
                />
                <label className="text-[11px] font-light text-grisHeading">
                  Envio
                </label>
              </div>
            </div>

            <div>
              <div className="mt-6">
                <QuoteTableShow
                  tableData={ticketSale?.data?.slots}
                />
              </div>
              <TotalShow data={ticketSale?.data} />
            </div>
          </div>

          <div className="flex">
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            ></StatusInformation>
          </div>
        </div>
     </WrappedMain>
  );
};

export default TicketDetails;
