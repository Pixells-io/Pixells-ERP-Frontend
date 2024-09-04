import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

const SubAccountingAccount = ({
  account,
  level = 0,
  selectAccount,
  setSelectAccount,
  setSelectNewAccount,
  setModalConfirmNewAccount,
  accountP,
  setParentAccount,
}) => {
  const paddingLeft = `${level * 6}px`; // Ajusta el padding en función del nivel

  const showDetail = (account) => {
    setSelectAccount(account);
  };

  const newAccount = (account) => {
    let numAccount = 1;
    if (account.subAccounts.length != 0) {
      let ultimateAccount = account.subAccounts[account.subAccounts.length - 1];
      let ultimateDigit =
        ultimateAccount.levels[ultimateAccount.levels.length - 1];
      numAccount = Number(ultimateDigit) + 1;
    }

    const NewNumber = {
      name: `${account.name} (${numAccount})`,
      level: `${account.level}.${numAccount}`,
      levels: `${account.level}.${numAccount}`.split("."),
    };

    setSelectNewAccount(NewNumber);
    setModalConfirmNewAccount(true);
  };

  return (
    <Accordion
      type="multiple"
      className={"w-full"}
      style={{ paddingLeft }}
      defaultValue={["item-2"]}
    >
      <AccordionItem value={"item-" + account.levels.length}>
        <div
          className={cn(
            "group flex items-center justify-between pl-2 pr-2 hover:bg-grisBg",
            account.id == selectAccount?.id &&
              "rounded-xl border border-[#44444F] bg-white",
          )}
        >
          <AccordionTrigger
            className={
              "py-3 text-xs text-black " +
              (level == 1 ? "font-normal" : "font-light")
            }
          >
            {account.level} - {account.name}
          </AccordionTrigger>
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <IonIcon
                icon={addCircleOutline}
                size="large"
                className="h-7 w-7 cursor-pointer text-blue-500"
                onClick={() => newAccount(account)}
              />
            </div>
            {true && (
              <div className="flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <label
                  className={
                    "rounded-3xl border border-[#44444F] bg-inherit px-4 py-1 text-xs font-light text-black hover:cursor-pointer hover:bg-[#44444F] hover:text-white"
                  }
                  onClick={() => {
                    showDetail(account);
                    setParentAccount(accountP);
                  }}
                >
                  Detalles
                </label>
              </div>
            )}
          </div>
        </div>
        {account?.subAccounts?.length != 0 ? (
          <AccordionContent>
            {account.subAccounts.map((subAccount, index) => (
              <SubAccountingAccount
                key={"childrenChildrenAccount" + index}
                account={subAccount}
                level={level + 1}
                selectAccount={selectAccount}
                setSelectAccount={setSelectAccount}
                setSelectNewAccount={setSelectNewAccount}
                setModalConfirmNewAccount={setModalConfirmNewAccount}
                accountP={account}
                setParentAccount={setParentAccount}
              />
            ))}
          </AccordionContent>
        ) : null}
      </AccordionItem>
    </Accordion>
  );
};

export default SubAccountingAccount;
