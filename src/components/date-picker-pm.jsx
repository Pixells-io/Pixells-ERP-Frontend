import React, { useEffect, useState } from "react";

import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

function DatePickerPM({ name }) {
  const [date, setDate] = useState();
  // const [formated, setFormated] = useState("");

  return (
    <div className="flex w-fit">
      <input
        name={name}
        className="hidden"
        hidden
        defaultValue={date}
        readOnly
      />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-between border-none bg-blancoBg px-1 font-roboto text-xs font-light text-grisSubText focus-visible:ring-primarioBotones",
              !date && "text-muted-foreground",
            )}
          >
            {date ? format(date, "PP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-2 h-4 w-4" />
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
    </div>
  );
}

export default DatePickerPM;
