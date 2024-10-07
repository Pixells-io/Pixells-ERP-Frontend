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

function DatePicker({
  title,
  name,
  value,
  onChange,
  disabled,
  className,
  placeholder,
  required,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <input
        type="text"
        name={name}
        // className="hidden"
        // hidden
        className="sr-only"
        value={value}
        required={required}
        onChange={() => {}}
      />
      {!!placeholder && (
        <p className="mb-1 text-[10px] font-normal text-grisText">
          {placeholder}
        </p>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            variant={"outline"}
            className={cn(
              "flex h-[32px] items-center gap-x-1 rounded-[10px] border border-[#D7D7D7] text-sm text-[#44444f]",
              className,
            )}
          >
            {value ? format(value, "PP") : <span>{title}</span>}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={new Date(value)}
            onSelect={(e) => {
              onChange(e), setOpen(false);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
