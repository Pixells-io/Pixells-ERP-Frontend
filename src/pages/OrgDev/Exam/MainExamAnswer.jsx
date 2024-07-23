import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { redirect, useParams, useLoaderData, Form } from "react-router-dom";
import ExamQuestionAnswer from "./Components/ExamQuestionAnswer";
import { Button } from "@/components/ui/button";
import { storeAnswerExam } from "../utils";
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

function MainExamAnswer() {
  const { id } = useParams();

  const { data } = useLoaderData();
  console.log(data);

  //CONTADOR
  const [counter, setCounter] = useState(0);
  const durationInSeconds = data?.duration * 60;

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        // Check if the counter has reached the durationInSeconds threshold
        if (prevCounter >= durationInSeconds - 1) {
          clearInterval(timer); // Stop the timer
          onSubmit(); // Call the submit function
          return prevCounter; // Return the current counter value to avoid incrementing
        }
        return prevCounter + 1; // Increment the counter
      });
    }, 1000);

    return () => clearInterval(timer); // Ensure the timer is cleared if the component unmounts
  }, [durationInSeconds]);

  // //SIMPLE TIMER
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  async function onSubmit() {
    console.log("Time Out, Exam Submitted");
  }

  if (counter >= durationInSeconds) {
    onSubmit();
  }

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}

        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            ORGANIZATION DEVELOPMENT
          </h2>
        </div>
        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Answer the Exam
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 overflow-auto py-2">
          <div className="flex flex-row gap-x-4">
            <div>
              <div className="flex w-[520px] flex-col rounded-2xl bg-[#FBFBFB] drop-shadow">
                <div className="px-6 py-3">
                  <p className="font-medium text-grisText">Exam name</p>
                </div>
                <div className="flex gap-2 border-t px-4 py-4">
                  <div className="mr-10 w-full border-b bg-[#FBFBFB] p-2 text-xs">
                    {data?.title}
                  </div>
                  <div className="w-[80px] border-b bg-[#FBFBFB] p-2 text-xs">
                    {data?.duration}
                  </div>
                </div>
              </div>
              <Form
                id="form-submit-answer-exam"
                action={`/org-development/answer-exam/${data.id}`}
                method="post"
              >
                <input type="hidden" name="exam_id" value={data.id} />
                <input type="hidden" name="type" value="1" />
                {/* Show Questions */}
                {data?.questions.map((question, i) => (
                  <ExamQuestionAnswer key={i} question={question} />
                ))}
                <Button
                  form="form-submit-answer-exam"
                  className="mt-4 w-full rounded-3xl bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
                >
                  Submit
                </Button>
              </Form>
            </div>
            <div>
              <div className="flex flex-col justify-center rounded-2xl bg-[#FBFBFB] px-6 py-7 drop-shadow">
                <h2 className="text-center text-xs font-light text-grisHeading">
                  Time Elapsed
                </h2>
                <p className="text-center text-xl font-light text-[#D7586B]">
                  {Math.floor(counter / 60)
                    .toString()
                    .padStart(2, "0")}{" "}
                  : {(counter % 60).toString().padStart(2, "0")}
                </p>
                <p className="text-center text-xs font-normal text-[#D7586B]">
                  minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainExamAnswer;

export async function Action({ request }) {
  const data = await request.formData();

  let arreglo = [];

  for (const entrie of data.entries()) {
    if (entrie[0] != "exam_id" && entrie[0] != "type") {
      arreglo.push(entrie[0]);
    }
  }

  //If the type is 1 the action is submit the form
  if (data.get("type") === "1") {
    const validation = storeAnswerExam(data, arreglo);
  }

  //If the type is 2 the action is create teh exam
  if (data.get("type") === "2") {
  }

  return redirect("/org-development/induction/my-inductions");
}
