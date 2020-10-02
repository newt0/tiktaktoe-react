import React from "react";

function Square({ value, onClick, isHighlight }) {
  return (
    <button
      className={`square ${isHighlight ? "highlight" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
