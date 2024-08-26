import { Form, Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle, create, trash } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export const BanksColumns =  [
  {
    id: "name",
    header: "NOMBRE",
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          <label>{row?.original?.name}</label>
        </div>
      );
    },
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "country",
    header: "País",
    accessorKey: "country",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "bank_id",
    header: "Id del Banco",
    accessorKey: "bank_id",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "phone",
    header: "Teléfono",
    accessorKey: "phone",
  },
  {
    id: "mail",
    header: "Email",
    accessorKey: "mail",
  },
  {
    id: "actions",
    header: "ACTIONS",
    accessorKey: "actions",
    cell: ({ row }) => {
      const navigation = useNavigate(); // Hook dentro de la celda

      return (
        <div className="flex items-center gap-1 text-[#696974]">
          <Link
            // to={`/crm/leads/${row?.original?.id}`}
            className="flex items-center"
          >
            <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
          </Link>
          <Link to={`/bank-management/edit-bank/` + row?.original?.id}>
            <IonIcon icon={create} className="h-5 w-5"></IonIcon>
          </Link>
          <Form action="/bank-management" method="post">
            <input type="hidden" hidden name="bank_id" value={row?.original?.id} />
            <input type="hidden" hidden name="type_option" value={"destroy_bank"} />

            <Button
              type="submit"
              className="h-fit w-fit bg-inherit hover:bg-inherit px-0 py-0 text-grisText"
              disabled={navigation.state === "submitting"}
            >
              <IonIcon icon={trash} className="h-5 w-5"></IonIcon>
            </Button>
          </Form>
        </div>
      );
    },
  },
];
