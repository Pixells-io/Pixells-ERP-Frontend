import Pusher from "pusher-js";
import Cookies from "js-cookie";

export const pusherClient = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true,
  authEndpoint: "https://demoback.pixells.io/broadcasting/auth",
  auth: {
    headers: {
      Authorization: "Bearer " + Cookies.get("token"), // here | value of "token" can get from backend
    },
  },
  /*channelAuthorization: {
    endpoint: `https://demoback.pixells.io/broadcasting/auth`,
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
    },
  },*/
});
