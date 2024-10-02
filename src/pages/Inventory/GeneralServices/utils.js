import Cookies from "js-cookie";
import { json } from "react-router-dom";
import { format } from "date-fns";



  
export async function getUsers() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}organization/get-users`,
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        },
      );
      return response.json();
    } catch (error) {
      return new Response("Something went wrong...", { status: 500 });
    }
  }

  export async function getWarehouses() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}inventory/get-inventories`,
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        },
      );
  
      return response.json();
    } catch (error) {
      return new Response("Something went wrong...", { status: 500 });
    }
  }
  
  export async function getCostCenter() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}accounting/get-cost-center`,
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        },
      );
      return response.json();
    } catch (error) {
      return new Response("Ups", { status: 500 });
    }
  }
  export async function getPriceList() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}inventory/get-price-lists`,
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        },
      );
  
      return response.json();
    } catch (error) {
      return new Response("Something went wrong...", { status: 500 });
    }
  }

  export async function multiLoaderServiceGeneral() {
    const [ whareHouses,
      costCenter,
      priceList,users] = await Promise.all([
      getWarehouses(),
      getCostCenter(),
      getPriceList(),
      getUsers()
    ]);
    return json({ whareHouses, costCenter, priceList,users });
  }