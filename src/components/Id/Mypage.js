import React from "react";

function Id() {
  return (
    <div>
      <iframe src={process.env.PUBLIC_URL + "/theidpage.html"} title="My HTML Page"></iframe>
    </div>
  );
}

export default Id;
