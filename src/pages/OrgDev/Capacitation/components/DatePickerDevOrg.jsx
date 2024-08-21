import React, { useEffect, useState } from "react";
import { useParams, useSubmit } from "react-router-dom";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

function DatePickerDevOrg({ name, dataDate, capacitation_id }) {
  const submit = useSubmit();
  const { id, projectId } = useParams();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dataDate.replace(/-/g, "/"));
  // const [formated, setFormated] = useState("");

  function onDateChangeSubmit(e) {
    setDate(e);
    setOpen(false);
    const formData = new FormData();

    formData.append("training_id", capacitation_id);
    formData.append(name, e);
    formData.append("action", "4");
    submit(formData, {
      method: "post",
      action: `/org-development/capacitation`,
    });
  }

  return (
    <div className="flex w-fit">
      {/* <input
        name={name}
        className="hidden"
        hidden
        defaultValue={date}
        readOnly
      /> */}
      <Popover open={open} onOpenChange={setOpen}>
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
            onSelect={onDateChangeSubmit}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePickerDevOrg;
