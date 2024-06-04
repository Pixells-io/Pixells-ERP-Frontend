import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

function EvalExams() {
  const { id } = useParams();
  const { data } = useLoaderData();
  const [selected, setSelected] = useState(null);

  function handleSelect() {}

  console.log(data);
  return (
    <div className="flex flex-col pt-4">
      {/* menu */}
      <div className="flex items-center gap-3 overflow-scroll px-10">
        {data?.map((exam, i) => (
          <Button
            key={i}
            onClick={() => setSelected(i)}
            className={
              selected === i
                ? "h-fit rounded-full bg-grisHeading px-3 py-1 text-[10px] font-medium text-white hover:bg-grisText"
                : "h-fit rounded-full border border-grisHeading bg-white px-3 py-1 text-[10px] font-medium text-grisHeading hover:bg-grisText"
            }
          >
            {exam?.name}
          </Button>
        ))}
      </div>

      {/* examen */}
      <div className="flex flex-col items-center gap-6 overflow-scroll p-4 pt-8">
        {data[selected]?.questions?.map((question, i) => (
          <div key={i} className="w-[550px] rounded-lg bg-blancoForms">
            <div>
              <p className="font-medium text-grisText">{question.question}</p>
            </div>
            {question?.answers?.map((answer, i) => (
              <div key={i}>{answer.answer}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EvalExams;
