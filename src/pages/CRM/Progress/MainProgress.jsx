import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  redirect,
  Outlet,
  NavLink,
  Form,
  useNavigation,
} from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  ellipsisVertical,
  globeOutline,
} from "ionicons/icons";

import {
  removeSelectedService,
  setClientServices,
  setSelectedService,
} from "./util";
import ServiceSelectAdd from "./components/Forms/ServiceSelectAdd";
import RemoveSelectedService from "./components/RemoveSelectedService";
import NavigationHeader from "@/components/navigation-header";

const FILTERS = [
  { name: "Date" },
  { name: "Customer" },
  { name: "Activity" },
  { name: "User" },
];

function Main() {
  const navigation = useNavigation();
  const { selectedServices, services, clients } = useLoaderData();
  const [modalRemove, setModalRemove] = useState(false);

  //nothing to do with services selected
  const [serviceSelected, setServiceSelected] = useState({});

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalRemove(false);
    }
  }, [navigation.state]);

  console.log("selectedServices ", selectedServices.data);

  return (
    <div className="flex w-full overflow-auto">
      <Dialog open={modalRemove} onOpenChange={setModalRemove}>
        <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
          <DialogHeader className="pt-2">
            <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
              Remove Service from Selection - <br /> {serviceSelected?.name}
            </DialogTitle>
          </DialogHeader>
          <Form
            id="form-remove-service"
            className="flex h-full w-full flex-col gap-3 px-8"
            action="/crm/progress/"
            method="post"
          >
            <input
              type="hidden"
              value={serviceSelected?.destroy_id}
              name="service_id"
            />
            <input type="hidden" value="remove-service" name="action" />
            <span className="font-roboto text-[#A6A6A6]">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </span>
            <DialogFooter className="flex gap-4 py-6">
              <Button className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white">
                Delete
              </Button>
              <Button
                type="button"
                onClick={() => setModalRemove(false)}
                className="justify-normal rounded-lg bg-grisText px-6 py-2 font-roboto text-xs font-semibold text-white"
              >
                Cancel
              </Button>
            </DialogFooter>
          </Form>
        </DialogContent>
      </Dialog>

      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              PROCESS DASHBOARD
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div className="text-xs">
              {services?.data?.length}{" "}
              {services?.data?.length > 1 ? "services" : "service"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">0 clients</div>
          </div>
        </div>

        {/* services */}
        <div className="flex items-center gap-4 pb-4">
          <div className="flex items-center gap-4 overflow-scroll">
            {selectedServices?.data?.map((service, i) => (
              <div key={i} className="flex shrink-0">
                <NavLink
                  key={i}
                  to={`/crm/progress/${service?.id}`}
                  className={({ isActive }) =>
                    isActive
                      ? `space-evenly flex shrink-0 items-center gap-4 rounded-full bg-grisHeading p-2 pr-5 font-poppins font-bold`
                      : `space-evenly flex shrink-0 items-center gap-4 rounded-full bg-[#8F8F8F] p-2 pr-5 font-poppins font-normal`
                  }
                >
                  <div className="ml-2 flex">
                    <IonIcon
                      icon={globeOutline}
                      className="h-6 w-6"
                      style={{ color: `${service?.color}` }}
                    ></IonIcon>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <p style={{ color: `${service?.color}` }}>&bull;</p>
                      <p className="text-sm uppercase text-white">
                        {service?.name}
                      </p>
                    </div>
                  </div>
                </NavLink>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center">
                    <IonIcon
                      icon={ellipsisVertical}
                      className="size-4 text-grisSubText"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setServiceSelected(service);
                        setModalRemove(true);
                      }}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <ServiceSelectAdd
              services={services?.data}
              clients={clients?.data}
            />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Main;

export async function Action({ request }) {
  const data = await request.formData();

  const action = data.get("action");

  switch (action) {
    case "set-services":
      //Add Selected Service
      await setSelectedService(data);
      return redirect("/crm/progress");
    case "set-client":
      //Add Selected Service
      await setClientServices(data);
      return redirect("/crm/progress");
    case "remove-service":
      //Remove selected Service
      await removeSelectedService(data);
      return redirect("/crm/progress");
  }
}
