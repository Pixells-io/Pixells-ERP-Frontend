"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IonIcon } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";

export default function DateInput() {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "flex items-center gap-2 w-full truncate justify-start text-[10px] rounded-none border-b font-light active:border-primarioBotones focus:border-primarioBotones",
            !date && "text-muted-foreground"
          )}
        >
          <IonIcon className="w-3 h-3" icon={calendarOutline}></IonIcon>
          {date ? format(date, "PP") : <span>Fecha inicio</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
