import { useState } from "react";

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
  console.log(question?.type);

  const questionType = () => {
    if (question?.type === "0") {
      return "Singular";
    } else if (question?.type === "1") {
      return "Multiple";
    }
  };
  const type = questionType();

  const [selectedAnswers, setSelectedAnswers] = useState(
    type === "Singular" ? "" : [],
  );

  const handleSelectionChange = (answerId) => {
    if (type === "Singular") {
      setSelectedAnswers(answerId);
    } else {
      setSelectedAnswers((prevSelected) =>
        prevSelected.includes(answerId)
          ? prevSelected.filter((id) => id !== answerId)
          : [...prevSelected, answerId],
      );
    }
  };

  return (
    <div className="mt-4 flex w-[520px] flex-col rounded-2xl bg-blancoForms drop-shadow">
      <div className="flex items-center justify-between px-6 py-3">
        <p className="font-medium text-grisText">Pregunta</p>
        <p className="font-medium text-grisText">{type}</p>
      </div>
      <div className="flex gap-2 border-t px-4 py-4">
        <input
          value={question?.question}
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
              type="text"
              placeholder="Escribe una respuesta"
              className="w-3/5 bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
              readOnly
            />
            <input
              name={question.id + "/" + answer.id}
              type={
                question.type === "0" || question.type === "Singular"
                  ? "radio"
                  : "checkbox"
              }
              checked={
                question.type === "0" || question.type === "Singular"
                  ? selectedAnswers === answer.id
                  : selectedAnswers.includes(answer.id)
              }
              onChange={() => handleSelectionChange(answer.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamQuestionAnswer;
