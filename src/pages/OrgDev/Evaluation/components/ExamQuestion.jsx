import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, closeCircle } from "ionicons/icons";
import ExamAnswer from "./ExamAnswer";

function ExamQuestion({
  question,
  index,
  removeQuestion,
  addAnswer,
  removeAnswer,
  onChangeQuestion,
  onChangeAnswer,
  onChangeCheckBox,
}) {
  // console.log(index);
  const questionIndex = index;
  const [puntuacion, setPuntuacion] = useState(["1", "2", "3", "4"]);
  return (
    <div className="flex flex-col rounded-2xl bg-blancoForms w-[520px] drop-shadow">
      <div className="flex px-6 py-3 items-center justify-between">
        <p className="font-medium text-grisText">Pregunta {index + 1}</p>
        {index !== 0 && (
          <button type="button" onClick={() => removeQuestion(index)}>
            <IonIcon
              icon={closeCircle}
              size=""
              className="text-grisDisabled hover:text-grisText w-5 h-5"
            ></IonIcon>
          </button>
        )}
      </div>
      <div className="flex gap-2 border-t px-4 py-4">
        <input
          value={question.question}
          onChange={(e) => onChangeQuestion(index, e)}
          type="text"
          placeholder="Escribe la pregunta"
          className=" placeholder:bg-blancoForms border-b text-xs placeholder:text-xs w-full mr-10 placeholder:p-2 p-2 bg-blancoForms"
        />
      </div>

      <div className="flex flex-col gap-2 px-4 py-4">
        {question?.answers?.map((answer, i) => (
          <ExamAnswer
            puntuacion={puntuacion}
            key={i}
            answer={answer}
            questionIndex={questionIndex}
            index={i}
            addAnswer={addAnswer}
            removeAnswer={removeAnswer}
            answersCount={question?.answers?.length}
            onChangeAnswer={onChangeAnswer}
            onChangeCheckBox={onChangeCheckBox}
            questionType={question?.type}
          />
        ))}
      </div>
    </div>
  );
}

export default ExamQuestion;
