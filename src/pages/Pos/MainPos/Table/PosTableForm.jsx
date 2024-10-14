import React, { useMemo, useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  closeCircle,
  removeCircleOutline,
} from "ionicons/icons";
import { useParams } from "react-router-dom";
import ModalItemGranel from "../Modal/ModalItemGranel";
import { flexRender, useReactTable } from "@tanstack/react-table";

const PosTableForm = ({ tableData, setTotalProducts, setProducts }) => {
  const [modalItemGranel, setModalItemGranel] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  const [indexProductSelect, setIndexProductSelec] = useState(null);

  const tablePosRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const TotalP = tableData.reduce(
      (sum, row) =>
        sum +
        (parseFloat(
          (Number(row?.price) + calculateIva(row?.price)) * row?.quantity,
        ) || 0),
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

  const incrementProduct = (event, index) => {
    event.stopPropagation();
    const updateProducts = tableData.map((product, index_p) => {
      if (index_p == index) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  const decrementProduct = (event, index) => {
    event.stopPropagation();
    const updateProducts = tableData.map((product, index_p) => {
      if (index_p == index && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  const openModalGranel = (event, index, isGranel, isSelected) => {
    if (!isGranel || !isSelected) {
      return;
    } else {
      event.stopPropagation();
      setIndexProductSelec(index);
      let productFind = tableData.find((product, index_p) => index_p == index);
      setProductSelect(productFind);
      setModalItemGranel(true);
    }
  };

  const editProductGranel = (newProduct) => {
    const updateProducts = tableData.map((product, index_p) => {
      if (index_p == indexProductSelect) {
        return {
          ...newProduct,
        };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  const calculateIva = (price) => {
    return Number(price) * 0.16;
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
        accessorKey: "quantity",
        header: () => <div className="w-[120px] text-center">CANTIDAD</div>,
        cell: ({ row, rowIndex }) => (
          <div className="flex w-fit min-w-[120px] items-center justify-center gap-x-2">
            {row?.isSelected && !row?.isGranel && (
              <button
                type="button"
                onClick={(event) => decrementProduct(event, rowIndex)}
                className="flex"
              >
                <IonIcon
                  icon={removeCircleOutline}
                  className="h-7 w-7 cursor-pointer text-[#5B89FF]"
                ></IonIcon>
              </button>
            )}

            <p
              onClick={(event) =>
                openModalGranel(event, rowIndex, row?.isGranel, row?.isSelected)
              }
              className="min-w-12 rounded-3xl border border-[#44444F] py-0.5 text-center text-xs font-light text-[#44444F] hover:cursor-pointer"
            >
              {row?.quantity}
            </p>
            {row?.isSelected && !row?.isGranel && (
              <button
                type="button"
                onClick={(event) => incrementProduct(event, rowIndex)}
                className="flex"
              >
                <IonIcon
                  icon={addCircleOutline}
                  className="h-7 w-7 cursor-pointer text-[#5B89FF]"
                ></IonIcon>
              </button>
            )}
          </div>
        ),
      },
      {
        id: "price",
        header: "PRECIO",
        accessorKey: "price",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">
            ${(row?.price).toFixed(2)}
          </p>
        ),
      },
      {
        id: "discount",
        header: "DESCUENTO",
        accessorKey: "discount",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">
            ${(row?.discount).toFixed(2)}
          </p>
        ),
      },
      {
        id: "iva",
        header: "IMPUESTO",
        accessorKey: "iva",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">
            (IVA 16%) ${calculateIva(row?.price).toFixed(2)}
          </p>
        ),
      },
      {
        id: "subTotal",
        header: "SUBTOTAL",
        accessorKey: "subTotal",
        cell: ({ row, rowIndex }) => (
          <div className="flex items-center justify-between">
            <p className="text-xs font-normal text-[#44444F]">
              ${parseFloat(row?.price * row?.quantity).toFixed(2) || 0}
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
    [deleteProduct, incrementProduct, decrementProduct],
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

  const table = useReactTable({
    columns,
  });

  return (
    <div
      ref={tablePosRef}
      className="h-full overflow-auto rounded bg-[#FFFFFF] px-2"
    >
      <ModalItemGranel
        modal={modalItemGranel}
        setModal={setModalItemGranel}
        functionModal={editProductGranel}
        product={productSelect}
      />
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-sm font-semibold text-grisText"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
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
