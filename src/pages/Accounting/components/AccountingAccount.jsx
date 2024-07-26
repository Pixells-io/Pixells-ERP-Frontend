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

const AccountingAccount = ({ account }) => {
  const [selectAccount, setSelectAccount] = useState(null);

  return (
    <div className="flex h-full">
      <div
        className={cn(
          "h-full overflow-auto",
          !!selectAccount ? "w-3/5" : "w-full",
        )}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="text-sm text-black">{account.name}</div>
            </AccordionTrigger>
            <AccordionContent>
              {account.subAccounts.map((subAccount, index) => (
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
