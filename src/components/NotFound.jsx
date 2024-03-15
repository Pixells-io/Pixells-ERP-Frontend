import React from "react";

import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div>
      <h1>Error Page</h1>
    </div>
  );
}

export default NotFound;
