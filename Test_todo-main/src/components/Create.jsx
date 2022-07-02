import React, { useState } from "react";

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const submitHandler = (e) => {
    const date = new Date();
    e.preventDefault();
    const newTodo = {
      title,
      category,
      id,
      expTime: date.getTime(),
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default Create;
