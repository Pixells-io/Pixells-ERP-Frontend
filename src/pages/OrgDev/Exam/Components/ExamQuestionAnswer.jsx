import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  checkmarkOutline,
  closeCircle,
  closeOutline,
} from "ionicons/icons";

function ExamQuestionAnswer({ question }) {
  return (
    <div className="flex flex-col rounded-2xl bg-blancoForms w-[520px] drop-shadow mt-4">
      <div className="flex px-6 py-3 items-center justify-between">
        <p className="font-medium text-grisText">Pregunta</p>
      </div>
      <div className="flex gap-2 border-t px-4 py-4">
        <input
          value={question?.question}
          type="text"
          placeholder="Escribe la pregunta"
          className=" placeholder:bg-blancoForms border-b text-xs placeholder:text-xs w-full mr-10 placeholder:p-2 p-2 bg-blancoForms"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-4">
        {question?.answers.map((answer, i) => (
          <div className="flex items-center gap-2" key={i}>
            <input
              value={answer.answer}
              type="text"
              placeholder="Escribe una respuesta"
              className=" placeholder:bg-blancoForms text-xs placeholder:text-xs placeholder:p-2 p-2 w-3/5 bg-blancoForms"
            />
            <input name={question.id + "/" + answer.id} type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamQuestionAnswer;
