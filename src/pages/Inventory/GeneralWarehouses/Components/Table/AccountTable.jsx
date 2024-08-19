import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Input } from "@/components/ui/input";

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [tableData, setTableData] = useState(data);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleInputChange = (name, field, value) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.nombre === name ? { ...item, [field]: value } : item,
      ),
    );
  };

  return (
    <div className="flex w-full flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Código de Cuenta</TableHead>
            <TableHead>Nombre de Cuenta</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item, index) => (
            <TableRow key={`${item.nombre}-${index}`}>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>
                <Input
                  name={`codcuenta-${index}`}
                  value={item.codigoCuenta}
                  onChange={(e) =>
                    handleInputChange(
                      item.nombre,
                      "codigoCuenta",
                      e.target.value,
                    )
                  }
                  placeholder={"ingresa"}
                   className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  name={`nomcuenta-${index}`}
                  value={item.nombreCuenta}
                  onChange={(e) =>
                    handleInputChange(
                      item.nombre,
                      "nombreCuenta",
                      e.target.value,
                    )
                  }
                  placeholder={"ingresa"}
                   className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex items-center justify-end space-x-3">
        <Button
          type="button"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-8 w-8 rounded-full bg-gris2 p-2 text-white disabled:opacity-50"
        >
          <IonIcon icon={chevronBack} size="small" />
        </Button>
        <Button
          type="button"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(tableData.length / itemsPerPage)}
          className="h-8 w-8 rounded-full bg-gris2 p-2 text-white disabled:opacity-50"
        >
          <IonIcon icon={chevronForward} size="small" />
        </Button>
      </div>
    </div>
  );
};

export default DataTable;
