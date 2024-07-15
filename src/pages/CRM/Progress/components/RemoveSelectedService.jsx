import React, { useEffect, useState } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";

function RemoveSelectedService({ serviceId, name }) {
  const [modal, setModal] = useState(false);
  const params = useParams();
  const navigation = useNavigation();

  // useEffect(() => {
  //  if (navigation.state === "idle") {
  //    setModal(false);
  //   }
  //  }, [navigation.state]);

  function deleteService() {
    setModal(true);
  }

  return <></>;
}

export default RemoveSelectedService;
