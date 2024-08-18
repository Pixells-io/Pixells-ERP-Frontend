import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { useParams} from "react-router-dom";
import DocumentFormat from "@/components/Document/DocFormat";
import { getDocumentInfo,getDocumentItems } from "../utils";
import ConversionButtons from "../DocumentButton";

const InvoicePDF = () => {
  const { id } = useParams();
  const [documentType,setDocumentType]=useState("factura");
  const documentInfo=getDocumentInfo();
  const Items=getDocumentItems();

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
            FACTURAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Factura: {id}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <ConversionButtons
            onConvert={(convertTo) => setDocumentType(convertTo)}
            documentType={documentType}
          />
          <div className="flex-grow flex justify-end">
            
          </div>
        </div>
        {/* CONTENT */}
        <div className="flex flex-col items-center justify-center overflow-auto">
          <div className="overflow-auto">
            <DocumentFormat
              documentType={documentType}
              documentInfo={documentInfo}
              items={Items}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePDF;
