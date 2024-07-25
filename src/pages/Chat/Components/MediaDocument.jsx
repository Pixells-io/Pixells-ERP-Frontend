import React, { useState } from "react";
import CardMediaDocuments from "./CardMediaDocument";

function MediaDocuments({ documents }) {
  return (
    <div>
      <div className="flex min-w-[200px] flex-row flex-wrap gap-2">
        {documents.map((document, index) => (
          <CardMediaDocuments key={index} document={document} />
        ))}
      </div>
    </div>
  );
}

export default MediaDocuments;
