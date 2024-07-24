import React from "react";

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
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        onChange={(e) => onChangeAnswer(questionIndex, index, e)}
        value={answer.answer}
        type="text"
        placeholder="Write an answer"
        className=" placeholder:bg-blancoForms text-xs placeholder:text-xs placeholder:p-2 p-2 w-3/5 bg-blancoForms"
      />
      {questionType == "" ? (
        <p className="text-[8px] ">Select a type</p>
      ) : (
        <input
          onChange={(e) => onChangeCheckBox(questionIndex, index)}
          checked={answer.correct}
          type="checkbox"
          // className="appearance-none rounded-full border border-grisText h-4 w-4"
        />
      )}

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
