import React from 'react';
import CardBalanceTotal from '../CardBalanceGeneral';
import BankCard from '../BankBalanceCard';
import BalanceDataTable from '../Table/BalanceTable';

const BalanceTabContent = ({ banksData, balanceData }) => {
  return (
    <div className="h-full w-full rounded-md bg-blancoBg p-4 md:p-7 flex flex-col">
      <div className="mb-6">
        <CardBalanceTotal total="$2,275,077.13" />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="mb-6 overflow-x-auto">
          <div className="mx-2 flex p-4 space-x-6 min-w-[300px] max-w-[500px]">
            {banksData.map(({ title, balance }) => (
              <BankCard key={title} title={title} balances={balance} />
            ))}
          </div>
        </div>
        <div className="flex w-[70px] p-1 ml-1 text-center border border-[#D7D7D7] text-xs text-[#8F8F8F] rounded-[20px] font-roboto mb-4">
          Septiembre
        </div>
        <div className="flex-grow overflow-auto">
          <BalanceDataTable data={balanceData} />
        </div>
      </div>
    </div>
  );
};


export default BalanceTabContent;