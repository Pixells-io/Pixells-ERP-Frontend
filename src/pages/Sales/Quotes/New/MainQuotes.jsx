import React, { useState } from "react";
import CardCarousel from "../../Components/CardCarousel";
import SelectsQuote from "../../Components/SelectGroup";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Form, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { chevronBack,chevronForward } from "ionicons/icons";
import SelectDetails from "../../Components/SelectDetails";

const MainQuotes = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/sales/quotes");
  };
  const [items, setItems] = useState([]);
  const [isEditable, setisEditable] = useState(true);

  const [subtotal, setSubTotal] = useState(0);
  const handleTotalChange = (newSubtotal) => {
    setSubTotal(newSubtotal);
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
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Invoice - General</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COTIZACIONES
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nueva Cotización
          </p>
          <div className="flex justify-end">
            <CardCarousel />
          </div>
        </div>
        {/* content */}
        <div className="space-y-3 overflow-auto">
          <Form onSubmit={handleSubmit}>
            <div className="flex h-full flex-col space-y-6">
              <SelectsQuote isEditable={isEditable}/>
              <div className="mt-6 rounded-xl bg-white p-4">
                <SelectDetails isEditable={isEditable}/>
                <QuoteTable
                  initialItems={items}
                  setItems={setItems}
                  isEditable={isEditable}
                  setTotalChanges={handleTotalChange}
                />
              </div>
            </div>
            <div className=""></div>
            <Total subtotal={subtotal} />
            <div className="flex justify-end">
        <StatusInformation
          status={"inProgress"}
          applyFunction={handleSubmit}
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <Button
            type="button"
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
    </div>
  );
};

export default MainQuotes;
