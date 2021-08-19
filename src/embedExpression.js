import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return "fullstack";
  }
  function getBatch(batch) {
    return batch;
  }



  const companyName = "Dumbways.id";

  return (
    // Code Inside div
    <div>
      <h1>Welcome to{companyName}</h1>
      <p>Major {getMajor()} Batch {getBatch(25)}</p>
    </div>
  );
}

export default EmbedExpression;
