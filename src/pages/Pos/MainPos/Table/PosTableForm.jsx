import React, { useMemo, useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import { useParams } from "react-router-dom";

const PosTableForm = ({ tableData, setTotalProducts, setProducts }) => {
  const tablePosRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const TotalP = tableData.reduce(
      (sum, row) => sum + (parseFloat(row?.price * row?.quantity) || 0),
      0,
    );

    setTotalProducts(TotalP.toFixed(2));
  }, [tableData]);

  useEffect(() => {
    if (!!tablePosRef.current) {
      tablePosRef.current.scrollTop = tablePosRef.current.scrollHeight;
    }
  }, [tableData]);

  const deleteProduct = (event, index) => {
    event.stopPropagation();
    const updateProducts = tableData.filter((_, index_p) => index_p !== index);
    localStorage.setItem("products-" + id, JSON.stringify(updateProducts));
    setProducts(updateProducts);
  };

  const columns = useMemo(
    () => [
      {
        id: "image",
        header: "",
        accessorKey: "image",
        cell: ({ row }) => (
          <div className="flex justify-center">
            <div className="h-[46px] w-[46px]">
              <img
                loading="lazy"
                width={46}
                className="max-h-[46px] max-w-[46px]"
                src={row?.image}
              />
            </div>
          </div>
        ),
      },
      {
        id: "article",
        header: "ARTICULO",
        accessorKey: "article",
        cell: ({ row }) => (
          <p className="font-poppins text-xs font-medium text-[#44444F]">
            {row?.article}
          </p>
        ),
      },
      {
        id: "sku",
        header: "SKU.",
        accessorKey: "sku",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.sku}</p>
        ),
      },
      {
        id: "description",
        header: "DESCRIPCION",
        accessorKey: "description",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">
            {row?.description}
          </p>
        ),
      },
      {
        id: "quantity",
        header: "CANTIDAD",
        accessorKey: "quantity",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.quantity}</p>
        ),
      },
      {
        id: "price",
        header: "PRECIO",
        accessorKey: "price",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.price}</p>
        ),
      },
      {
        id: "discount",
        header: "DESCUENTO",
        accessorKey: "discount",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.discount}</p>
        ),
      },
      {
        id: "iva",
        header: "IMPUESTO",
        accessorKey: "iva",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.iva}</p>
        ),
      },
      {
        id: "subTotal",
        header: "SUBTOTAL",
        accessorKey: "subTotal",
        cell: ({ row, rowIndex }) => (
          <div className="flex items-center justify-between">
            <p className="text-xs font-normal text-[#44444F]">
              {parseFloat(row?.price * row?.quantity) || 0}
            </p>
            {row?.isSelected && (
              <button
                type="button"
                onClick={(event) => deleteProduct(event, rowIndex)}
              >
                <IonIcon
                  icon={closeCircle}
                  className="h-6 w-6 cursor-pointer text-[#8F8F8F]"
                ></IonIcon>
              </button>
            )}
          </div>
        ),
      },
    ],
    [deleteProduct],
  );

  const selectedRow = (index) => {
    const updateProducts = tableData.map((product, index_p) => {
      if (index_p == index) {
        return {
          ...product,
          isSelected: !product.isSelected,
        };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  return (
    <div
      ref={tablePosRef}
      className="h-full overflow-auto rounded bg-[#FFFFFF] px-2"
    >
      <Table>
        <TableHeader>
          <TableRow className="border-b-2 border-b-primario">
            {columns.map((column) => (
              <TableHead
                key={column.accessorKey}
                className="text-sm font-semibold text-grisText"
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className={`text-sm font-normal text-[#44444F] ${row.isSelected && "bg-primario/25 hover:hover:bg-primario/20"}`}
              onClick={() => selectedRow(rowIndex)}
            >
              {columns.map((column) => (
                <TableCell key={column.accessorKey}>
                  {column.cell({
                    row,
                    rowIndex: rowIndex,
                  })}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PosTableForm;
