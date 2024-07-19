import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { redirect, useParams, useLoaderData } from "react-router-dom";
import { newInductionExam } from "../utils";
import ExamQuestionShow from "./Components/ExamQuestionShow";

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

  const [editMode, setEditMode] = useState(false);

  const [examTitle, setExamTitle] = useState("");
  const [examDuration, setExamDuration] = useState("");

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
    console.log("editMode", editMode);
  };

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

  function onChangeCheckBox(questionIdx, answerIdx) {
    setQuestions(
      questions.map((question, idx) => {
        if (idx === questionIdx) {
          // Checar el tipo de pregunta si es single
          if (question.type === "0") {
            const updatedAnswers = question.answers.map((item, i) => ({
              ...item,
              correct: false, // Set all answers to incorrect
            }));

            // setear la respuesta correcta
            updatedAnswers[answerIdx].correct =
              !question.answers[answerIdx].correct;

            return { ...question, answers: updatedAnswers };
          } else {
            // para las multiples
            return {
              ...question,
              answers: question.answers.map((item, i) =>
                i === answerIdx ? { ...item, correct: !item.correct } : item,
              ),
            };
          }
        } else {
          return question;
        }
      }),
    );
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
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">org-dev</div>
        </div>
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
          <div className="flex w-[520px] flex-col rounded-2xl bg-blancoForms drop-shadow">
            <div className="px-6 py-3">
              <p className="font-medium text-grisText">Nombre del Exámen</p>
            </div>
            <div className="flex gap-2 border-t px-4 py-4">
              <input
                type="text"
                name="exam_title"
                value={localData?.title}
                onChange={handleTitleChange}
                placeholder="Escribe el nombre del exámen"
                className="mr-10 w-full border-b bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
              />
              <input
                type="number"
                name="exam_duration"
                value={localData?.duration}
                onChange={handleDurationChange}
                className="w-[80px] border-b bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
              />
              <span className="self-end text-[8px] text-grisSubText">
                Minutos
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
            />
          ))}
        </div>
      </div>

      {/* sidebar */}
      <div className="ml-4 flex w-[280px] shrink-0 flex-col gap-6 rounded-lg bg-gris px-8 py-4">
        <div className="flex justify-center">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            Accesos Rápidos
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PEOPLE.map((item, i) => (
            <div key={i} className="flex">
              <div className="flex w-1/3 flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center">
                  <Avatar className="h-full w-full rounded-lg">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {item.status == "Pending" ? (
                  <span className="w-fit rounded-full bg-[#FAA36440] px-2 py-[2px] text-[11px] text-[#FAA364]">
                    {item.status}
                  </span>
                ) : (
                  <span className="w-fit rounded-full bg-[#7794F940] px-2 py-[2px] text-[11px] text-[#7794F9]">
                    {item.status}
                  </span>
                )}
              </div>
              <div>
                <p className="text-base font-medium text-grisText">
                  {item.name}
                </p>
                <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                  {item.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExamShow;
