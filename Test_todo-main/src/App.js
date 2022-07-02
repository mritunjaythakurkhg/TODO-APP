import { useEffect, useState } from "react";
import Complete from "./components/Complete";
import Create from "./components/Create";
import IncompleteNotes from "./components/IncompleteNotes";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [check, setCheck] = useState(false);
  const [inp, setInp] = useState("");

  //   useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  // localStorage.setItem("doneTodos", JSON.stringify(doneTodos));
  //   }, [todos,doneTodos]);

  return (
    <>
      <h1>Homework Notes app</h1>
      <Searchbar inp={inp} setInp={setInp} />
      <Create
        todos={todos}
        setTodos={setTodos}
        check={check}
        setCheck={setCheck}
      />
      <IncompleteNotes
        todos={todos}
        setTodos={setTodos}
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
        check={check}
        setCheck={setCheck}
        inp={inp}
      />
      <Complete
        todos={todos}
        setTodos={setTodos}
        doneTodos={doneTodos}
        setDoneTodos={setDoneTodos}
      />
    </>
  );
};

export default App;
