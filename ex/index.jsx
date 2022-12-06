import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
  <Family lastname="silva">
    <Member name="Guilherme" />
    <Member name="Maria" />
    <Member name="João" />
  </Family>,
  document.getElementById("app")
);
