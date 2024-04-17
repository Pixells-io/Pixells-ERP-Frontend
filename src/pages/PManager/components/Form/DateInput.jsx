import * as React from "react";
import { format } from "date-fns";

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

export default function DateInput({ name }) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState();

  return (
    <Popover modal={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "flex items-center gap-2 w-full truncate justify-start text-[10px] rounded-none border-b font-light active:border-primarioBotones focus:border-primarioBotones",
            !date && "text-muted-foreground"
          )}
        >
          <IonIcon className="w-3 h-3" icon={calendarOutline}></IonIcon>
          <input type="date" name={name} value={date} className="hidden" />
          {date ? (
            format(date, "PP")
          ) : name === "start_date" ? (
            <span>Fecha inicio</span>
          ) : (
            <span>Fecha fin</span>
          )}
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
