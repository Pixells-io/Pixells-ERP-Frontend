import Pusher from "pusher-js";
import Cookies from "js-cookie";

// export const pusherClient = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
//   cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
//   forceTLS: true,
//   channelAuthorization: {
//     endpoint: `${import.meta.env.VITE_SERVER_URL_WtP}broadcasting/auth`,
//     headers: {
//       Authorization: "Bearer " + Cookies.get("token"),
//       // Accept: "application/json",
//     },
//   },
// });

let pusherClient;

export function createPusherClient() {
  if (!pusherClient && Cookies.get("token")) {
    pusherClient = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
      cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
      forceTLS: true,
      channelAuthorization: {
        endpoint: `${import.meta.env.VITE_SERVER_URL_WtP}broadcasting/auth`,
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
          // Accept: "application/json",
        },
      },
    });
  }
  return pusherClient;
}
