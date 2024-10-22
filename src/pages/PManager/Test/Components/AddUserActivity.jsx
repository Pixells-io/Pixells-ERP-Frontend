import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { useParams, useSubmit } from "react-router-dom";

function AddUserActivity({ activity_id, users }) {
  const params = useParams();
  const submit = useSubmit();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const arrayUsers = [];

  arrayFillUsers(users, arrayUsers);

  function arrayFillUsers(data, array) {
    let dataParse = data;

    dataParse.forEach((element) => {
      array.push({
        label: `${element.name} ${element.last_name} ${element.second_last_name}`,
        value: element.id,
        url: element.user_image,
      });
    });
  }

  function onSelectedUser(currentValue) {
    const user = arrayUsers?.filter((user) => user?.value == currentValue);
    const formData = new FormData();

    formData.append("activity_id", activity_id);
    formData.append("user_id", user[0]?.value);
    formData.append("action", "edit");

    submit(formData, {
      method: "post",
      action: `/project-manager2/project/${params.id}`,
    });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between p-0 hover:bg-blancoBg"
        >
          <IonIcon icon={add} className="h-5 w-5 text-primarioBotones" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandList>
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {arrayUsers?.map((user, i) => (
                <CommandItem
                  key={user?.value}
                  value={user?.value}
                  onSelect={() => {
                    setValue(user?.value === value ? value : user?.value);
                    setOpen(false);
                    onSelectedUser(user?.value);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === user?.label ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <div className="flex gap-2">
                    <Avatar className="flex h-6 w-6">
                      <AvatarImage src={user?.url} />
                    </Avatar>
                    {user?.label}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default AddUserActivity;
