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

function ExamAnswer({
  answer,
  index,
  addAnswer,
  questionIndex,
  removeAnswer,
  answersCount,
  onChangeAnswer,
  onChangeCheckBox,
  questionType,
  puntuacion,
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        onChange={(e) => onChangeAnswer(questionIndex, index, e)}
        value={answer.answer}
        type="text"
        placeholder="Escribe una respuesta"
        className=" placeholder:bg-blancoForms text-xs placeholder:text-xs placeholder:p-2 p-2 w-3/5 bg-blancoForms"
      />
      <Select onValueChange={(e) => onChangeCheckBox(questionIndex, index, e)}>
        <SelectTrigger className="placeholder:bg-blancoForms border-0 border-b text-xs placeholder:text-xs placeholder:p-2 p-2 bg-blancoForms w-[100px]">
          <SelectValue placeholder="Puntuacion" className="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
        </SelectContent>
      </Select>

      {(index !== 0 || answersCount !== index + 1) && (
        <button
          type="button"
          className="flex items-center"
          onClick={() => removeAnswer(index, questionIndex)}
        >
          <IonIcon
            icon={closeCircle}
            size=""
            className="text-grisDisabled hover:text-grisText w-5 h-5"
          ></IonIcon>
        </button>
      )}

      {answersCount == index + 1 && (
        <button
          type="button"
          className="flex items-center"
          onClick={() => addAnswer(questionIndex)}
        >
          <IonIcon
            icon={addCircleOutline}
            size=""
            className="text-primarioBotones hover:text-primario w-5 h-5"
          ></IonIcon>
        </button>
      )}
    </div>
  );
}

export default ExamAnswer;
