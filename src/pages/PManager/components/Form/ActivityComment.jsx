import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
import { IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";
import { Form, useParams, useSubmit } from "react-router-dom";

function ActivityComment({ activity_id, comments }) {
  const { id, projectId } = useParams();
  const submit = useSubmit();
  const [commentInput, setCommentInput] = useState("");
  const [open, setOpen] = useState(false);

  function onInputEnter(e) {
    // console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setCommentInput("");
      setOpen(false);
    }
  }

  console.log(comments.slice(-1));
  return (
    <>
      <HoverCard>
        <HoverCardTrigger>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-full rounded-bl-none bg-grisDisabled">
              <Avatar className="size-6">
                <AvatarImage src={comments?.slice(-1)[0]?.img} />
                <AvatarFallback>??</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-[280px] w-[320px]">
              <div className="flex h-full flex-col items-center justify-between px-4">
                <div className="flex h-full flex-col gap-2 overflow-scroll pt-2">
                  {comments
                    ?.slice(0)
                    .reverse()
                    .map((comment, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-2 border-b pb-2"
                      >
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
                    action={`/project-manager/${id}/projects/${projectId}`}
                    id="activity-comment-form"
                    name="activity-comment"
                  >
                    <input
                      type="text"
                      name="comment"
                      className="group flex rounded-lg rounded-r-none bg-grisBg px-4 py-2 text-grisSubText placeholder:font-roboto placeholder:font-light placeholder:text-grisSubText"
                      placeholder="Type a comment"
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <input
                      name="activity_id"
                      className="hidden"
                      value={activity_id}
                      hidden
                      readOnly
                    />
                    <input
                      name="action"
                      className="hidden"
                      value="edit"
                      hidden
                      readOnly
                    />
                  </Form>
                  <div className="flex h-full items-center rounded-lg rounded-l-none bg-grisBg pr-5">
                    <IonIcon icon={send} className="size-6 text-primario" />
                  </div>
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
    </>
  );
}

export default ActivityComment;
