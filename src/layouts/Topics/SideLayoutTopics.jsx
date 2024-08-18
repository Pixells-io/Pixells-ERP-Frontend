import React, { useState } from "react";
import {
  Outlet,
  NavLink,
  useLocation,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, home, searchOutline } from "ionicons/icons";
import TopMenu from "../Masters/Menus/TopMenu";
import NewTopic from "@/pages/Topics/New/NewTopic";
import NewCategory from "@/pages/Topics/New/NewCategory";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { saveNewCategory, saveNewTopic } from "@/pages/Topics/utils";

function SideLayoutTopics() {
  const location = useLocation();

  const { user, categories } = useLoaderData();

  const [newTopic, setNewTopic] = useState(false);
  const [newCategory, setNewCategory] = useState(false);

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <NewTopic
        modal={newTopic}
        categories={categories.data}
        user={user.data}
        setModal={setNewTopic}
        functionModal={() => alert("hola")}
      />
      <NewCategory
        modal={newCategory}
        setModal={setNewCategory}
        functionModal={() => alert("hola")}
        user={user.data.user}
      />
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenu main={"/back-management"} />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-2">
            <NavLink
              to="/topics/0"
              className="w-full px-4 py-2 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
            >
              <div className="flex w-full items-center gap-6 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]">
                <IonIcon icon={home} size="large"></IonIcon>
                <p className="text-base font-medium">Home</p>
              </div>
            </NavLink>
            <div className="flex w-full items-center gap-6 px-4 py-2 text-gris2 hover:cursor-pointer hover:rounded-lg hover:bg-[#EAEAEA]">
              <IonIcon icon={searchOutline} size="large"></IonIcon>
              <p className="text-base font-medium">Search</p>
            </div>
            <div className="flex w-full items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full py-2 pl-4 hover:rounded-lg hover:bg-[#EAEAEA]">
                  <div className="flex w-full items-center gap-x-6 text-gris2">
                    <IonIcon icon={addCircleOutline} size="large"></IonIcon>
                    <p className="text-base font-medium">Create</p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    className="w-full hover:cursor-pointer focus:bg-hoverModal"
                    onClick={() => setNewTopic(true)}
                  >
                    Post
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-full hover:cursor-pointer focus:bg-hoverModal"
                    onClick={() => setNewCategory(true)}
                  >
                    Categoria
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutTopics;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type_function")) {
    case "1":
      //Create Topic
      await saveNewTopic(data);
      return redirect("/topics/0");
      break;
    case "2":
      //Create Category
      await saveNewCategory(data);
      return redirect("/topics/0");
      break;
  }
}
