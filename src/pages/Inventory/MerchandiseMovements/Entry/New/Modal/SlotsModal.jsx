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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ITEMS_PER_PAGE = 5;

const EntrySlotModal = ({ isOpen, onClose,product, lotData, assignmentData: initialAssignmentData, onUpdateBatches, location }) => {
  const [assignmentData, setAssignmentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextAuxId, setNextAuxId] = useState(1);

  useEffect(() => {
    if (initialAssignmentData && initialAssignmentData.length > 0) {
      const dataWithAuxIds = initialAssignmentData.map((item, index) => ({
        ...item,
        auxId: index + 1
      }));
      setAssignmentData(dataWithAuxIds);
      setNextAuxId(dataWithAuxIds.length + 1);
    } else {
      setAssignmentData([{ id: null, quantity: "", batch: "", ubication_id: "", auxId: 1 }]);
      setNextAuxId(2);
    }
  }, [initialAssignmentData]);

  const addNewRow = () => {
    const lastQuantity = assignmentData.length > 0 ? assignmentData[assignmentData.length - 1].quantity : "";
    const lastBatch = assignmentData.length > 0 ? assignmentData[assignmentData.length - 1].batch : "";

    setAssignmentData([...assignmentData, { 
      id: null, 
      quantity: lastQuantity, 
      batch: lastBatch,
      ubication_id: "",
      auxId: nextAuxId
    }]);
    setNextAuxId(nextAuxId + 1);
  };

  const handleInputChange = (auxId, field, value) => {
    const newData = assignmentData.map(row => 
      row.auxId === auxId ? { ...row, [field]: value } : row
    );
    setAssignmentData(newData);
  };

  const handleDataInRow = (value, rowIndex) => {
    const newData = [...assignmentData];
    newData[rowIndex].ubication_id = value;
    setAssignmentData(newData);
  };

  const deleteRowId = (auxId) => {
    if (assignmentData.length > 1) {
      setAssignmentData(assignmentData.filter(row => row.auxId !== auxId));
    }
  };

  const handleSave = () => {
    const updatedBatches = assignmentData.map(batch => ({
      id: batch.id,
      quantity: batch.quantity !== "" ? parseInt(batch.quantity) : 0, // Ensure quantity is a number
      batch: parseInt(batch.batch)
    }));
    onUpdateBatches(updatedBatches);
    onClose();
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
    { key: 'batch', label: 'Lote Interno' },
    { key: 'quantity', label: 'Cantidad' },
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
          <h2 className="text-base font-semibold">{lotData.name}</h2>
          
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
                <TableCell>{lotData.articleNumber || "0"}</TableCell>
                <TableCell>{lotData.description || "Ningún Producto"}</TableCell>
                <TableCell>{lotData.expectedQuantity || "0"}</TableCell>
                <TableCell>{lotData.received || "0"}</TableCell>
                <TableCell>${lotData.unitPrice || "$0"}</TableCell>
                <TableCell>{location.find(p => p.id === parseInt(lotData.ubication_id))?.name || "Ninguna"}</TableCell>
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
              {paginatedData.map((row, rowIndex) => (
                <TableRow key={row.auxId} className="border-b border-gray-100">
                  <TableCell><Checkbox /></TableCell>
                  {slotHeaders.slice(1, -2).map((header) => (
                    <TableCell key={header.key}>
                      <InputForm
                        value={row[header.key] || ""}
                        onChange={(e) => handleInputChange(row.auxId, header.key, e.target.value)}
                      />
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="flex items-center justify-between gap-x-2">
                      <Select
                        name={`selectComponent-ubication-${rowIndex}`}
                        className="border-gris2-transparent h-auto w-full max-w-[140px] rounded-lg border bg-inherit p-1 font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                        onValueChange={(value) => handleDataInRow(value, rowIndex)}
                        value={row?.ubication_id}
                      >
                        <SelectTrigger className="border-gris2-transparent h-auto w-full max-w-[140px] rounded-lg border bg-inherit p-1 font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                          <SelectValue placeholder="Ubicación" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.isArray(location) &&
                            location.map((location) => (
                              <SelectItem
                                key={location.id}
                                value={location.id.toString()}
                              >
                                {location.name}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <Button
                        type="button"
                        className="h-7 w-7 bg-transparent p-0 hover:bg-transparent"
                        onClick={() => deleteRowId(row.auxId)}
                      >
                        <IonIcon
                          icon={closeCircle}
                          size="small"
                          className="cursor-pointer text-grisDisabled"
                        />
                      </Button>
                    </div>
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
          
           <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EntrySlotModal;