import React from "react";
import { Link } from "react-router-dom";

function MessageLink({ string }) {
  const wordsArray = string.split(" ");

  function isValidURL(url) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i",
    );
    return pattern.test(url);
  }

  return (
    <div className="flex flex-wrap">
      {wordsArray.map((word, i) =>
        isValidURL(word) ? (
          <Link
            key={i}
            to={word.includes("http") ? word : "https://" + word}
            target="_blank"
            className="text-primario"
          >
            {word}&nbsp;
          </Link>
        ) : (
          <span key={i}>{word}&nbsp;</span>
        ),
      )}
    </div>
  );
}

export default MessageLink;
