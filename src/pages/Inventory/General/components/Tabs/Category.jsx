import React, { useEffect, useState } from "react";

import DataTable from "@/components/table/DataTable";
import { CategoryColumns } from "../../Table/CategoryColumns";
import { createPusherClient } from "@/lib/pusher";
import { getCategories } from "../../utils";

const Category = ({ categories }) => {
  const [categoriesInfo, setCategoriesInfo] = useState(categories);


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


  return (
    <DataTable
      data={categoriesInfo}
      columns={CategoryColumns}
      searchFilter="code"
      searchNameFilter="Buscar por código"
      isCheckAll={true}
    />
  );
};

export default Category;
