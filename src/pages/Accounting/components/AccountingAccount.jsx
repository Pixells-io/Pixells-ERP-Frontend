import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubAccountingAccount from "./SubAccountingAccount";
import { cn } from "@/lib/utils";
import FormDetailAccount from "./Tabs/FormDetailAccount";

const AccountingAccount = () => {
  const [selectAccount, setSelectAccount] = useState(null);
  const account= 
    {
      id: 1,
      numberAccount: "1000",
      name: "ACTIVO",
      isPermanent: true,
      subAccounts: [
        {
          id: 1,
          numberAccount: "1100",
          name: "Activo circulante",
          isPermanent: true,
          subAccounts: [
            {
              id: 2,
              numberAccount: "1110",
              name: "Caja",
              isPermanent: true,
              subAccounts: [
                {
                  id: 3,
                  numberAccount: "1111",
                  name: "Ingreso a caja 1",

                  subAccounts: [
                    {
                      id: 20,
                      numberAccount: "1110",
                      name: "Caja",
                      subAccounts: [],
                    },
                  ],
                },
                {
                  id: 10,
                  numberAccount: "1112",
                  name: "Ingreso a caja 2",

                  subAccounts: [],
                },
                {
                  id: 11,
                  numberAccount: "1113",
                  name: "Ingreso a caja 3",

                  subAccounts: [],
                },
                {
                  id: 12,
                  numberAccount: "1114",
                  name: "Ingreso a caja 4",

                  subAccounts: [],
                },
                {
                  id: 15,
                  numberAccount: "1115",
                  name: "Ingreso a caja 5",

                  subAccounts: [],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          numberAccount: "1200",
          name: "Activo Fijo",
          isPermanent: true,
          subAccounts: [
            {
              id: 5,
              numberAccount: "1210",
              name: "Terrenos",
              isPermanent: true,
              subAccounts: [
                {
                  id: 6,
                  numberAccount: "1211",
                  name: "Terrenos baratos",
                  subAccounts: [],
                },
              ],
            },
          ],
        },
      ],
};

console.log("renderiza");

  return (
    <div className="flex h-full bg-blancoBg pl-6 rounded-xl">
      <div
        className={cn(
          "h-full overflow-auto",
          !!selectAccount ? "w-3/5" : "w-full",
        )}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-0">
              <div className="text-sm text-black py-4">{account?.name}</div>
            </AccordionTrigger>
            <AccordionContent>
              {account?.subAccounts.map((subAccount, index) => (
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
