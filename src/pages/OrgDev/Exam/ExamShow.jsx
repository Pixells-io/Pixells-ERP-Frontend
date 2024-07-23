import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { redirect, useParams, useLoaderData } from "react-router-dom";
import { newInductionExam } from "../utils";
import ExamQuestionShow from "./Components/ExamQuestionShow";
import NavigationHeader from "@/components/navigation-header";

const PEOPLE = [
  {
    name: "Rodrigo Gómez",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Clarissa Reynold’s",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Alberto Lenus",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Ana Lenovsky",
    position: "Gerente de Administración",
    status: "Result",
  },
];

function ExamShow() {
  const { id } = useParams();

  const { data } = useLoaderData();
  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    setLocalData(data);
  }, []);

  const [examTitle, setExamTitle] = useState("");
  const [examDuration, setExamDuration] = useState("");

  const handleTitleChange = (event) => {
    setLocalData({ ...localData, title: event.target.value });
  };

  const handleDurationChange = (event) => {
    setLocalData({ ...localData, duration: event.target.value });
  };
  // Function to update question text
  function updateQuestionText(questionIndex, newText) {
    const updatedQuestions = localData.questions.map((question, index) => {
      if (index === questionIndex) {
        return { ...question, question: newText };
      }
      return question;
    });

    setLocalData({ ...localData, questions: updatedQuestions });
  }

  function updateAnswerText(questionIndex, answerIndex, newText) {
    // Clone the localData to avoid direct state mutation
    const updatedData = { ...localData };

    // Directly access the specific question and answer to update
    updatedData.questions[questionIndex].answers[answerIndex].answer = newText;

    // Update the state with the modified data
    setLocalData(updatedData);
  }
  function onChangeType(questionIndex, type) {
    const updatedData = { ...localData };
    updatedData.questions[questionIndex].type = type;
    setLocalData(updatedData);
    console.log(type);
  }

  function onChangeCheckBox(questionIdx, answerIdx) {
    ////Old Code
    // setQuestions(
    //   questions.map((question, idx) =>
    //     idx === questionIdx
    //       ? {
    //           ...question,
    //           answers: question.answers.map((item, i) =>
    //             i === answerIdx ? { ...item, correct: !item.correct } : item,
    //           ),
    //         }
    //       : question,
    //   ),
    // );
  }

  console.log("DATA FROM BACKEND:", data);
  console.log("DATA FROM STATE:", localData);

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              ORGANIZATION DEVELOPMENT
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            {/* <div className="text-xs">
        {leads?.data.length == 0 ? "0" : leads?.data.length}{" "}
        {leads?.data.length == 1 ? "lead" : "leads"}
      </div>
      <div className="text-2xl">&bull;</div>
      <div className="text-xs">
        {loaderClients?.data.length == 0
          ? "0"
          : loaderClients?.data.length}{" "}
        {loaderClients?.data.length == 1 ? "client" : "clients"}
      </div> */}
          </div>
        </div>
        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Show Exam
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              backgroundColor: "red",
            }}
          >
            {/* <button onClick={handleToggleEditMode}>Edit</button> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 overflow-auto">
          <div className="flex w-[520px] flex-col rounded-2xl bg-[#FBFBFB] drop-shadow">
            <div className="px-6 py-3">
              <p className="font-medium text-grisText">Exam Name</p>
            </div>
            <div className="flex gap-2 border-t px-4 py-4">
              <input
                type="text"
                name="exam_title"
                value={localData?.title}
                onChange={handleTitleChange}
                placeholder="Write the name of the exam"
                className="mr-10 w-full border-b bg-[#FBFBFB] p-2 text-xs placeholder:bg-[#FBFBFB] placeholder:p-2 placeholder:text-xs"
              />
              <input
                type="number"
                name="exam_duration"
                value={localData?.duration}
                onChange={handleDurationChange}
                className="w-[80px] border-b bg-[#FBFBFB] p-2 text-xs placeholder:bg-[#FBFBFB] placeholder:p-2 placeholder:text-xs"
              />
              <span className="self-end text-[8px] text-grisSubText">
                Minutes
              </span>
            </div>
          </div>
          {/* Show Questions */}
          {localData?.questions.map((question, i) => (
            <ExamQuestionShow
              key={i}
              questionIndex={i}
              question={question}
              localData={localData}
              setLocalData={setLocalData}
              updateQuestionText={updateQuestionText}
              updateAnswerText={updateAnswerText}
              onChangeType={onChangeType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExamShow;
