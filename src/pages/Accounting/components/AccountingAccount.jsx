import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubAccountingAccount from "./SubAccountingAccount";
import { cn } from "@/lib/utils";
import FormDetailAccount from "./Tabs/FormDetailAccount";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import {
  destroyAccountingAccount,
  getAccountingAccountsById,
  saveAccountingAccount,
  UpdateAccountingAccount,
} from "../Catalog/utils";
import { createPusherClient } from "@/lib/pusher";
import ModalConfirmNewAccount from "../Catalog/Modals/ModalConfirmNewAccount";
import SearchAccountingAccount from "../Catalog/Components/SearchAccountingAccount";

const AccountingAccount = () => {
  const { data } = useLoaderData();

  const [selectAccount, setSelectAccount] = useState(null);
  const [selectNewAccount, setSelectNewAccount] = useState({
    level: "",
    name: "",
  });
  const [accounts, setAccounts] = useState([]);
  const [accountsSearch, setAccountsSearch] = useState([]);
  const [modalConfirmNewAccount, setModalConfirmNewAccount] = useState(false);
  const [accountsInfo, setAccountsInfo] = useState(data);
  const [parentAccount, setParentAccount] = useState([]);

  const [accountName] = useOutletContext();
  const params = useParams();

  useEffect(() => {
    setAccountsInfo(data);
  }, [data]);

  const pusherClient = createPusherClient();

  async function getAccountingAccountsList() {
    let newData = await getAccountingAccountsById({ params: params });
    setAccountsInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-accounting-account");

    pusherClient.bind("fill-accounting-account", ({ message }) => {
      getAccountingAccountsList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-accounting-account");
    };
  }, []);

  useEffect(() => {
    transforInSubAccount();
  }, [accountsInfo]);

  const recursiveSubAccount = (subAccountsAux, level) => {
    if (subAccountsAux.length == 0) {
      return [];
    }

    let accountAux = subAccountsAux
      .filter((ac) => ac.levels.length == level + 1)
      .map((ac) => ({
        ...ac,
        subAccounts: recursiveSubAccount(
          subAccountsAux.filter((item) =>
            item.level.startsWith(ac.level + "."),
          ),
          level + 1,
        ),
      }));

    return accountAux;
  };

  const transforInSubAccount = () => {
    const principals = accountsInfo
      .filter((ac) => ac.levels.length == 2)
      .map((ac) => ({
        ...ac,
        subAccounts: recursiveSubAccount(
          accountsInfo.filter((item) => item.level.startsWith(ac.level)),
          2,
        ),
      }));
    setAccounts(principals);
  };

  return (
    <div className="flex h-full rounded-xl bg-blancoBg pl-6">
      {/* Modals */}
      <ModalConfirmNewAccount
        modal={modalConfirmNewAccount}
        setModal={setModalConfirmNewAccount}
        newAccount={selectNewAccount}
        setSelectNewAccount={setSelectNewAccount}
        level={params.level}
      />
      <div
        className={cn(
          "h-full overflow-auto",
          !!selectAccount ? "w-3/5" : "w-full",
        )}
      >
        <SearchAccountingAccount
          accounts={accounts}
          setAccountsSearch={setAccountsSearch}
        />
        <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-0">
              <div className="py-4 text-sm text-black">{accountName}</div>
            </AccordionTrigger>
            <AccordionContent>
              {accountsSearch?.map((subAccount, index) => (
                <SubAccountingAccount
                  key={"ChildrenAccount" + index}
                  account={subAccount}
                  level={1}
                  setSelectAccount={setSelectAccount}
                  selectAccount={selectAccount}
                  setSelectNewAccount={setSelectNewAccount}
                  selectNewAccount={selectNewAccount}
                  setModalConfirmNewAccount={setModalConfirmNewAccount}
                  accountP={[]}
                  setParentAccount={setParentAccount}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {accountsSearch.length == 0 && (
          <h2 className="mt-2 text-center">Sin resultados</h2>
        )}
      </div>
      {!!selectAccount && (
        <FormDetailAccount
          setSelectAccount={setSelectAccount}
          selectAccount={selectAccount}
          level={params.level}
          parentAccount={parentAccount}
        />
      )}
    </div>
  );
};

export default AccountingAccount;

export async function Action({ request }) {
  // const { level } = useParams();

  const data = await request.formData();
  switch (data.get("type_option")) {
    case "save_accountingAccount":
      await saveAccountingAccount(data);
      break;
    case "update_accountingAccount":
      await UpdateAccountingAccount(data);
      break;
    case "destroy_account":
      await destroyAccountingAccount(data);
      break;
  }
  return "1";
  // return redirect(`/accounting/${level}`);
}
