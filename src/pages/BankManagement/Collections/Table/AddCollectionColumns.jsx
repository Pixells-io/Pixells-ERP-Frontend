import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { formatNumber } from "../../utils";

export const AddCollectionsColumns = [
  {
    id: "accountingAccount",
    header: "Cuenta Contable",
    accessorKey: "accountingAccount",
    cell: ({ row }) => {

      const options = [
        { label: "1.1.1", value: "21" },
        { label: "2.1.1", value: "22" },
        { label: "3.1.1", value: "23" },
        { label: "4.1.1", value: "24" },
        { label: "5.1.1", value: "25" },
        { label: "6.1.1", value: "26" },
        { label: "7.1.1", value: "27" },
        { label: "8.1.1", value: "28" },
      ];

      const [selectedOption, setSelectedOption] = useState(options[0].value);

      const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
      };

      useEffect(() => {
        row.original.accAccountOptions = selectedOption;
      }, [selectedOption, row.original]);

      return (
        <div className="flex w-full items-center gap-1">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          <select
            value={selectedOption} // Valor inicial del select
            onChange={handleChange}
            className="w-full bg-inherit p-1 font-roboto text-xs font-normal text-[#44444F]"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    },
  },
  {
    id: "typeDoc",
    header: "Tipo. Doc",
    accessorKey: "typeDoc",
  },
  {
    id: "creditDays",
    header: "Días de crédito",
    accessorKey: "creditDays",
  },
  {
    id: "total",
    header: "Total",
    accessorKey: "total",
    cell: ({ row }) => {
      return <>{formatNumber(row?.original?.total)}</>;
    },
  },
  {
    id: "overdueBalance",
    header: "Saldo Vencido",
    accessorKey: "overdueBalance",
    cell: ({ row }) => {
      return <>{formatNumber(row?.original?.overdueBalance)}</>;
    },
  },
  {
    id: "discount",
    header: "Desc %",
    accessorKey: "discount",
    cell: ({ row }) => {
      return <> {row?.original?.discount}%</>;
    },
  },
  {
    id: "pendingPayment",
    header: "Por Pagar",
    accessorKey: "pendingPayment",
    cell: ({ row }) => {
      return <> {formatNumber(row?.original?.pendingPayment)}</>;
    },
  },
  {
    id: "observations",
    header: "Observaciónes",
    accessorKey: "observations",
  },
];
