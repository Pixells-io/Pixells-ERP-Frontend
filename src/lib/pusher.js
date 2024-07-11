import Pusher from "pusher-js";
import Cookies from "js-cookie";

export const pusherClient = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true,
  channelAuthorization: {
    endpoint: import.meta.env.VITE_PUSHER_APP_KEY,
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
    },
  },
});
