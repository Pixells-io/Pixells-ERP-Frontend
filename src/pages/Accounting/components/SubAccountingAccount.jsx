import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SubAccountingAccount = ({ account, level = 0 }) => {
  const paddingLeft = `${level * 10}px`; // Ajusta el padding en función del nivel

  return (
    <Accordion
      type="single"
      collapsible
      className={"w-full " + (!account?.isPermanent && " hover:bg-grisBg")}
      style={{ paddingLeft }}
    >
      <AccordionItem value={"item-" + account.id}>
        <AccordionTrigger>
          <div
            className={
              "text-xs text-black " +
              (level == 1 ? "font-normal" : "font-light")
            }
          >
            {account.numberAccount} - {account.name}
          </div>
          {!account?.isPermanent && (
            <div>
              <label
                className={
                  "h-7 rounded-3xl border border-[#44444F] bg-inherit px-4 py-2 text-xs font-light text-black hover:cursor-pointer hover:bg-[#44444F] hover:text-white"
                }
              >
                Detalles
              </label>
            </div>
          )}
        </AccordionTrigger>
        {account.subAccounts.length != 0 ? (
          <AccordionContent>
            {account.subAccounts.map((subAccount, index) => (
              <SubAccountingAccount
                key={"childrenChildrenAccount" + index}
                account={subAccount}
                level={level + 1}
              />
            ))}
          </AccordionContent>
        ) : null}
      </AccordionItem>
    </Accordion>
  );
};

export default SubAccountingAccount;
