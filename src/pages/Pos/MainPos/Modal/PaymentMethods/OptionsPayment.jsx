import React from "react";
import { Button } from "@/components/ui/button";
import {
  arrowForwardCircleOutline,
  cardOutline,
  cashOutline,
  giftOutline,
  walletOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function OptionsPayments({ method,selectPaymentMethod }) {
  return (
    <div className="flex h-full w-full flex-col items-center border-l-2 border-grisDisabled">
      <div className="flex h-full w-full flex-col items-center gap-y-4 py-3">
        <Button
          type="button"
          className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "cash" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
          onClick={() => selectPaymentMethod("cash")}
        >
          <IonIcon icon={cashOutline} className="h-8 w-8"></IonIcon>
          <span className="text-md font-roboto font-normal">Efectivo</span>
        </Button>
        <Button
          type="button"
          className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "card" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
          onClick={() => selectPaymentMethod("card")}
        >
          <IonIcon icon={cardOutline} className="h-8 w-8"></IonIcon>
          <span className="text-md font-roboto font-normal">
            Tarjeta de Crédito
          </span>
        </Button>
        <Button
          type="button"
          className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "transfer" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
          onClick={() => selectPaymentMethod("transfer")}
        >
          <IonIcon
            icon={arrowForwardCircleOutline}
            className="h-8 w-8"
          ></IonIcon>
          <span className="text-md font-roboto font-normal">Transferencia</span>
        </Button>
        <Button
          type="button"
          className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "gift" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
          onClick={() => selectPaymentMethod("gift")}
        >
          <IonIcon icon={giftOutline} className="h-8 w-8"></IonIcon>
          <span className="text-md font-roboto font-normal">Gift Card</span>
        </Button>
      </div>
      <Button
        type="button"
        className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl border border-grisDisabled ${method == "multiPayment" ? "bg-[#44444F] text-white" : "bg-inherit text-[#44444F] hover:bg-[#F0F0FC]"}`}
        onClick={() => selectPaymentMethod("multiPayment")}
      >
        <IonIcon icon={walletOutline} className="h-8 w-8"></IonIcon>
        <span className="text-md font-roboto font-normal">Multipago</span>
      </Button>
    </div>
  );
}

export default OptionsPayments;
