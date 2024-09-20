import React, { useEffect, useMemo, useState } from "react";

import DataTable from "@/components/table/DataTable";
import { createPusherClient } from "@/lib/pusher";
import { getCategories } from "../../utils";
import { IonIcon } from "@ionic/react";
import ModalDeleteCategory from "../../Modals/ModalDeleteCategory";
import { informationCircle, informationCircleOutline, trash, trashOutline } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import EditCategory from "../../Modals/EditCategory";

const Category = ({ categories }) => {
  const [categoriesInfo, setCategoriesInfo] = useState(categories);
  const [modalEditCategory, setModalEditCategory] = useState(false);
  const [categoryData, setCategoryData] = useState({
    id: "",
    code: "",
    name: "",
  });
  const [category_id, setCategory_id] = useState(null);
  const [category_name, setCategory_name] = useState("");
  const [modalDelete, setModalDelete] = useState(false);

  const pusherClient = createPusherClient();

  async function getCategoriesList() {
    let newData = await getCategories();
    setCategoriesInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-product-categories");

    pusherClient.bind("fill-product-categories", ({ message }) => {
      getCategoriesList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-product-categories");
    };
  }, []);

  const openModalEditCategory = (id, code, name) => {
    const newCategoryAux = {
      id: id,
      code: code,
      name: name,
    };
    setCategoryData(newCategoryAux);
    setModalEditCategory(true);
  };

  const openModalDelete = (id, name) => {
    setCategory_id(id);
    setCategory_name(name);
    setModalDelete(true);
  };

  const CategoryColumns = useMemo(
    () => [
      {
        id: "id",
        header: "ID",
        accessorKey: "id",
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <Checkbox
                className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
              />
              <label>{row?.original?.id}</label>
            </div>
          );
        },
        meta: {
          filterButton: true,
        },
      },
      {
        id: "code",
        header: "CÓDIGO",
        accessorKey: "code",
      },
      {
        id: "name",
        header: "NOMBRE",
        accessorKey: "name",
        meta: {
          filterButton: true,
        },
        filterFn: "equals",
      },
      {
        id: "status",
        header: "ESTATUS",
        accessorKey: "status",
        cell: ({ row }) => {
          return (
            <label>
              {row?.original?.status == "0" ? "Inactivo" : "Activo"}
            </label>
          );
        },
      },
      {
        id: "created",
        header: "CREADO",
        accessorKey: "created",
      },
      {
        id: "actions",
        header: "ACTIONS",
        accessorKey: "actions",
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-1 text-[#696974]">
              <button
                type="button"
                to={`/bank-management/edit-bank-account/` + row?.original?.id}
                className="flex items-center"
                onClick={() =>
                  openModalEditCategory(
                    row?.original?.id,
                    row?.original?.code,
                    row?.original?.name,
                  )
                }
              >
                <IonIcon icon={informationCircleOutline} className="h-5 w-5"></IonIcon>
              </button>
              <button
                type="button"
                className="flex items-center"
                onClick={() =>
                  openModalDelete(row?.original?.id, row?.original?.name)
                }
              >
                <IonIcon icon={trashOutline} className="h-5 w-5"></IonIcon>
              </button>
            </div>
          );
        },
      },
    ],
    [openModalEditCategory],
  );

  return (
    <div>
      <EditCategory
        modal={modalEditCategory}
        setModal={setModalEditCategory}
        category={categoryData}
      />
      <ModalDeleteCategory
        category_id={category_id}
        category_name={category_name}
        modal={modalDelete}
        setModal={setModalDelete}
      />
      <DataTable
        data={categoriesInfo}
        columns={CategoryColumns}
        searchFilter="code"
        searchNameFilter="Buscar por código"
        isCheckAll={true}
      />
    </div>
  );
};

export default Category;
