import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

function ShareSettins({ id, users, positions, areas }) {
  const navigation = useNavigation();
  // const [users, setUsers] = useState(users);
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(1);

  // const users = [
  //   {
  //     id: 1,
  //     name: "Antonio Castro",
  //     img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Agustin Hdez",
  //     img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   },
  //   {
  //     id: 3,
  //     name: "Diego Guzmán",
  //     img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   },
  //   {
  //     id: 4,
  //     name: "Luis",
  //     img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   },
  // ];

  const creator = {
    id: 1,
    name: "Agustin Hdez",
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const anotherUsers = [
    {
      id: 3,
      name: "Diego Guzmán",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Agustin Hdez",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Luis",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog
      open={true}
      onOpenChange={(e) => {
        setModal(e);
        setStep(1);
      }}
    >
      <DialogTrigger className="flex h-8 w-20 items-center justify-center gap-1 rounded-lg bg-[#00A9B3] text-xs text-white">
        Compartir
      </DialogTrigger>
      <DialogContent
        className={`max-h-[80vh] overflow-auto rounded-[0px] px-0 pt-0 sm:max-w-[450px] ${step == 1 && "pb-[50px]"}`}
      >
        <DialogHeader className="border-b">
          <DialogTitle className="px-4 py-3 font-poppins text-xs font-semibold text-grisHeading">
            {step == 1
              ? "Compartir este objetivo"
              : "Configuración para Compartir"}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>

        {/* step 1 */}
        <StepOne
          step={step}
          setStep={setStep}
          users={users}
          positions={positions}
          areas={areas}
          creator={creator}
          anotherUsers={anotherUsers}
        />

        {/* step 2 */}
        <StepTwo step={step} setStep={setStep} />
      </DialogContent>
    </Dialog>
  );
}

export default ShareSettins;
