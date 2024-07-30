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

function DatePicker({ name, defaultVal }) {
  const [date, setDate] = useState(defaultVal);
  // const [formated, setFormated] = useState("");

  return (
    <div className="flex">
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
              "w-full justify-between border-none bg-grisBg font-roboto text-xs font-light text-grisSubText focus-visible:ring-primarioBotones",
              // "w-full justify-between rounded-none border-0 bg-grisBg text-left font-normal !ring-0 !ring-offset-0 focus:border-b-2 focus:border-primario aria-[expanded=true]:border-b-2",
              !date && "text-muted-foreground",
            )}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="mr-2 h-4 w-4" />
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

export default DatePicker;
