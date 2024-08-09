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

function ExamQuestionShow({
  question,
  localData,
  setLocalData,
  questionIndex,
  updateQuestionText,
  updateAnswerText,
  onChangeType,
}) {
  const [questionText, setQuestionText] = useState(question?.question || "");
  const [answers, setAnswers] = useState(question?.answers || []);
  const [questionType, setQuestionType] = useState(question?.type || "");

  const onChangeAnswer = (answerIndex, e) => {
    // Use the passed updateAnswerText function to update the answer text
    updateAnswerText(questionIndex, answerIndex, e.target.value);
  };
  return (
    <div className="flex w-[520px] flex-col rounded-2xl bg-[#FBFBFB] drop-shadow">
      <div className="flex items-center justify-between px-6 py-3">
        <p className="font-medium text-grisText">Question</p>
        <Select onValueChange={(e) => onChangeType(questionIndex, e)}>
          <SelectTrigger className="w-[100px] border-0 border-b bg-[#FBFBFB] p-2 text-xs placeholder:bg-[#FBFBFB] placeholder:p-2 placeholder:text-xs">
            <SelectValue placeholder="Type" className="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Singular</SelectItem>
            <SelectItem value="1">Multiple</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2 border-t px-4 py-4">
        <input
          value={question.question}
          onChange={(e) => updateQuestionText(questionIndex, e.target.value)}
          type="text"
          placeholder="Write the question"
          className="mr-10 w-full border-b bg-[#FBFBFB] p-2 text-xs placeholder:bg-[#FBFBFB] placeholder:p-2 placeholder:text-xs"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-4">
        {question?.answers.map((answer, i) => (
          <div className="flex items-center gap-2" key={i}>
            <input
              value={answer.answer}
              onChange={(e) => onChangeAnswer(i, e)}
              type="text"
              placeholder="Write an answer"
              className="w-3/5 bg-[#FBFBFB] p-2 text-xs placeholder:bg-[#FBFBFB] placeholder:p-2 placeholder:text-xs"
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
            {questionType == "" ? (
              <p className="text-[8px]">Select a Type</p>
            ) : (
              <input
                onChange={(e) => onChangeCheckBox(questionIndex, index)}
                checked={answer.correct}
                type="checkbox"
                // className="appearance-none rounded-full border border-grisText h-4 w-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamQuestionShow;
