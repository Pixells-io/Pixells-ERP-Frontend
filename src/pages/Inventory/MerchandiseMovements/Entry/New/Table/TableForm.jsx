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
import { Checkbox } from "@/components/ui/checkbox";

const TableForm = ({
  products,
  locations,
  tableData,
  setTableData,
  isEditable,
}) => {
  useEffect(() => {
    setTableData(tableData);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  const handleOpenModal = (row) => {
    if (row.isBatchManagementChecked) {
      const selectedProduct = products.find(
        (product) => product.id.toString() === row.articleNumber.toString()
      );
      
      setSelectedRow({
        ...row,
        description: selectedProduct ? selectedProduct.name : "Producto no encontrado",
      });
      setIsModalOpen(true);
    }
  };

  const handleCheckboxChange = (rowIndex) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? { ...item, isBatchManagementChecked: !item.isBatchManagementChecked }
          : item
      )
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const handleUpdateBatches = (updatedBatches) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.idAux === selectedRow.idAux
          ? { ...item, batches: updatedBatches }
          : item
      )
    );
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    const newRow = {
      idAux: getUltimateRowId() + 1,
      type: 1,
      articleNumber: "",
      variation: 0,
      variation_id: 0,
      description: "",
      eQuantity: "",
      receivedQuantity: "",
      unitPrice: "",
      total: "",
      batches: [],
      ubication_id: null,
      isBatchManagementChecked: false,
    };
    setTableData((prevData) => [...prevData, newRow]);
  };

  const handleInputChange = useCallback((rowIndex, accessorKey, value) => {
    setTableData((prevData) => {
      const newData = prevData.map((item, index) =>
        index === rowIndex ? { ...item, [accessorKey]: value } : item
      );

      if (accessorKey === "unitPrice" || accessorKey === "receivedQuantity") {
        const unitPrice = parseFloat(newData[rowIndex].unitPrice) || 0;
        const receivedQuantity = parseFloat(newData[rowIndex].receivedQuantity) || 0;
        newData[rowIndex].total = (unitPrice * receivedQuantity).toFixed(2);
      }
      return newData;
    });
  }, []);

  const handleSelectChange = (rowIndex, field, value) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      if (field === "description") {
        const selectedProduct = products.find(
          (product) => product.id.toString() === value
        );
        if (selectedProduct) {
          newData[rowIndex] = {
            ...newData[rowIndex],
            type: 1,
            articleNumber: selectedProduct.id,
            variation: 0,
            description: selectedProduct.name,
            unitPrice: selectedProduct.price,
            total: (selectedProduct.price * newData[rowIndex].receivedQuantity).toFixed(2),
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
          : item
      )
    );
  }, []);

  const deleteRowId = (id) => {
    if (tableData.length === 1) return;
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
            onValueChange={(value) =>
              handleSelectChange(rowIndex, "description", value)
            }
          >
            <SelectTrigger className="border-gris2-transparent h-auto w-full max-w-[140px] rounded-lg border bg-inherit p-1 font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              {Array.isArray(products) &&
                products.map((product) => (
                  <SelectItem key={product.id} value={product.id.toString()}>
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
        cell: ({ row }) => <div>{row?.eQuantity}</div>,
      },
      {
        accessorKey: "batchManagement",
        header: "Gestionar por lotes",
        cell: ({ row, rowIndex }) => (
          <Checkbox
            checked={row.isBatchManagementChecked}
            onCheckedChange={() => handleCheckboxChange(rowIndex)}
          />
        ),
      },
      {
        accessorKey: "receivedQuantity",
        header: "Recibido",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className={`border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones ${
              row?.eQuantity == row?.receivedQuantity
                ? "text-[#00A259]"
                : "text-[#D7586B]"
            }`}
            name={`received-quantity-${rowIndex}`}
            value={row?.receivedQuantity}
            min={"0"}
            step={"0.01"}
            placeholder="Ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "receivedQuantity", e.target.value)
            }
            disabled={!isEditable}
          />
        ),
      },
      {
        accessorKey: "slots",
        header: "Lotes",
        cell: ({ row }) => (
          <div>
            <button
              onClick={() => handleOpenModal(row)}
              className="rounded-lg bg-[#E0E0E0] px-4 py-2 hover:bg-[#ACEED0]"
              disabled={!row.isBatchManagementChecked}
            >
              Gestionar
            </button>
            {isModalOpen && selectedRow && selectedRow.isBatchManagementChecked && (
              <EntrySlotModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                description={selectedRow.description}
                productData={selectedRow}
                lotData={selectedRow}
                assignmentData={selectedRow.batches}
                onUpdateBatches={handleUpdateBatches}
                location={locations}
              />
            )}
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
              className="border-gris2-transparent h-auto w-full max-w-[140px] rounded-lg border bg-inherit p-1 font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
              onValueChange={(value) => handleDataInRow(value, rowIndex)}
              value={row?.ubication_id}
              disabled={!isEditable}
            >
              <SelectTrigger className="border-gris2-transparent h-auto w-full max-w-[140px] rounded-lg border bg-inherit p-1 font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                {Array.isArray(locations) &&
                  locations.map((location) => (
                    <SelectItem
                      key={location.id}
                      value={location.id.toString()}
                    >
                      {location.name}
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
    [handleInputChange, deleteRowId, isEditable, handleOpenModal, handleCheckboxChange, handleDataInRow]
  );

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex mb-2 flex-col h-[400px] rounded-xl">
      <div className="">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-b-primario text-xs font-normal text-grisText">
              {columns.map((column) => (
                <TableHead key={column.accessorKey}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={row.idAux}
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