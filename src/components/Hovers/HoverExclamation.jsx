import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IonIcon } from "@ionic/react";
import { cn } from "@/lib/utils";

export function HoverExclamation({
  message,
  icon,
  classNameContent,
  classNameTrigger,
}) {
  return (
    <HoverCard>
      <HoverCardTrigger
        asChild
        className={cn("text-[#44444F]", classNameTrigger)}
      >
        <IonIcon icon={icon} className="h-6 w-6" />
      </HoverCardTrigger>
      <HoverCardContent
        className={cn(
          "text-roboto max-w-80 bg-[#44444F]/50 text-xs font-semibold text-white border-none",
          classNameContent,
        )}
      >
        {message}
      </HoverCardContent>
    </HoverCard>
  );
}
