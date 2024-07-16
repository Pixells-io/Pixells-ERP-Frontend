import React, { useState } from "react";
import { Form, useParams, useSubmit } from "react-router-dom";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline, send } from "ionicons/icons";

function CommentsLead({ leadId, comments }) {
  const { id, projectId } = useParams();
  const submit = useSubmit();
  const [commentInput, setCommentInput] = useState("");
  const [open, setOpen] = useState(false);

  function onInputEnter(e) {
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setCommentInput("");
      setOpen(false);
    }
  }
  return (
    <HoverCard>
      <HoverCardTrigger>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-full rounded-bl-none bg-grisDisabled">
            <Avatar className="size-6">
              <AvatarImage src={comments?.slice(-1)[0]?.img} />
              <AvatarFallback>
                <IonIcon src={chatbubbleEllipsesOutline} className="size-4" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-[280px] w-[320px]">
            <div className="flex h-full flex-col justify-between px-4">
              <div className="flex h-full flex-col gap-2 overflow-scroll pt-2">
                {comments
                  ?.slice(0)
                  .reverse()
                  .map((comment, i) => (
                    <div key={i} className="flex flex-col gap-2 border-b pb-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="flex h-6 w-6">
                          <AvatarImage src={comment?.img} />
                          <AvatarFallback>??</AvatarFallback>
                        </Avatar>
                        <p className="text-[12px] text-grisText">
                          {comment?.name} &bull;{" "}
                          <span className="text-[10px] text-[#ABABAB]">
                            {comment?.diff == 0
                              ? "Hoy"
                              : "Hace " + comment?.diff + " dias"}
                          </span>
                        </p>
                      </div>
                      <p className="flex text-[10px] text-grisHeading">
                        {comment?.comment}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="flex items-center py-4">
                <Form
                  onKeyDown={onInputEnter}
                  method="post"
                  action={`/crm/leads`}
                  id="lead-comment-form"
                  name="lead-comment"
                >
                  <input
                    type="text"
                    name="comment"
                    className="group flex rounded-lg bg-grisBg px-4 py-2 text-grisSubText placeholder:font-roboto placeholder:font-light placeholder:text-grisSubText"
                    placeholder="Type a comment"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                  />
                  <input
                    name="lead_id"
                    className="hidden"
                    value={leadId}
                    hidden
                    readOnly
                  />
                  <input
                    name="action"
                    className="hidden"
                    value="add-comment-lead"
                    hidden
                    readOnly
                  />
                </Form>
                {/* <div className="flex h-full items-center rounded-lg rounded-l-none bg-grisBg pr-5">
                <IonIcon icon={send} className="size-6 text-primario" />
              </div> */}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col">
          {comments
            ?.slice(0)
            .reverse()
            .map((comment, i) => (
              <div key={i} className="flex flex-col gap-2 border-b py-2">
                <div className="flex items-center gap-2">
                  <Avatar className="flex h-6 w-6">
                    <AvatarImage src={comment?.img} />
                    <AvatarFallback>??</AvatarFallback>
                  </Avatar>
                  <p className="text-[12px] text-grisText">
                    {comment?.name} &bull;{" "}
                    <span className="text-[10px] text-[#ABABAB]">
                      {comment?.diff == 0
                        ? "Hoy"
                        : "Hace " + comment?.diff + " dias"}
                    </span>
                  </p>
                </div>
                <p className="flex text-left text-[10px] text-grisHeading">
                  {comment?.comment}
                </p>
              </div>
            ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default CommentsLead;
