import React from "react";

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
  onChangeType,
  onChangeAnswer,
  onChangeCheckBox,
}) {
  const questionIndex = index;
  return (
    <div className="flex w-[520px] flex-col rounded-2xl bg-blancoForms drop-shadow">
      <div className="flex items-center justify-between px-6 py-3">
        <p className="font-medium text-grisText">Question {index + 1}</p>
        {index !== 0 && (
          <button type="button" onClick={() => removeQuestion(index)}>
            <IonIcon
              icon={closeCircle}
              size=""
              className="h-5 w-5 text-grisDisabled hover:text-grisText"
            ></IonIcon>
          </button>
        )}
      </div>
      <div className="flex gap-2 border-t px-4 py-4">
        <input
          value={question.question}
          onChange={(e) => onChangeQuestion(index, e)}
          type="text"
          placeholder="Write the question"
          className="mr-10 w-full border-b bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
        />
        <Select onValueChange={(e) => onChangeType(index, e)}>
          <SelectTrigger className="w-[100px] border-0 border-b bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs">
            <SelectValue placeholder="Type" className="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Singular</SelectItem>
            <SelectItem value="1">Multiple</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 px-4 py-4">
        {question?.answers?.map((answer, i) => (
          <ExamAnswer
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
