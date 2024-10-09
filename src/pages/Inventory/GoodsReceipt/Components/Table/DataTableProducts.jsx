import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";
const  ProductsTable = ({ data }) => {
  const headers = [
    "Item", "Código", "Valor", "Desc %", "Impuesto", "Cantidad", "Unidad", "Fecha de Entrega", "Total"
  ];

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcula los índices de los elementos que deben mostrarse
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Funciones para cambiar de página
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        {/* Cabecera */}
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead 
                key={index} 
                className="text-center border-b-2 border-[#5B89FF] font-roboto text-sm text-[#696974]"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {/* Cuerpo */}
        <TableBody>
          {currentItems.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-center">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Paginación */}
      <div className="flex justify-end mt-4">
      <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="px-4 py-2  bg-transparent rounded-lg mx-2 disabled:opacity-50"
        >
            <IonIcon
              icon={chevronBack}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
        </button>
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 bg-transparent rounded-lg mx-2 disabled:opacity-50"
        >
           <IonIcon
              icon={chevronForward}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
        </button>
      </div>
    </div>
  );
};

export default ProductsTable;
