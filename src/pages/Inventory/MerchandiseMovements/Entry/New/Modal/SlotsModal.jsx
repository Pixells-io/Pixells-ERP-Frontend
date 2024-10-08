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
import { addCircle, closeCircle } from "ionicons/icons";

const ITEMS_PER_PAGE = 5;

const EntrySlotModal = ({ isOpen, onClose, description, lotData, initialAssignmentData, onUpdateBatches, location }) => {
  const [assignmentData, setAssignmentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextAuxId, setNextAuxId] = useState(1);
  const [totalReceived, setTotalReceived] = useState(0);

  useEffect(() => {
    if (initialAssignmentData && initialAssignmentData.length > 0) {
      const dataWithAuxIds = initialAssignmentData.map((item, index) => ({
        ...item,
        auxId: index + 1
      }));
      setAssignmentData(dataWithAuxIds);
      setNextAuxId(dataWithAuxIds.length + 1);
      updateTotalReceived(dataWithAuxIds);
    } else {
      setAssignmentData([{ id: null, quantity: "", batch: "", auxId: 1 }]);
      setNextAuxId(2);
    }
  }, [initialAssignmentData]);

  const updateTotalReceived = (data) => {
    const total = data.reduce((sum, row) => sum + (parseInt(row.quantity) || 0), 0);
    setTotalReceived(total);
  };

  const addNewRow = () => {
    const newRow = { id: null, quantity: "", batch: "", auxId: nextAuxId };
    setAssignmentData([...assignmentData, newRow]);
    setNextAuxId(nextAuxId + 1);
  };

  const handleInputChange = (auxId, field, value) => {
    const newData = assignmentData.map(row => 
      row.auxId === auxId ? { ...row, [field]: value } : row
    );
    setAssignmentData(newData);
    updateTotalReceived(newData);
  };

  const handleDeleteRow = (auxId) => {
    if (assignmentData.length <= 1) {
      return;
    }
    const newData = assignmentData.filter(row => row.auxId !== auxId);
    setAssignmentData(newData);
    updateTotalReceived(newData);
  };

  const handleSave = () => {
    const updatedBatches = assignmentData.map(batch => ({
      id: batch.id,
      quantity: batch.quantity !== "" ? parseInt(batch.quantity) : 0,
      batch: batch.batch
    }));
    onUpdateBatches(updatedBatches);
    onClose();
  };

  const totalPages = Math.ceil(assignmentData.length / ITEMS_PER_PAGE);
  const paginatedData = assignmentData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const articleHeaders = [
    { key: 'articleNumber', label: 'Número Artículo' },
    { key: 'expectedQuantity', label: 'Cantidad Esperada' },
    { key: 'received', label: 'Recibido' },
    { key: 'unitPrice', label: 'Precio Unitario' },
    { key: 'location', label: 'Ubicación' },
  ];

  const slotHeaders = [
    { key: 'batch', label: 'Lote Interno' },
    { key: 'quantity', label: 'Cantidad' },
    { key: 'actions', label: 'Acciones', width: '40px' }
  ];

  const getQuantityIndicator = () => {
    const expectedQuantity = parseInt(lotData.eQuantity) || 0;
    if (totalReceived === expectedQuantity) {
      return <span className="ml-2 text-sm text-green-600">✓ Cantidad completa</span>;
    } else if (totalReceived > expectedQuantity) {
      return <span className="ml-2 text-sm text-red-600">X Cantidad Sobrepasada</span>;
    }
    return null;
  };

  const isSaveDisabled = totalReceived > (parseInt(lotData.eQuantity) || 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 sm:max-w-[800px]">
        <DialogHeader className="border-b border-gray-200 bg-white p-4">
          <DialogTitle className="font-poppins text-lg font-semibold">
            Gestionar Lote de Entrada
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 p-4">
          <h2 className="text-base font-semibold">{description}</h2>
          
          {/* Article Details Table */}
          <Table>
            <TableHeader>
              <TableRow className="whitespace-nowrap border-b border-[#5B89FF] text-center">
                {articleHeaders.map((header) => (
                  <TableHead key={header.key} className={header.width ? `w-[${header.width}]` : ''}>
                    {header.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{lotData.articleNumber || "0"}</TableCell>
                <TableCell>{lotData.eQuantity || "0"}</TableCell>
                <TableCell>
                  {totalReceived}
                  {getQuantityIndicator()}
                </TableCell>
                <TableCell>${lotData.unitPrice || "0"}</TableCell>
                <TableCell>{location.find(p => p.id === parseInt(lotData.ubication_id))?.name || "Ninguna"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h3 className="text-base font-semibold">Asignar Lotes</h3>
         
          {/* Slot Table */}
          <Table>
            <TableHeader>
              <TableRow className="whitespace-nowrap border-b border-[#5B89FF] text-center">
                {slotHeaders.map((header) => (
                  <TableHead key={header.key}>{header.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow key={row.auxId} className="border-b border-gray-100">
                  {slotHeaders.map((header) => (
                    <TableCell key={header.key}>
                      {header.key !== 'actions' ? (
                        <InputForm
                        className={"w-[100px]"}
                          value={row[header.key] || ""}
                          onChange={(e) => handleInputChange(row.auxId, header.key, e.target.value)}
                        />
                      ) : (
                        <Button
                          type="button"
                          className="bg-transparent p-0 hover:bg-transparent"
                          onClick={() => handleDeleteRow(row.auxId)}
                        >
                          <IonIcon size="small" icon={closeCircle} className="cursor-pointer text-grisDisabled"/>
                        </Button>
                      )}
                    </TableCell>
                  ))}
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
          
            <Button 
              className="bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed" 
              onClick={handleSave}
              disabled={isSaveDisabled}
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EntrySlotModal;