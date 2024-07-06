import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

const TableForm = () => {
  const columns = [
    {
      Key: "cuenta",
      label: "Cuenta Contable",
      placeholder: "Seleccionar",
    },
    {
      Key: "cliente",
      label: "Cliente/Proveedor",
      placeholder: "Buscar",
    },
    {
      Key: "documento",
      label: "No. de Documento",
      placeholder: "Ingrese",
    },
    {
      Key: "descripcion",
      label: "Descripcion",
      placeholder: "Ingrese",
    },
    {
      Key: "centro",
      label: "Centro de costos",
      placeholder: "Seleccionar",
    },
    {
      Key: "debito",
      label: "Débito",
      placeholder: "0",
    },
    {
      Key: "credito",
      label: "Crédito",
      placeholder: "0",
    },
  ];

  const [rows, setRows] = useState([createEmptyRow(1)]);

  function createEmptyRow(id) {
    const row = { id };
    columns.forEach((col) => (row[col.key] = ""));
    return row;
  }

  const handleInputChange = (rowId, colKey, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, [colKey]: value } : row,
      ),
    );
  };

  const addRow = () => {
    setRows([...rows, createEmptyRow(rows.length + 1)]);
  };

  return (
    <div className="w-50 h-full overflow-auto rounded-xl bg-white p-7">
      <Table>
        <TableHeader>
          <TableRow className="text-sm items-center border-b-primario border-b-8">
            {columns.map((col) => (
              <TableHead key={col.key}>{col.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => (
                <TableCell key={col.key}>
                  <Input
                    className="border-none"
                    placeholder={col.placeholder}
                    value={row[col.key]}
                    onChange={(e) =>
                      handleInputChange(row.id, col.key, e.target.value)
                    }
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
    
      </Table>
      <div className="absolute bottom-4">
        <button 
          onClick={addRow}
          className="flex items-center justify-center rounded-full bg-primario-500 p-2 text-black hover:bg-primario-600 focus:outline-none focus:ring-2 focus:ring-primario-500 focus:ring-offset-2"
        >
          <IonIcon icon={addCircleOutline} className="bg-primario-500"size="small" />
        </button>
      </div>
     
    </div>
  );
};

export default TableForm;
