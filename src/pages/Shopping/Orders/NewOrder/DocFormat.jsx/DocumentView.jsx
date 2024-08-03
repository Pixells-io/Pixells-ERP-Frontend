import React from "react";
import { useParams } from 'react-router-dom';
import Header from "../Components/Header";
import Actions from "../Components/Actions";
import DocumentFormat from "@/components/Document/DocFormat";
import { getDocumentInfo,getDocumentItems } from "../utils";

const DocumentPDF = () => {
  const { type } = useParams();

  const documentInfo = getDocumentInfo();
  const items = getDocumentItems();
 
  const getTitle = "Documento";
  
  const handleConvert = () => {
    console.log("Convirtiendo documento de tipo:", type);
  };

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        {/*ACTIONS SECTION */}
        <Actions documentType={type} onConvert={handleConvert} />
        {/* CONTENT */}
        <div className="flex flex-col items-center justify-center overflow-auto">
          <div className="overflow-auto">
            <DocumentFormat DocumentType={type}
            documentInfo={documentInfo}
            items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPDF;