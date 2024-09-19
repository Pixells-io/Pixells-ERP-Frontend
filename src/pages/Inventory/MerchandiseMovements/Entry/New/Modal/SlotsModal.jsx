import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";
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

const EntrySlotModal = ({
  isOpen,
  onClose,
  productData,
  lotData,
  assignmentData,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <div className={"border-b"}>
        <DialogHeader >
          <DialogTitle className="flex items-center justify-between ">
            <span className="pb-4">Gestionar Lote de Entrada</span>
          </DialogTitle>
        </DialogHeader>
        </div>
        <div className="space-y-6">
          {/* Product Information */}
          <div className="flex items-center space-x-4">
            <h2 className="text-[14px] font-poppins font-semibold">{productData.name}</h2>
          </div>

          {/* Lot Details Table */}
          <div>
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-b-primario text-xs font-normal text-grisText">
                  <TableHead className="w-[40px]"></TableHead>
                  <TableHead>Numero Artículo</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Cantidad Esperada</TableHead>
                  <TableHead>Recibido</TableHead>
                  <TableHead>Precio Unitario</TableHead>
                  <TableHead>Ubicación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-1 border-b">
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{lotData.articleNumber}</TableCell>
                  <TableCell>{lotData.description}</TableCell>
                  <TableCell>{lotData.expectedQuantity}</TableCell>
                  <TableCell>{lotData.received}</TableCell>
                  <TableCell>{lotData.unitPrice}</TableCell>
                  <TableCell>{lotData.location}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Lot Assignment Table */}
          <div>
            <h3 className="mb-2 text-[14px] font-poppins font-semibold">Asignar Lotes</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-b-primario text-xs font-normal text-grisText">
                  <TableHead className="w-[40px]"></TableHead>
                  <TableHead>Lote Interno</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Atributo 1</TableHead>
                  <TableHead>Atributo 2</TableHead>
                  <TableHead>Precio Unitario</TableHead>
                  <TableHead>Ubicación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignmentData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{row.internalLot}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.attribute1}</TableCell>
                    <TableCell>{row.attribute2}</TableCell>
                    <TableCell>{row.unitPrice}</TableCell>
                    <TableCell>{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Add New Row Button */}
          <div className="flex justify-start">
            <Button type={"button"} className={"bg-transparent hover:bg-transparent"}>
              <IonIcon
                icon={addCircle}
                size="small"
                className="cursor-pointer text-primario"
              />
            </Button>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
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
