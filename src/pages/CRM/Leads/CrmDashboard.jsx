import React, { useEffect, useState } from "react";

import {
  NavLink,
  useLocation,
  Outlet,
  useLoaderData,
  Form,
  redirect,
  Link,
  useParams,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

import NavigationHeader from "@/components/navigation-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Button } from "@/components/ui/button";
import { functionUpdateSelectedProcess, getSelectedProcess } from "../utils";
import { createPusherClient } from "@/lib/pusher";

function CrmDashboard() {
  const params = useParams();
  const { process, selected, user } = useLoaderData();

  //INFO STATES
  const [processAll, setProcessAll] = useState(process.data);
  const [selectedProcess, setSelectedProcess] = useState(selected.data);

  const userId = user?.data?.user?.id;

  //WEBSOCKETS
  const pusherClient = createPusherClient();

  useEffect(() => {
    //Socket fot table leads and clients
    pusherClient.subscribe(`private-get-user-selected-process-crm.${userId}`);

    pusherClient.bind("fill-user-selected-process-crm", ({ user_id }) => {
      getProcessFill();
    });

    //Function Sync Info
    async function getProcessFill() {
      let newProcess = await getSelectedProcess();
      setSelectedProcess(newProcess.data);
    }

    return () => {
      pusherClient.unsubscribe(
        `private-get-user-selected-process-crm.${userId}`,
      );
    };
  }, []);

  //ARRAY FILL OPTIONS
  const processOptions = [];

  arrayFill(processAll, processOptions);

  function arrayFill(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.name,
        value: element.id,
      });
    }
  }

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              LEADS DASHBOARD
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex gap-2">
            {selectedProcess.map((process, i) => (
              <Link
                to={`/crm/dashboard/${process.process_id}`}
                className={
                  params.id == process.process_id
                    ? "w-fit rounded-lg bg-grisHeading px-6 py-2 font-semibold text-white"
                    : "w-fit rounded-lg bg-blancoBox px-6 py-2 font-normal text-black"
                }
                key={i}
              >
                <p className="font-roboto text-xs">{process.name}</p>
              </Link>
            ))}
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost">
                  <IonIcon
                    icon={add}
                    size={32}
                    className="text-3xl text-grisHeading"
                  ></IonIcon>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="overflow-auto px-3 pb-6">
                <DropdownMenuLabel>
                  Seleccionar Procesos Comerciales
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="flex flex-col gap-2">
                  <Form
                    action="/crm/dashboard"
                    method="post"
                    className="flex h-full flex-col gap-2"
                  >
                    <input type="hidden" value="set-process" name="action" />
                    <div className="px-4 pt-4">
                      <SelectRouter
                        name="process_ids"
                        options={processOptions}
                        isMulti={true}
                        placeholder="Procesos Comerciales"
                      />
                    </div>
                    <div className="flex self-end px-4 pt-4">
                      <Button
                        type="submit"
                        className="w-fit bg-primarioBotones px-6"
                      >
                        Agregar
                      </Button>
                    </div>
                  </Form>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default CrmDashboard;

export async function Action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "set-process":
      await functionUpdateSelectedProcess(data);
      return redirect("/crm/dashboard");
      break;
  }
}
