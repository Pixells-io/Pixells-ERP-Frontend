import React from "react";

const ObservationsSection = () => {

  return (
    <div className="flex flex-row justify-between rounded-xl bg-blancoBg px-4 py-6">
      <div className="w-50">
        <textarea
          placeholder={"Observaciones"}
          className="h-full w-[300px] resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs"
          name="template"
        ></textarea>
      </div>
    </div>
  );
};

export default ObservationsSection;