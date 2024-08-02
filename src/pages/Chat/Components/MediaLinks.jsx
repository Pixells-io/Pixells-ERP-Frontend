import React from "react";
import { Link } from "react-router-dom";

function MediaLinks({ links }) {
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
    <div className="flex flex-col gap-4">
      {links.map((mensaje) =>
        mensaje.msg.split(" ").map(
          (word, i) =>
            isValidURL(word) && (
              <div
                key={i}
                className="flex w-fit flex-col gap-2 rounded-lg border p-2 hover:bg-[#D9D9D9]"
              >
                <p>{mensaje.user}</p>
                <Link
                  to={word.includes("http") ? word : "https://" + word}
                  target="_blank"
                  className="flex text-primario"
                >
                  {word}
                </Link>
              </div>
            ),
        ),
      )}
    </div>
  );
}

export default MediaLinks;
