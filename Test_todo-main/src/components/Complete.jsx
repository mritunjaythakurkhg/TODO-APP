import React from "react";

function Complete({ doneTodos }) {
  return (
    <>
      <h1>Done</h1>
      {doneTodos ? (
        doneTodos.map((done) => {
          return <li>{done.title}</li>;
        })
      ) : (
        <h2>Do Them</h2>
      )}
    </>
  );
}

export default Complete;
