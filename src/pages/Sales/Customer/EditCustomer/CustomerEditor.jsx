import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { NavLink, Outlet, redirect, useLoaderData } from "react-router-dom";
import {
  createBillingInfo,
  createContact,
  createGeneralInfo,
  createPaymentConditions,
  destroyBillingInfo,
  destroyContact,
  destroyCustomer,
  editBillingInfo,
  editContact,
  editCustomer,
  editGeneralInfo,
  editPaymentConditions,
} from "../utils";

const EditCustomer = () => {
  const { data } = useLoaderData();
  const [customer, setCustomer] = useState(data);

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>

          <div className="font-roboto text-sm text-grisText">
            <div>Sales - General</div>
          </div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            Ventas
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Cliente: {customer?.name}
          </p>

          <div className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
            <NavLink
              to={`/sales/customer/edit/${customer.id}`}
              end
              className={({ isActive }) =>
                isActive
                  ? "flex h-[24px] items-center rounded-md bg-white px-2 py-0 font-roboto text-sm font-normal text-grisHeading shadow-none"
                  : "flex h-[24px] items-center rounded-md px-2 py-0 font-roboto text-sm font-normal leading-4 text-grisSubText"
              }
            >
              <span>Información</span>
            </NavLink>
            <NavLink
              to={`/sales/customer/edit/${customer.id}/resumen`}
              className={({ isActive }) =>
                isActive
                  ? "flex h-[24px] items-center rounded-md bg-white px-2 py-0 font-roboto text-sm font-normal text-grisHeading shadow-none"
                  : "flex h-[24px] items-center rounded-md px-2 py-0 font-roboto text-sm font-normal leading-4 text-grisSubText"
              }
            >
              <span>Resumen</span>
            </NavLink>
          </div>
        </div>

        <Outlet context={[customer]}/>
      </div>
    </div>
  );
};

export default EditCustomer;

export async function Action({ request }) {
  const data = await request.formData();
  const type = data.get("type");

  switch (type) {
    case "customer_edit":
      await editCustomer(data);
      break;

    case "destroy_customer":
      await destroyCustomer(data);
      return redirect("/sales");

    case "generalInfo":
      if (!!data.get("info_id")) {
        await editGeneralInfo(data);
      } else {
        await createGeneralInfo(data);
      }
      break;

    case "contact":
      if (!!data.get("contact_id")) {
        await editContact(data);
      } else {
        await createContact(data);
      }
      break;
    case "destroy_contact":
      await destroyContact(data);
      break;
    case "createBilling":
      await createBillingInfo(data);
      break;
    case "editBilling":
      await editBillingInfo(data);
      break;
    case "destroyBilling":
      await destroyBillingInfo(data);
      break;
    case "paymentConditions":
      if (!!data.get("payment_id")) {
        editPaymentConditions(data);
      } else {
        createPaymentConditions(data);
      }
      break;
  }
  return "0";
}

//
//     case "invoceInformation":
//       if (!!data.get("billing_id")) {
//         await editBillingInfo(data);
//       } else {
//         await createBillingInfo(data);
//       }
//       break;
//     case "destroy_invoice":
//       destroyBillingInfo(data);
//       break;
//     case "paymentConditions":
//       if (!!data.get("payment_id")) {
//         editPaymentConditions(data);
//       } else {
//         await createPaymentConditions(data);
//       }
//       break;
