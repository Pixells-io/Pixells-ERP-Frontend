import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import InputForm from "@/components/InputForm/InputForm";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  closeCircle,
  chevronBack,
  chevronForward,
} from "ionicons/icons";

const ITEMS_PER_PAGE = 5;

const EntrySlotModal = ({ isOpen, onClose, productData = {}, lotData = {} }) => {
  const [assignmentData, setAssignmentData] = useState([
    { internalLot: "", quantity: "", attribute1: "", attribute2: "", unitPrice: "", location: "" }
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  const addNewRow = () => {
    setAssignmentData([...assignmentData, { internalLot: "", quantity: "", attribute1: "", attribute2: "", unitPrice: "", location: "" }]);
  };

  const handleInputChange = (index, field, value) => {
    const newData = [...assignmentData];
    newData[index][field] = value;
    setAssignmentData(newData);
  };

  const deleteRow = (index) => {
    if (assignmentData.length > 1) {
      setAssignmentData(assignmentData.filter((_, i) => i !== index));
    }
  };

  const totalPages = Math.ceil(assignmentData.length / ITEMS_PER_PAGE);
  const paginatedData = assignmentData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    if (paginatedData.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [assignmentData, currentPage]);

  const tableHeaders = [
    { key: 'checkbox', label: '', width: '40px' },
    { key: 'articleNumber', label: 'Numero Artículo' },
    { key: 'description', label: 'Descripción' },
    { key: 'expectedQuantity', label: 'Cantidad Esperada' },
    { key: 'received', label: 'Recibido' },
    { key: 'unitPrice', label: 'Precio Unitario' },
    { key: 'location', label: 'Ubicación' },
    { key: 'actions', label: '', width: '40px' }
  ];

  const slotHeaders = [
    { key: 'checkbox', label: '', width: '40px' },
    { key: 'internalLot', label: 'Lote Interno' },
    { key: 'quantity', label: 'Cantidad' },
    { key: 'attribute1', label: 'Atributo 1' },
    { key: 'attribute2', label: 'Atributo 2' },
    { key: 'unitPrice', label: 'Precio Unitario' },
    { key: 'location', label: 'Ubicación' },
    { key: 'actions', label: '', width: '40px' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 sm:max-w-[800px]">
        <DialogHeader className="border-b border-gray-200 bg-white p-4">
          <DialogTitle className="font-poppins text-lg font-semibold">
            Gestionar Lote de Entrada
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 p-4">
          <h2 className="text-base font-semibold">{productData.name || "Aceite Vegetal"}</h2>
          
          <Table>
            <TableHeader>
            <TableRow className="whitespace-nowrap border-b border-[#5B89FF] text-center">
                {tableHeaders.map((header) => (
                  <TableHead key={header.key} className={header.width ? `w-[${header.width}]` : ''}>
                    {header.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>{lotData.articleNumber || "239846"}</TableCell>
                <TableCell>{lotData.description || "Aceite Vegetal"}</TableCell>
                <TableCell>{lotData.expectedQuantity || "10"}</TableCell>
                <TableCell>{lotData.received || "10"}</TableCell>
                <TableCell>{lotData.unitPrice || "$55.00"}</TableCell>
                <TableCell>{lotData.location || "Almacén MP"}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h3 className="text-base font-semibold">Asignar Lotes</h3>
         
            <Table>
              <TableHeader>
                <TableRow className="whitespace-nowrap border-b border-[#5B89FF] text-center">
                  {slotHeaders.map((header) => (
                    <TableHead key={header.key} className={header.width ? `w-[${header.width}]` : ''}>
                      {header.label}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow key={index} className="border-b border-gray-100">
                    <TableCell><Checkbox /></TableCell>
                    {slotHeaders.slice(1, -1).map((header) => (
                      <TableCell key={header.key}>
                        <InputForm
                          value={row[header.key] || ""}
                          onChange={(e) => handleInputChange(index + (currentPage - 1) * ITEMS_PER_PAGE, header.key, e.target.value)}
                        />
                      </TableCell>
                    ))}
                    <TableCell>
                      <Button
                        type="button"
                        className="h-7 w-7 bg-transparent p-0 hover:bg-transparent"
                        onClick={() => deleteRow(index + (currentPage - 1) * ITEMS_PER_PAGE)}
                      >
                        <IonIcon
                          icon={closeCircle}
                          size="small"
                          className="cursor-pointer text-grisDisabled"
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
         

          <div className="flex items-center justify-between">
            <Button
              type="button"
              className="bg-transparent p-0 hover:bg-transparent"
              onClick={addNewRow}
            >
              <IonIcon
                icon={addCircle}
                size="small"
                className="cursor-pointer text-primario"
              />
            </Button>
            <div className="flex space-x-2">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="mr-2 h-7 w-7 rounded-full bg-transparent p-1"
                disabled={currentPage === 1}
              >
                <IonIcon
                  icon={chevronBack}
                  size="small"
                  className="text-primarioBotones"
                />
              </Button>
              <Button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="mr-2 h-7 w-7 rounded-full bg-transparent p-1"
                disabled={currentPage === totalPages}
              >
                <IonIcon
                  icon={chevronForward}
                  size="small"
                  className="text-primarioBotones"
                />
              </Button>
            </div>
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EntrySlotModal;