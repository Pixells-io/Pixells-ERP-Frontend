import React from "react";
import { Link } from "react-router-dom";

function MessageLink({ string }) {
  const wordsArray = string.split(" ");
  const isUrl = (word) => {
    const urlPattern =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    return word.match(urlPattern);
  };

  return (
    <div className="flex flex-wrap">
      {wordsArray.map((word, i) =>
        isUrl(word) ? (
          <Link
            key={i}
            to={word.includes("http") ? word : "https://" + word}
            target="_blank"
            className="w-full text-primario"
          >
            {word}&nbsp;
          </Link>
        ) : (
          <span key={i}>{word}&nbsp;</span>
        ),
      )}

      {/* <span>{string}</span> */}
    </div>
  );
}

export default MessageLink;
