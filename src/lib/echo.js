import Cookies from "js-cookie";
import Echo from "laravel-echo";

export const EchoServer = new Echo({
  broadcaster: "pusher",
  key: "c0b005198f54bf82285b",
  wsHost: "https://demoback.pixells.io",
  cluster: "us2",
  authEndpoint: "https://demoback.pixells.io/broadcasting/auth",
  auth: {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + Cookies.get("token"),
    },
  },
  wsPort: "443",
});
