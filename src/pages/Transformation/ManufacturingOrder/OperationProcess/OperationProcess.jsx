import React, { useState } from "react";

import StatusInformation from "@/components/StatusInformation/status-information";
import TableForm from "./Table/TableForm";
import { Button } from "@/components/ui/button";

function OperationProcess() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  return (
    <div>
      <div className="rounded-xl bg-blancoBg p-4">
        <div className="max-h-[400px] overflow-auto">
          <TableForm
            tableData={products}
            setTableData={setProducts}
            setTotalProducts={setTotalProducts}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-row justify-between rounded-xl bg-blancoBg px-4 py-6">
        <textarea
          placeholder="Observaciones"
          className="h-[50px] w-[280px] resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs font-light text-grisSubText"
          name="observations"
        ></textarea>
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-x-4">
            <h2 className="text-sm font-medium text-grisText">Total</h2>
            <div className="min-w-32 rounded-lg border border-[#8F8F8F] px-2 py-1">
              <p className="text-end text-sm font-medium text-grisText">
                {totalProducts}
              </p>
            </div>
          </div>
        </div>
      </div>

      <StatusInformation
        status={"inProgress"}
        imgUser={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
      >
        <Button
          type="button"
          onClick={() => alert("save")}
          className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
        >
          Save
        </Button>
      </StatusInformation>
    </div>
  );
}

export default OperationProcess;
