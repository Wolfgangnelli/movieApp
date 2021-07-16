import React from "react";

function DropDownList() {
  return (
    <ul>
      <a
        href="/"
        className="block mb-1 p-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        <li>HOME-FILM</li>
      </a>
      <a
        href="/"
        className="block mb-1 p-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        <li>SERIE-TV</li>
      </a>
      <a
        href="/"
        className="block mb-1 p-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        <li>COMMUNITY</li>
      </a>
    </ul>
  );
}

export default DropDownList;
