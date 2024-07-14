import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  XCircle,
} from "lucide-react";

import { IonIcon } from "@ionic/react";
import { personCircle } from "ionicons/icons";

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

function UserSelect({ users, leadAssigned }) {
  const { data } = users;
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState(leadAssigned);

  console.log(selectedStatus);
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="hidden"
        readOnly
        value={selectedStatus?.id}
        name="assigned_id"
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button type="button" className="flex">
            {selectedStatus !== "" ? (
              <>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={selectedStatus?.image || selectedStatus?.user_image}
                  />
                  <AvatarFallback>
                    {selectedStatus?.name?.slice(1)}
                  </AvatarFallback>
                </Avatar>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <IonIcon
                    icon={personCircle}
                    className="h-8 w-8 text-grisText"
                  />
                </div>
              </>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Select new assign" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {data?.map((user, i) => (
                  <CommandItem
                    key={user.id}
                    className="flex gap-2"
                    value={user.id}
                    onSelect={() => {
                      setSelectedStatus(
                        data.find((item, i) => user.id === item.id),
                      );
                      setOpen(false);
                    }}
                  >
                    <Avatar className="size-5">
                      <AvatarImage src={user?.user_image} />
                      <AvatarFallback>
                        {selectedStatus?.name?.slice(1)}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      {user?.name} {user?.last_name} {user?.second_last_name}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default UserSelect;
