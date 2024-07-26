import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const SubAccountingAccount = ({
  account,
  level = 0,
  selectAccount,
  setSelectAccount,
}) => {
  const paddingLeft = `${level * 6}px`; // Ajusta el padding en función del nivel

  const showDetail = (account) => {
    console.log(account);
    setSelectAccount(account);
  };

  console.log(account.id, " : ", selectAccount?.id);

  return (
    <Accordion
      type="single"
      collapsible
      className={"w-full"}
      style={{ paddingLeft }}
    >
      <AccordionItem value={"item-" + account.id}>
        <div
          className={cn(
            "flex items-center justify-between pl-2 pr-2 group hover:bg-grisBg",
            account.id == selectAccount?.id &&
              "rounded-xl border border-[#44444F] bg-white",
          )}
        >
          <AccordionTrigger
            className={
              "text-xs text-black py-3 " +
              (level == 1 ? "font-normal" : "font-light")
            }
          >
            {account.numberAccount} - {account.name}
          </AccordionTrigger>
          {!account?.isPermanent && (
            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <label
                className={
                  "rounded-3xl border border-[#44444F] bg-inherit px-4 py-1 text-xs font-light text-black hover:cursor-pointer hover:bg-[#44444F] hover:text-white"
                }
                onClick={() => showDetail({ id: account.id })}
              >
                Detalles
              </label>
            </div>
          )}
        </div>
        {account.subAccounts.length != 0 ? (
          <AccordionContent>
            {account.subAccounts.map((subAccount, index) => (
              <SubAccountingAccount
                key={"childrenChildrenAccount" + index}
                account={subAccount}
                level={level + 1}
                selectAccount={selectAccount}
                setSelectAccount={setSelectAccount}
              />
            ))}
          </AccordionContent>
        ) : null}
      </AccordionItem>
    </Accordion>
  );
};

export default SubAccountingAccount;