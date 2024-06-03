import React, { useState } from "react";
import { Form, useLoaderData, useParams } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, closeCircle } from "ionicons/icons";
import ExamQuestion from "./ExamQuestion";
import { Button } from "@/components/ui/button";

const EXAMN_TEMPLATE = {
  title: null,
  duration: null,
  questions: [
    {
      question: "",
      type: "",
      answers: [
        {
          answer: "",
          correct: false,
        },
      ],
    },
  ],
};

const QUESTIONS_TEMPLATE = [
  {
    question: "",
    answers: [
      {
        answer: "",
        score: "",
      },
    ],
  },
];

function ExamForm() {
  // const [exam, setExam] = useState(EXAMN_TEMPLATE);
  const { id: inductionId } = useParams();
  const { data } = useLoaderData();
  const [questions, setQuestions] = useState(QUESTIONS_TEMPLATE);

  function addQuestion() {
    const newQuestion = {
      question: "",
      answers: [
        {
          answer: "",
          score: "",
        },
      ],
    };
    setQuestions([...questions, newQuestion]);
  }

  function removeQuestion(index) {
    setQuestions(questions.filter((question, i) => i !== index));
  }

  function addAnswer(index) {
    const newAnswer = {
      answer: "",
      score: "",
    };

    setQuestions(
      questions.map((item, idx) =>
        idx === index
          ? { ...item, answers: [...item.answers, newAnswer] }
          : item,
      ),
    );
  }

  function removeAnswer(answerIndex, questionIndex) {
    setQuestions(
      questions.map((item, idx) =>
        idx === questionIndex
          ? {
              ...item,
              answers: item.answers.filter((answer, i) => i !== answerIndex),
            }
          : item,
      ),
    );
  }

  function onChangeQuestion(questionIndex, e) {
    setQuestions(
      questions.map((item, idx) =>
        idx === questionIndex ? { ...item, question: e.target.value } : item,
      ),
    );
  }

  function onChangeAnswer(questionIdx, answerIdx, e) {
    setQuestions(
      questions.map((question, idx) =>
        idx === questionIdx
          ? {
              ...question,
              answers: question.answers.map((item, i) =>
                i === answerIdx ? { ...item, answer: e.target.value } : item,
              ),
            }
          : question,
      ),
    );
  }

  // score update
  function onChangeCheckBox(questionIdx, answerIdx, e) {
    console.log(e);
    setQuestions(
      questions.map((question, idx) =>
        idx === questionIdx
          ? {
              ...question,
              answers: question.answers.map((item, i) =>
                i === answerIdx ? { ...item, score: e } : item,
              ),
            }
          : question,
      ),
    );
  }

  function onChangeScore(questionIdx, answerIdx, e) {
    setQuestions(
      questions.map((question, idx) =>
        idx === questionIdx
          ? {
              ...question,
              answers: question.answers.map((item, i) =>
                i === answerIdx ? { ...item, score: e } : item,
              ),
            }
          : question,
      ),
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-[520px] flex-col rounded-2xl bg-blancoForms drop-shadow">
        <div className="px-6 py-3">
          <p className="font-medium text-grisText">{data.name}</p>
        </div>
        <Form
          className="flex gap-2 border-t px-4 py-4"
          method="post"
          action={`/org-development/induction/create/${inductionId}`}
          id="crate-induction-exam"
        >
          {/* <input
            type="text"
            name="exam_title"
            placeholder="Escribe el nombre del exámen"
            className="mr-10 w-full border-b bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
          />
          <input
            type="number"
            name="exam_duration"
            className="w-[80px] border-b bg-blancoForms p-2 text-xs placeholder:bg-blancoForms placeholder:p-2 placeholder:text-xs"
          />
          <span className="self-end text-[8px] text-grisSubText">Minutos</span> */}
          <input
            type="text"
            className="hidden"
            value={JSON.stringify(questions)}
            name="questions"
            readOnly
          />
          <input
            type="text"
            className="hidden"
            value={inductionId}
            name="induction_id"
            readOnly
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </div>

      {questions?.map((question, i) => (
        <ExamQuestion
          key={i}
          question={question}
          index={i}
          removeQuestion={removeQuestion}
          addAnswer={addAnswer}
          removeAnswer={removeAnswer}
          onChangeQuestion={onChangeQuestion}
          onChangeAnswer={onChangeAnswer}
          onChangeCheckBox={onChangeCheckBox}
        />
      ))}

      <button
        type="button"
        className="flex items-center"
        onClick={() => addQuestion()}
      >
        <IonIcon
          icon={addCircleOutline}
          size=""
          className="h-5 w-5 text-primarioBotones hover:text-primario"
        ></IonIcon>
      </button>
    </div>
  );
}

export default ExamForm;
