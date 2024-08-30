import React, { useEffect, useState } from "react";

import DataTable from "@/components/table/DataTable";
import { createPusherClient } from "@/lib/pusher";
import { getCategories } from "../../utils";
import { IonIcon } from "@ionic/react";
import ModalDeleteCategory from "../../Modals/ModalDeleteCategory";
import { informationCircle } from "ionicons/icons";
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

  const CategoryColumns = [
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
          <label>{row?.original?.status == "0" ? "Inactivo" : "Activo"}</label>
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
              <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
            </button>
            <ModalDeleteCategory category_id={row?.original?.id} category_name={row?.original?.name} />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <EditCategory
        modal={modalEditCategory}
        setModal={setModalEditCategory}
        category={categoryData}
      />
      <DataTable
        data={categoriesInfo}
        columns={CategoryColumns}
        searchFilter="code"
        searchNameFilter="Buscar por código"
        isCheckAll={true}
      />
    </>
  );
};

export default Category;
