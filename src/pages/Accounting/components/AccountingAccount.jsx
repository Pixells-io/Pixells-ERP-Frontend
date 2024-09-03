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
import { saveAccountingAccount } from "../Catalog/utils";

const AccountingAccount = () => {
  const [selectAccount, setSelectAccount] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const { accountName } = useOutletContext();

  const { data } = useLoaderData();

  useEffect(() => {
    transforInSubAccount();
  }, [data]);

  const recursiveSubAccount = (subAccountsAux, level) => {
    if (subAccountsAux.length == 0) {
      return [];
    }

    let accountAux = subAccountsAux
      .filter((ac) => ac.levels.length == level + 1)
      .map((ac) => ({
        ...ac,
        subAccounts: recursiveSubAccount(
          subAccountsAux.filter((item) => item.level.startsWith(ac.level)),
          level + 1,
        ),
      }));

    return accountAux;
  };

  const transforInSubAccount = () => {
    const principals = data
      .filter((ac) => ac.levels.length == 2)
      .map((ac) => ({
        ...ac,
        subAccounts: recursiveSubAccount(
          data.filter((item) => item.level.startsWith(ac.level)),
          2,
        ),
      }));
    setAccounts(principals);
  };

  return (
    <div className="flex h-full rounded-xl bg-blancoBg pl-6">
      <div
        className={cn(
          "h-full overflow-auto",
          !!selectAccount ? "w-3/5" : "w-full",
        )}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-0">
              <div className="py-4 text-sm text-black">
                { accountName }
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {accounts?.map((subAccount, index) => (
                <SubAccountingAccount
                  key={"ChildrenAccount" + index}
                  account={subAccount}
                  level={1}
                  setSelectAccount={setSelectAccount}
                  selectAccount={selectAccount}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {!!selectAccount && (
        <FormDetailAccount setSelectAccount={setSelectAccount} />
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
  }
  return "1";
  // return redirect(`/accounting/${level}`);
}
