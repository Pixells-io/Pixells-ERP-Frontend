import React, { useEffect, useState } from "react";
import { Form, Link, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IonIcon } from "@ionic/react";
import { informationCircle, trash } from "ionicons/icons";
import { Button } from "@/components/ui/button";

export const clientColumns = [
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => {
      const info = row.original.type;
      return <div>{info == 1 ? "Individual" : "Business"}</div>;
    },
  },
  {
    accessorKey: "business_name",
    header: "COMPANY",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    accessorKey: "contact_name",
    header: "NAME",
    cell: ({ row }) => {
      return <span>{row?.original.contact_name}</span>;
    },
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    accessorKey: "middleName",
    header: "MIDDLE NAME",
    cell: ({ row }) => {
      return <span>{row?.original.contact_middle_name}</span>;
    },
  },
  {
    accessorKey: "lastName",
    header: "LAST NAME",
    cell: ({ row }) => {
      return <span>{row?.original.contact_last_name}</span>;
    },
  },
  {
    accessorKey: "contact_phone",
    header: "PHONE",
  },
  {
    accessorKey: "contact_email",
    header: "EMAIL",
  },
  {
    accessorKey: "services",
    header: () => <div>SERVICE</div>,
    cell: ({ row }) => {
      const services = row.getValue("services");
      const serviceStrings = services
        .map((service) => service.service?.name)
        .join(", ");
      // console.log(serviceStrings);

      return <div>{serviceStrings}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      const navigation = useNavigation();
      const [open, setOpen] = useState(false);

      useEffect(() => {
        if (navigation.state === "idle") {
          setOpen(false);
        }
      }, [navigation.state]);

      console.log(row.original);

      return (
        <div className="flex items-center gap-2 text-[#696974]">
          <Link
            to={`/crm/client/${row?.original?.id}`}
            className="flex items-center"
          >
            <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
          </Link>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="flex">
              <IonIcon icon={trash} className="h-5 w-5" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Delete Client - {row?.original?.business_name}?
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <Form id="form-delete-lead" action={"/crm"} method="post">
                <input
                  type="hidden"
                  hidden
                  readOnly
                  value={row?.original?.id}
                  name="client_id"
                />
                <input
                  type="hidden"
                  hidden
                  readOnly
                  value="delete-client"
                  name="action"
                />
                <DialogFooter className="flex gap-4">
                  <Button
                    type="submit"
                    className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
                  >
                    Delete
                  </Button>
                  <DialogClose>
                    <Button
                      type="button"
                      className="justify-normal rounded-lg bg-grisText px-6 py-2 font-roboto text-xs font-semibold text-white"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
