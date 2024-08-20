import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";

const TableForm = ({ rows, setRows, columns }) => {

  useEffect(() => {
    setRows([createEmptyRow(1)]);
  }, []);

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

  const getUltimateRowId = () => {
    if (rows.length > 0) {
      return rows[rows.length - 1].id;
    }
    return 0;
  };

  const deleteRowId = (id) => {
    const auxRowDelete = rows.filter((row) => row.id !== id);
    setRows(auxRowDelete);
  };

  const addRow = () => {
    setRows([...rows, createEmptyRow(getUltimateRowId() + 1)]);
  };

  return (
    <div className=" overflow-auto rounded-xl">
      <Table>
        <TableHeader>
          <TableRow className="items-center border-b-8 border-b-primario text-xs whitespace-nowrap">
            {columns.map((col) => (
              <TableHead className={col.class + " text-grisText font-normal"} key={col.key}>
                {col.label}
              </TableHead>
            ))}
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => (
                <TableCell key={col.key} className="p-1">
                  {col.typeColumn == "input" ? (
                    <Input
                      className="border p-1 h-auto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-inherit text-xs font-normal text-grisHeading"
                      type={col.type}
                      placeholder={col.placeholder}
                      value={row[col.key]}
                      onChange={(e) =>
                        handleInputChange(row.id, col.key, e.target.value)
                      }
                    />
                  ) : col.typeColumn == "select" && (
                    <Select>
                      <SelectTrigger className="w-[100px] rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
                        <SelectValue
                          placeholder={col.placeholder}
                          className=""
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {col.options.map((option, index) => (
                          <SelectItem key={index} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </TableCell>
              ))}

              <TableCell className="flex h-full items-center justify-end">
                <button onClick={() => deleteRowId(row.id)}>
                  <IonIcon
                    icon={closeCircle}
                    size="small"
                    className="cursor-pointer text-grisDisabled"
                  ></IonIcon>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="border-t-[1px] border-[#D7D7D7] py-2 pl-8">
        <button type="button" onClick={() => addRow()}>
          <IonIcon
            icon={closeCircle}
            size="small"
            className="cursor-pointer text-primario"
          ></IonIcon>
        </button>
      </div>
    </div>
  );
};

export default TableForm;
