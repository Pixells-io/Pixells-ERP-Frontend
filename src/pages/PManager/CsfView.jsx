import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import CSFCard from "./components/CSFCard";

function CsfView() {
  const params = useParams();
  const { data } = useLoaderData();
  return (
    <div className="flex h-full overflow-scroll bg-blancoBg p-4">
      <div className="flex flex-wrap gap-6 py-2">
        {data?.map((card, i) => (
          <div key={i} className="h-fit rounded-2xl shadow">
            <CSFCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CsfView;
