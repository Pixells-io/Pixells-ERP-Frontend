import { useState } from "react";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  checkmarkOutline,
  closeCircle,
  closeOutline,
} from "ionicons/icons";

function ExamQuestionShow({
  question,
  localData,
  setLocalData,
  questionIndex,
  updateQuestionText,
  updateAnswerText,
}) {
  const [questionText, setQuestionText] = useState(question?.question || "");
  const [answers, setAnswers] = useState(question?.answers || []);

  console.log("question data:", questionText);

  const onChangeAnswer = (answerIndex, e) => {
    // Use the passed updateAnswerText function to update the answer text
    updateAnswerText(questionIndex, answerIndex, e.target.value);
  };
  // console.log(index);
  return (
    <div className="flex w-[520px] flex-col rounded-2xl bg-blancoForms drop-shadow">
      <div className="flex items-center justify-between px-6 py-3">
        <p className="font-medium text-grisText">Pregunta</p>
      </div>
      <div className="flex gap-2 border-t px-4 py-4">
        <input
          value={question.question}
          onChange={(e) => updateQuestionText(questionIndex, e.target.value)}
          type="text"
          placeholder="Escribe la pregunta"
          className="mr-10 w-full border-b bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-4">
        {question?.answers.map((answer, i) => (
          <div className="flex items-center gap-2" key={i}>
            <input
              value={answer.answer}
              onChange={(e) => onChangeAnswer(i, e)}
              type="text"
              placeholder="Escribe una respuesta"
              className="w-3/5 bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
            />
            {answer.correct == 1 ? (
              <IonIcon
                icon={checkmarkOutline}
                className="h-5 w-5 hover:text-green-700"
              ></IonIcon>
            ) : (
              <IonIcon
                icon={closeOutline}
                className="h-5 w-5 hover:text-red-700"
              ></IonIcon>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamQuestionShow;
