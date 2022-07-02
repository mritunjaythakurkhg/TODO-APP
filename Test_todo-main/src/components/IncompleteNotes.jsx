import React, { useEffect } from "react";

const IncompleteNotes = ({ todos, setTodos, setDoneTodos, doneTodos, inp }) => {
  const deleteHandler = (t) => {
    setTodos(todos.filter((todo) => todo.id !== t.id));
    setDoneTodos([...doneTodos, t]);
  };
  return (
    <>
      {todos.length ? (
        todos
          .filter((todo) => {
            if (inp === "") {
              return todo;
            }
            return todo.category.toLowerCase().includes(inp.toLowerCase());
          })
          .filter((todo) => todo.expTime + 20000 > new Date().getTime())
          .map((todo) => {
            return (
              <li key={todo.id} onClick={() => deleteHandler(todo)}>
                {todo.title}
              </li>
            );
          })
      ) : (
        <h1>All Done</h1>
      )}
    </>
  );
};

export default IncompleteNotes;
