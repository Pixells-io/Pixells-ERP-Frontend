import React, { useEffect, useState } from "react";
import { useParams, useSubmit } from "react-router-dom";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

function DatePickerPM({ name, dataDate, activity_id }) {
  const submit = useSubmit();
  const { id, projectId } = useParams();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dataDate.replace(/-/g, "/"));
  // const [formated, setFormated] = useState("");

  function onDateChangeSubmit(e) {
    // setDate(e);
    // setOpen(false);
    // const formData = new FormData();
    // formData.append("activity_id", activity_id);
    // formData.append(name, e);
    // formData.append("action", "edit");
    // submit(formData, {
    //   method: "post",
    //   action: `/project-manager/${id}/projects/${projectId}`,
    // });
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
              "w-full justify-between border-none bg-inherit px-1 py-0 font-roboto text-xs font-normal text-grisHeading focus-visible:ring-primarioBotones",
              !date && "text-muted-foreground h-[23px] min-w-[76px] flex justify-center rounded-lg bg-gris text-[10px] font-normal text-[#CCCCCC]",
            )}
          >
            {date ? (
              format(date, "PP")
            ) : (
              <p>
                DD/MM/AA
              </p>
            )}
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

export default DatePickerPM;
