import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import CommentsLead from "@/pages/CRM/Leads/components/CommentsLead";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal, settingsOutline } from "ionicons/icons";

function StatusTab() {
  const data = {
    pending: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
    ],
    inProgress: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 90,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 21,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 90,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 21,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 90,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 21,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 90,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 21,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 90,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
    ],
    completed: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 100,

        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
    ],
    canceled: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "4",
        type: "2",
        advance: 80,
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
    ],
  };

  const [dragLeadId, setDragLeadId] = useState(0);
  const [dragLeadColumn, setDragLeadColumn] = useState(0);

  const [pending, setPending] = useState(data?.pending);
  const [inProgress, setInProgress] = useState(data?.inProgress);
  const [completed, setCompleted] = useState(data?.completed);
  const [canceled, setCanceled] = useState(data?.canceled);

  const startDrag = (evt, item, column) => {
    setDragLeadId(item.id);
    setDragLeadColumn(column);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="flex h-full w-full gap-4 overflow-auto">
      {/* pending */}
      <div
        className={`flex w-64 flex-shrink-0 flex-col rounded-xl bg-[#44444F0D] px-2 py-4`}
        onDragOver={(evt) => draggingOver(evt)}
        onDrop={(evt) => onDrop(evt, stage.id)}
      >
        <div className="flex items-center justify-between">
          <span
            className={`rounded-lg bg-[#44444F4D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            Pendiente
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {pending.length}
          </span>
        </div>
        <div className="overflow-auto">
          {pending?.map((p, index) => (
            <div
              className="group relative my-4 rounded-lg bg-white px-2 py-2"
              key={index}
              onDragStart={(evt) => startDrag(evt, p, pending.id)}
              draggable="true"
            >
              <Link
                to={`/crm/leads/${p.id}`}
                className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
                title={"Nombre"}
              >
                {p.name}
              </Link>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Asignar a otro usuario
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="mb-2 mt-2 flex gap-2">
                {p.status == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#CBF4C9] px-2 text-[10px] font-normal text-[#0E6245]">
                    Activo
                  </span>
                ) : p.stages == 2 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFEDC7] px-2 text-[10px] font-normal text-[#624E0E]">
                    Suspendido
                  </span>
                ) : p.status == 3 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFC7C7] px-2 text-[10px] font-normal text-[#620E0E]">
                    Cancelado
                  </span>
                ) : p.status == 4 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#C7CBFF] px-2 text-[10px] font-normal text-[#1C0E62]">
                    Completado
                  </span>
                ) : (
                  false
                )}
                {p.type == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EC5FF4D] px-2 text-[10px] font-normal text-[#0D4381]">
                    Persona Fisica
                  </span>
                ) : (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EFF9B4D] px-2 text-[10px] font-normal text-[#0C624B]">
                    Persona Moral
                  </span>
                )}
              </div>
              <span className="font-normal- font-roboto text-xs text-grisHeading">
                Informacion de Actividades Prueba de largo lo
              </span>
              <div className="flex items-center">
                <div className="flex w-1/2 flex-row items-center gap-x-2">
                  <Progress
                    value={p.advance}
                    className="h-[4px] bg-[#D7D7D7]"
                    color={`${p.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                  />
                  <span className="text-[10px] font-medium text-[#696974B2]">
                    {p.advance}%
                  </span>
                </div>
                <div className="flex w-1/2 justify-end gap-x-2">
                  <CommentsLead leadId={1} comments={p?.comments} process={1} />
                  <Avatar className="size-6">
                    <AvatarImage src={p.assigned?.img} title={p.assigned?.name} />
                  </Avatar>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* inProgress */}
      <div
        className={`flex w-64 flex-shrink-0 flex-col rounded-xl bg-[#FAA3640D] px-2 py-4`}
        onDragOver={(evt) => draggingOver(evt)}
        onDrop={(evt) => onDrop(evt, stage.id)}
      >
        <div className="flex items-center justify-between">
          <span
            className={`rounded-lg bg-[#FAA3644D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            En Progreso
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {inProgress.length}
          </span>
        </div>
        <div className="overflow-auto">
          {inProgress?.map((iP, index) => (
            <div
              className="group relative my-4 rounded-lg bg-white px-2 py-2"
              key={index}
              onDragStart={(evt) => startDrag(evt, iP, inProgress.id)}
              draggable="true"
            >
              <Link
                to={`/crm/leads/${iP.id}`}
                className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
                title={"Nombre"}
              >
                {iP.name}
              </Link>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Asignar a otro usuario
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="mb-2 mt-2 flex gap-2">
                {iP.status == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#CBF4C9] px-2 text-[10px] font-normal text-[#0E6245]">
                    Activo
                  </span>
                ) : iP.stages == 2 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFEDC7] px-2 text-[10px] font-normal text-[#624E0E]">
                    Suspendido
                  </span>
                ) : iP.status == 3 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFC7C7] px-2 text-[10px] font-normal text-[#620E0E]">
                    Cancelado
                  </span>
                ) : iP.status == 4 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#C7CBFF] px-2 text-[10px] font-normal text-[#1C0E62]">
                    Completado
                  </span>
                ) : (
                  false
                )}
                {iP.type == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EC5FF4D] px-2 text-[10px] font-normal text-[#0D4381]">
                    Persona Fisica
                  </span>
                ) : (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EFF9B4D] px-2 text-[10px] font-normal text-[#0C624B]">
                    Persona Moral
                  </span>
                )}
              </div>
              <span className="font-normal- font-roboto text-xs text-grisHeading">
                Informacion de Actividades Prueba de largo lo
              </span>
              <div className="flex items-center">
                <div className="flex w-1/2 flex-row items-center gap-x-2">
                  <Progress
                    value={iP.advance}
                    className="h-[4px] bg-[#D7D7D7]"
                    color={`"${iP.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                  />
                  <span className="text-[10px] font-medium text-[#696974B2]">
                    {iP.advance}%
                  </span>
                </div>
                <div className="flex w-1/2 justify-end gap-x-2">
                  <CommentsLead
                    leadId={1}
                    comments={iP?.comments}
                    process={1}
                  />
                  <Avatar className="size-6">
                    <AvatarImage
                      src={iP.assigned?.img}
                      title={iP.assigned?.name}
                    />
                  </Avatar>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* completed */}
      <div
        className={`w-64 flex-shrink-0 flex flex-col rounded-xl bg-[#00BE4C0D] px-2 py-4`}
        onDragOver={(evt) => draggingOver(evt)}
        onDrop={(evt) => onDrop(evt, stage.id)}
      >
        <div className="flex items-center justify-between">
          <span
            className={`rounded-lg bg-[#00BE4C4D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            Completado
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {completed.length}
          </span>
        </div>
        <div className="overflow-auto">
          {completed?.map((c, index) => (
            <div
              className="group relative my-4 rounded-lg bg-white px-2 py-2"
              key={index}
              onDragStart={(evt) => startDrag(evt, c, completed.id)}
              draggable="true"
            >
              <Link
                to={`/crm/leads/${c.id}`}
                className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
                title={"Nombre"}
              >
                {c.name}
              </Link>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Asignar a otro usuario
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="mb-2 mt-2 flex gap-2">
                {c.status == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#CBF4C9] px-2 text-[10px] font-normal text-[#0E6245]">
                    Activo
                  </span>
                ) : c.stages == 2 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFEDC7] px-2 text-[10px] font-normal text-[#624E0E]">
                    Suspendido
                  </span>
                ) : c.status == 3 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFC7C7] px-2 text-[10px] font-normal text-[#620E0E]">
                    Cancelado
                  </span>
                ) : c.status == 4 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#C7CBFF] px-2 text-[10px] font-normal text-[#1C0E62]">
                    Completado
                  </span>
                ) : (
                  false
                )}
                {c.type == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EC5FF4D] px-2 text-[10px] font-normal text-[#0D4381]">
                    Persona Fisica
                  </span>
                ) : (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EFF9B4D] px-2 text-[10px] font-normal text-[#0C624B]">
                    Persona Moral
                  </span>
                )}
              </div>
              <span className="font-normal- font-roboto text-xs text-grisHeading">
                Informacion de Actividades Prueba de largo lo
              </span>
              <div className="flex items-center">
                <div className="flex w-1/2 flex-row items-center gap-x-2">
                  <Progress
                    value={c.advance}
                    className="h-[4px] bg-[#D7D7D7]"
                    color={`${c.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                  />
                  <span className="text-[10px] font-medium text-[#696974B2]">
                    {c.advance}%
                  </span>
                </div>
                <div className="flex w-1/2 justify-end gap-x-2">
                  <CommentsLead leadId={1} comments={c?.comments} process={1} />
                  <Avatar className="size-6">
                    <AvatarImage src={c.assigned?.img} title={c.assigned?.name} />
                  </Avatar>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* canceled */}
      <div
        className={`w-64 flex-shrink-0 flex flex-col rounded-xl bg-[#D7586B0D] px-2 py-4`}
        onDragOver={(evt) => draggingOver(evt)}
        onDrop={(evt) => onDrop(evt, stage.id)}
      >
        <div className="flex items-center justify-between">
          <span
            className={`rounded-lg bg-[#D7586B4D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            Cancelado
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {canceled.length}
          </span>
        </div>
        <div className="overflow-auto">
          {canceled?.map((c, index) => (
            <div
              className="group relative my-4 rounded-lg bg-white px-2 py-2"
              key={index}
              onDragStart={(evt) => startDrag(evt, c, completed.id)}
              draggable="true"
            >
              <Link
                to={`/crm/leads/${c.id}`}
                className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
                title={"Nombre"}
              >
                {c.name}
              </Link>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Asignar a otro usuario
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="mb-2 mt-2 flex gap-2">
                {c.status == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#CBF4C9] px-2 text-[10px] font-normal text-[#0E6245]">
                    Activo
                  </span>
                ) : c.stages == 2 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFEDC7] px-2 text-[10px] font-normal text-[#624E0E]">
                    Suspendido
                  </span>
                ) : c.status == 3 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#FFC7C7] px-2 text-[10px] font-normal text-[#620E0E]">
                    Cancelado
                  </span>
                ) : c.status == 4 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#C7CBFF] px-2 text-[10px] font-normal text-[#1C0E62]">
                    Completado
                  </span>
                ) : (
                  false
                )}
                {c.type == 1 ? (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EC5FF4D] px-2 text-[10px] font-normal text-[#0D4381]">
                    Persona Fisica
                  </span>
                ) : (
                  <span className="flex h-[18px] items-center rounded-lg bg-[#3EFF9B4D] px-2 text-[10px] font-normal text-[#0C624B]">
                    Persona Moral
                  </span>
                )}
              </div>
              <span className="font-normal- font-roboto text-xs text-grisHeading">
                Informacion de Actividades Prueba de largo lo
              </span>
              <div className="flex items-center">
                <div className="flex w-1/2 flex-row items-center gap-x-2">
                  <Progress
                    value={c.advance}
                    className="h-[4px] bg-[#D7D7D7]"
                    color={`${c.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                  />
                  <span className="text-[10px] font-medium text-[#696974B2]">
                    {c.advance}%
                  </span>
                </div>
                <div className="flex w-1/2 justify-end gap-x-2">
                  <CommentsLead leadId={1} comments={c?.comments} process={1} />
                  <Avatar className="size-6">
                    <AvatarImage src={c.assigned?.img} title={c.assigned?.name} />
                  </Avatar>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusTab;
