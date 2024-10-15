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

function CommentsLead({ leadId, comments, process }) {
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
          <DropdownMenuTrigger className="flex h-7 w-7 items-center justify-center rounded-full rounded-bl-none bg-grisDisabled">
            <Avatar className="size-6">
              <AvatarImage
                src={comments?.slice(-1)[0]?.img}
                className="size-6"
              />
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
                              : "Hace " + comment?.diff + " dias"}{" "}
                            &bull; {comment?.hour}
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
                  action={`/crm/dashboard/${process}`}
                  id="lead-comment-form"
                  name="lead-comment"
                >
                  <input
                    type="text"
                    name="comment"
                    className="group flex rounded-lg bg-grisBg px-4 py-2 text-grisSubText placeholder:font-roboto placeholder:font-light placeholder:text-grisSubText"
                    placeholder="Escribe un comentario"
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
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </HoverCardTrigger>
      {open != true ? (
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
                          : "Hace " + comment?.diff + " dias"}{" "}
                        &bull; {comment?.hour}
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
      ) : (
        false
      )}
    </HoverCard>
  );
}

export default CommentsLead;
