import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import Actions from "../Components/Actions";
import DocumentFormat from "@/components/Document/DocFormat";
import { getDocumentInfo, getDocumentItems } from "../utils";

const DocumentPDF = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState(type);

  const documentInfo = getDocumentInfo();
  const items = getDocumentItems();
  
  const getTitle = `Documento: ${documentType}`;
  
  useEffect(() => {
    setDocumentType(type);
  }, [type]);

  const handleConvert = (convertTo) => {
    setDocumentType(convertTo);
  };
  
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        {/*ACTIONS SECTION */}
        <Actions onConvert={handleConvert} />
        {/* CONTENT */}
        <div className="flex flex-col items-center justify-center overflow-auto">
          <div className="overflow-auto">
            <DocumentFormat 
              documentType={documentType}
              documentInfo={documentInfo}
              items={items} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPDF;