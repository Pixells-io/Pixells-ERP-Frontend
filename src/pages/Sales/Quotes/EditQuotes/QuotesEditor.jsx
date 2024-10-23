import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Link, useLoaderData } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  closeCircle,
  copy,
  print,
} from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import SelectsQuoteShow from "../../Ticket/EditTicket/Components/SelectsQuoteShow";
import QuoteTableShow from "../../Components/QuoteTableShow";
import TotalShow from "../../Components/TotalSectionShow";
import { WrappedMain } from "@/layouts/Masters/WrappedMain/WrappedMain";
import NavigationHeader from "@/components/navigation-header";

const QuotesDetails = () => {

  const quoteSale = {
    "code": 201,
    "message": "The query was created successfully",
    "data": {
      "id": 13,
      "order_id": null,
      "price_list": "Lista de Agustin",
      "seller": {
        "img": "http://demoback.pixells.io/storage/BT9kgdWc9GgqSicKdSpi9orXHS9oU0Mruffi1CJk.png",
        "name": "Luis Daniel Rios"
      },
      "creator": {
        "img": "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
        "name": "Developer Pixells"
      },
      "client": "rtrt edit edit",
      "expiration_date": "31 Dec 1969",
      "comments": "asdasd",
      "status": "Creada",
      "subtotal": "6,591.00",
      "shipping": "0.00",
      "discount": "659.10",
      "taxes": "949.10",
      "total": "6,881.00",
      "slots": [
        {
          "id": 17,
          "type": {
            "id": 9,
            "name": "SERVICIO DE PRUEBA",
            "description": "GARANTIA",
            "category_id": "1",
            "position_id": null,
            "type": "0",
            "color": "#743474",
            "icon": null,
            "price": "345",
            "created_at": "2024-10-03T13:51:10.000000Z",
            "updated_at": "2024-10-03T13:51:10.000000Z"
          },
          "name": "SERVICIO DE PRUEBA",
          "quantity": "1",
          "delivered": "0",
          "return": "0",
          "shipping_date": "03 Oct 2024",
          "price": "$ 0.00",
          "discount": "$ 659.10",
          "tax": "$ 0.00",
          "total": "$ 6,881.00"
        },
        {
          "id": 18,
          "type": {
            "id": 14,
            "name": "PayRoll",
            "description": "NA",
            "category_id": "1",
            "position_id": null,
            "type": "0",
            "color": "#00ffcc",
            "icon": null,
            "price": "5000",
            "created_at": "2024-10-04T00:06:53.000000Z",
            "updated_at": "2024-10-04T23:19:14.000000Z"
          },
          "name": "PayRoll",
          "quantity": "1",
          "delivered": "0",
          "return": "0",
          "shipping_date": "03 Oct 2024",
          "price": "$ 0.00",
          "discount": "$ 659.10",
          "tax": "$ 0.00",
          "total": "$ 6,881.00"
        },
        {
          "id": 19,
          "type": {
            "id": 13,
            "name": "SERVICIO DE VERIFICACION",
            "description": "VERIFICACION DE SERVICIO",
            "category_id": "1",
            "position_id": null,
            "type": "0",
            "color": "#ff007b",
            "icon": null,
            "price": "1246",
            "created_at": "2024-10-04T00:02:47.000000Z",
            "updated_at": "2024-10-04T00:02:47.000000Z"
          },
          "name": "SERVICIO DE VERIFICACION",
          "quantity": "1",
          "delivered": "0",
          "return": "0",
          "shipping_date": "03 Oct 2024",
          "price": "$ 0.00",
          "discount": "$ 659.10",
          "tax": "$ 0.00",
          "total": "$ 6,881.00"
        }
      ]
    }
  };

  const url = "/sales/quotes/document/" + quoteSale?.data?.id;
  const [isShipping, setIsShipping] = useState(
    !(quoteSale?.data?.shipping == "0.00"),
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
          <p className="mb-6 font-poppins text-[20px] font-bold text-[#44444F]">
            Consultando Cotización: { quoteSale?.data?.id }
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
            <Link to="/sales/orders">
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
              <SelectsQuoteShow data={quoteSale?.data} />
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
                  tableData={quoteSale?.data?.slots}
                />
              </div>
              <TotalShow data={quoteSale?.data} />
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

export default QuotesDetails;
