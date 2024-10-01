import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";

const PaymentTabs = ({ data }) => {
  const navigation = useNavigation();
  const [generalData, setGeneralData] = useState({
    id: data?.payment?.id,
    conditions: data?.payment?.conditions,
    interest: data?.payment?.interest,
    days_of_credit: data?.payment?.days_of_credit,
    credit_limit: data?.payment?.credit_limit,
  });

  const handleInputChange = (value, name) => {
    setGeneralData({ ...generalData, [name]: value });
  };

  return (
    <Form
      className="flex w-full h-full flex-col py-4"
      id="form-supplier-general"
      action={"/sales/customer/edit/" + data?.id}
      method="post"
    >
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          CONDICIONES DE PAGO
        </h2>
        <input
          type="hidden"
          hidden
          name="client_transactional_id"
          value={data?.id}
        />
        <input
          type="hidden"
          hidden
          name="payment_id"
          value={generalData?.id}
        />
        <input type="hidden" hidden name="type" value={"paymentConditions"} />
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12">
            <InputForm
              name="conditions"
              type="text"
              placeholder={"Condiciones"}
              required={true}
              value={generalData?.conditions}
              onChange={(e) => handleInputChange(e.target.value, "conditions")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="interest"
              type="number"
              placeholder={"% intereses por retraso"}
              required={true}
              value={generalData?.interest}
              onChange={(e) => handleInputChange(e.target.value, "interest")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="days_of_credit"
              type="number"
              placeholder={"Días de crédito"}
              required={true}
              value={generalData?.days_of_credit}
              onChange={(e) =>
                handleInputChange(e.target.value, "days_of_credit")
              }
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="credit_limit"
              type="number"
              placeholder={"Límite de crédito"}
              required={true}
              value={generalData?.credit_limit}
              onChange={(e) =>
                handleInputChange(e.target.value, "credit_limit")
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button
            className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PaymentTabs;
