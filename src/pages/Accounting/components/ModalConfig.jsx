import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AddConfig = () => {
  const fields = [
    { name: "factura", label: "Factura" },
    { name: "ticket", label: "Ticket de venta" },
    { name: "fcompra", label: "Factura de Compra" },
    { name: "rcaja", label: "Recibo de Caja" },
    { name: "compegreso", label: "Comprobante de egreso" },
    { name: "ndebito", label: "Nota de  débito" },
    { name: "ncredito", label: "Nota de crédito" },
  ];

  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map((field) => [field.name, ""])),
  );

  const [checkboxes, setCheckboxes] = useState(
    Object.fromEntries(fields.map((field) => [field.name, false])),
  );

  const handleSelectChange = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked, name) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted data:", { ...formData, ...checkboxes });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8 rounded-full border border-[#44444F] bg-inherit px-4 text-xs font-light text-[#44444F] hover:bg-inherit">
          Configurar
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold text-grisHeading">
            Configuración de Centros de Costos
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Table className="min-w-full overflow-auto">
            <TableHeader className="sticky top-0">
              <TableRow>
                <TableHead className="font-roboto text-sm font-medium text-grisText">
                  Tipo de cuenta
                </TableHead>
                <TableHead className="font-roboto text-sm font-medium text-grisText">
                  Centro de costo
                </TableHead>
                <TableHead className="font-roboto text-sm font-medium text-grisText">
                  Obligatorio
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field) => (
                <TableRow key={field.name}>
                  <TableCell>
                    <Label
                      htmlFor={field.name}
                      className="font-roboto text-sm font-normal text-grisText"
                    >
                      {field.label}
                    </Label>
                  </TableCell>
                  <TableCell className="text-center">
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange(value, field.name)
                      }
                      defaultValue={formData[field.name]}
                    >
                      <SelectTrigger className="rounded-md">
                        <SelectValue placeholder="Seleccione una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opcion1">Opción 1</SelectItem>
                        <SelectItem value="opcion2">Opción 2</SelectItem>
                        <SelectItem value="opcion3">Opción 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <label className="flex cursor-pointer items-center">
                        <div className="relative">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checkboxes[field.name]}
                            onChange={(e) =>
                              handleCheckboxChange(e.target.checked, field.name)
                            }
                          />
                          <div
                            className={`block h-6 w-10 rounded-full ${
                              checkboxes[field.name]
                                ? "bg-primario"
                                : "bg-gray-300"
                            }`}
                          ></div>
                          <div
                            className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                              checkboxes[field.name]
                                ? "translate-x-4 transform"
                                : ""
                            }`}
                          ></div>
                        </div>
                      </label>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="h-9 rounded-lg bg-primarioBotones px-8"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddConfig;
