import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EntrySlotModal from "../Modal/SlotsModal";

const initialRow = {
  idAux: 1,
  articleNumber: "",
  description: "",
  expectedQuantity: 10,
  receivedQuantity: "",
  unitPrice: 0,
  total: 120,
  ubication: null,
};

const ubications = [
  {
    id: 1,
    name: "Almacen PM",
  },
  {
    id: 2,
    name: "Almace MP",
  },
];

const TableForm = ({products, tableData, setTableData, isEditable }) => {
  useEffect(() => {
    setTableData([initialRow]);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleAddRow = (e) => {
    e.preventDefault();
    setTableData((prevData) => [
      ...prevData,
      { ...initialRow, idAux: getUltimateRowId() + 1 },
    ]);
  };

  const handleInputChange = useCallback((rowIndex, accessorKey, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex ? { ...item, [accessorKey]: value } : item,
      ),
    );
  }, []);
  const handleSelectChange = (rowIndex, field, value) => {
    setTableData(prevData => {
      const newData = [...prevData];
      if (field === 'description') {
        const selectedProduct = products.find(product => product.id.toString() === value);
        if (selectedProduct) {
          newData[rowIndex] = {
            ...newData[rowIndex],
            articleNumber: selectedProduct.id,
            description: selectedProduct.name,
            unitPrice:selectedProduct.price
          };
        }
      }
      return newData;
    });
  };

  const handleDataInRow = useCallback((data, rowIndex) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              ubication_id: data,
            }
          : item,
      ),
    );
  }, []);

  const deleteRowId = (id) => {
    if (tableData.length == 1) return;
    const auxRowDelete = tableData.filter((row) => row.idAux !== id);
    setTableData(auxRowDelete);
  };

  const getUltimateRowId = () => {
    if (tableData.length > 0) {
      return tableData[tableData.length - 1].idAux;
    }
    return 0;
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "articleNumber",
        header: "Numero Artículo",
        cell: ({ row, rowIndex }) => (
          <Input
            className="border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
            name={`article-number-${rowIndex}`}
            value={row?.articleNumber}
            placeholder="Ingrese"
            type="number"
            onChange={(e) =>
              handleInputChange(rowIndex, "articleNumber", e.target.value)
            }
            readOnly
          />
        ),
      },
      {
        accessorKey: "description",
        header: "Descripción",
        cell: ({ row, rowIndex }) => (
          <Select
          value={row.articleNumber.toString()}
          onValueChange={(value) => handleSelectChange(rowIndex, 'description', value)}
        >
          <SelectTrigger className="border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] rounded-lg border text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
          >
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            {Array.isArray(products) && products.map((product) => (
              <SelectItem
                key={product.id}
                value={product.id.toString()}
              >
                {product.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        ),
      },
      {
        accessorKey: "expectedQuantity",
        header: "Cantidad esperada",
        cell: ({ row, rowIndex }) => <div>{row?.expectedQuantity}</div>,
      },
      {
        accessorKey: "receivedQuantity",
        header: "Recibido",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className={`border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones ${
              row?.expectedQuantity == row?.receivedQuantity
                ? "text-[#00A259]"
                : "text-[#D7586B]"
            }`}
            name={`received-quantity-${rowIndex}`}
            value={row?.receivedQuantity}
            placeholder="Ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "receivedQuantity", e.target.value)
            }
            disabled={!isEditable}
          />
        ),
      },
      {
        accessorKey: "unitPrice",
        header: "Precio Unitario",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className="border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
            name={`cost-subProduct-${rowIndex}`}
            value={row?.unitPrice}
            placeholder="Ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "unitPrice", e.target.value)
            }
            disabled={!isEditable}
          />
        ),
      },
      {
        accessorKey: "total",
        header: "Total",
        cell: ({ row, rowIndex }) => <div>{row.total}</div>,
      },
      {
        accessorKey: "slots",
        header: "Lotes",
        cell: ({ row, rowIndex }) => ( <div>
          <button onClick={() => setIsModalOpen(true)}  className={"rounded-lg hover:bg-[#ACEED0] bg-[#E0E0E0] px-4 py-2"}>Gestionar</button>
          <EntrySlotModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            productData={[]}
            lotData={[]}
            assignmentData={[]}
           
          />
        </div>
        ),
      },
      {
        accessorKey: "ubication_id",
        header: "Ubicación",
        cell: ({ row, rowIndex }) => (
          <div className="flex items-center justify-between gap-x-2">
            <Select
              name={`selectComponent-ubication-${rowIndex}`}
              className="border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] rounded-lg border text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
              onValueChange={(value) => handleDataInRow(value, rowIndex)}
              value={row?.ubication_id}
              disabled={!isEditable}
            >
              <SelectTrigger className="rounded-lg border border-gris2-transparent text-xs font-light text-black placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                {ubications.map((ubication, index) => (
                  <SelectItem key={`ubication-${index}`} value={ubication.id}>
                    {ubication.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {isEditable && (
              <button type="button" onClick={() => deleteRowId(row.idAux)}>
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                ></IonIcon>
              </button>
            )}
          </div>
        ),
      },
    ],
    [handleInputChange, deleteRowId, isEditable],
  );
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="mb-2 rounded-xl h-[500px] overflow-auto">
      <div className="">
        <Table>
          <TableHeader >
            <TableRow className="border-b-2 border-b-primario text-xs font-normal text-grisText">
              {columns.map((column) => (
                <TableHead key={column.accessorKey}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="text-sm font-normal text-[#44444F]"
              >
                {columns.map((column) => (
                  <TableCell key={column.accessorKey}>
                    {column.cell({
                      row,
                      rowIndex: (currentPage - 1) * itemsPerPage + rowIndex,
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {isEditable && (
      <div className="mt-4 flex items-center justify-between">
        <IonIcon
          icon={addCircle}
          size="small"
          className="cursor-pointer text-primario"
          onClick={handleAddRow}
        />
        
       <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 rounded-full bg-transparent p-1"
          >
            <IonIcon
              icon={chevronBack}
              size="small"
              className="text-primarioBotones"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 rounded-full bg-transparent p-1"
          >
            <IonIcon
              icon={chevronForward}
              size="small"
              className="text-primarioBotones"
            />
          </Button>
        </div>
      </div>
    )}
    </div>
  );
};

export default TableForm;
