import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabTransfer from "./TabTransfer";
import TabCreditCard from "./TabCreditCard";
import TabCash from "./TabCash";
import TabChecks from "./TabChecks";

function FormPaymentMethods({ modal, setModal, functionModal }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    functionModal(data);
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[90vh] max-w-[90vh] overflow-auto bg-blancoBg p-0 sm:max-h-[680px] sm:max-w-[680px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading"></DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Tabs
            defaultValue="checks"
            className="h-full overflow-auto rounded-lg"
          >
            <TabsList className="ml-4 flex w-fit rounded-none bg-blancoBg">
              <TabsTrigger
                value="checks"
                className="rounded-none border-b-2 py-2 pl-1 pr-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                CHEQUES
              </TabsTrigger>
              <TabsTrigger
                value="transfer"
                className="rounded-none border-b-2 px-4 py-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                TRANSFERENCIA
              </TabsTrigger>
              <TabsTrigger
                value="deposit"
                className="rounded-none border-b-2 px-4 py-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                DEPÓSITO
              </TabsTrigger>
              <TabsTrigger
                value="creditCard"
                className="rounded-none border-b-2 px-4 py-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                TARJETA CR
              </TabsTrigger>
              <TabsTrigger
                value="cash"
                className="rounded-none border-b-2 px-4 py-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                EFECTIVO
              </TabsTrigger>
            </TabsList>
            <TabsContent value="checks" className="p-2">
              <form id="formDataTab" onSubmit={handleSubmit}>
                <TabChecks />
              </form>
            </TabsContent>
            <TabsContent value="transfer" className="mt-[-60px] p-2">
              <form id="formDataTab" onSubmit={handleSubmit}>
                <TabTransfer />
              </form>
            </TabsContent>
            <TabsContent value="deposit" className="p-2">
              <h1>Deposito</h1>
            </TabsContent>
            <TabsContent value="creditCard" className="mt-[-60px] p-2">
              <form id="formDataTab" onSubmit={handleSubmit}>
                <TabCreditCard />
              </form>
            </TabsContent>
            <TabsContent value="cash" className="mt-[-60px] p-2">
              <form id="formDataTab" onSubmit={handleSubmit}>
                <TabCash />
              </form>
            </TabsContent>
          </Tabs>
        </DialogDescription>

        <DialogFooter className="px-6 pb-6">
          <Button
            form="formDataTab"
            className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
          >
            Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormPaymentMethods;
