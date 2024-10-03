import React, { useState } from "react";
import ActionGroup from "../../Components/ActionsGroup";
import CardCarousel from "../../Components/CardCarousel";
import SelectsQuote from "../../Components/SelectGroup";
import SelectDetails from "../../Components/SelectDetails";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import Total from "@/components/TotalSection/TotalSection";
import { Button } from "@/components/ui/button";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Form, useNavigate, useParams } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

const TicketDetails = () => {
  const { id } = useParams();
  const url = "/sales/tickets/document/" + id;
  const [client, setClient] = useState("opcion1");
  const [rfc, setRFC] = useState("opcion3");
  const [phone, setPhone] = useState("opcion3");
  const [dtcreate, setDtcreate] = useState("opcion1");
  const [dtexpiry, setDtexpiry] = useState("opcion2");
  const [subtotal, setSubTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [isEditable, setisEditable] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleTotalChange = (newSubtotal) => {
    setSubTotal(newSubtotal);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/sales/tickets");
  };

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Invoice - General</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            TICKETS/REMSION
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Consultando Ticket/Remisión: {id}
          </p>
          <div className="flex flex-row">
            <ActionGroup url={url} setisEditable={setisEditable} />
            <CardCarousel />
          </div>
        </div>

        {/* content */}
        <Form className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12">
          <div className="overflow-auto">
            <div className="rounded-xl border border-blancoBox p-4">
              <SelectsQuote
                id={id}
                sl1={client}
                sl2={rfc}
                sl3={phone}
                isEditable={isEditable}
              />
            </div>

            <div>
              <div className="mt-6">
                <QuoteTable
                  initialItems={items}
                  isEditable={isEditable}
                  allProducts={allProducts}
                  setTableData={setTableData}
                  tableData={tableData}
                />
              </div>
              <Total tableData={tableData} comment={""} />
            </div>
          </div>
          
          <div className="flex justify-end">
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Button
                type="button"
                onClick={handleSubmit}
                variant="outline"
                className="w-[120px] rounded-lg border-2 border-primarioBotones text-xs text-primarioBotones hover:text-primarioBotones"
              >
                Save
              </Button>
              <Button
                type="button"
                onClick={() => alert("save")}
                className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
              >
                Save for Aproval
              </Button>
            </StatusInformation>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TicketDetails;
