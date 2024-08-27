import React, { useEffect, useState } from "react";

import { createPusherClient } from "@/lib/pusher";
import DataTable from "@/components/table/DataTable";
import { getBanks } from "../utils";
import { BanksColumns } from "../Table/BanksColumns";

function Banks({banks}) {
  const [banksInfo, setBanksInfo] = useState(banks.data);

  const pusherClient = createPusherClient();

  async function getBanksList() {
    let newData = await getBanks();
    setBanksInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-banks");

    pusherClient.bind("fill-banks", ({ message }) => {
      getBanksList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-banks");
    };
  }, []);

  return (
    <DataTable
      data={banksInfo}
      columns={BanksColumns}
      searchFilter={"name"}
      searchNameFilter="Nombre"
      isCheckAll={true}
    />
  );
}

export default Banks;
