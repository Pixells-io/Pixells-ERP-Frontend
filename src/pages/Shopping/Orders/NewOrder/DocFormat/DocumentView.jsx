import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import DocumentFormat from "@/components/Document/DocFormat";
import { getDocumentInfo, getDocumentItems } from "../utils";
import ConversionButtons from "../Components/DocumentButton";

const DocumentPDF = () => {
  const { type, id } = useParams();
  const [documentType, setDocumentType] = useState(type);
  const [notFound, setNotFound] = useState(false);
  const documentInfo=getDocumentInfo();
  const Items=getDocumentItems();


  const getTitle = `Documento: ${documentType} ${id}`;

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
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

export default DocumentPDF;
