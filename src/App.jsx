import "./App.css";
import { TodoProvider } from "./Contexts/TodoContext";

import React from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [Todos, setTodo] = React.useState([]);
  const addTodo = (todo) => {
    setTodo((prev) => [{id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const toggleCompleted = (id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, toggleCompleted: !prevTodo.toggleCompleted }
          : prevTodo
      )
    );
  };

  return (
    <>
      <TodoProvider
        value={{ Todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
      >
        <div className="w-full h-[100vh] bg-[#456eb9] flex flex-col justify-center items-center gap-[10px]">
          <h3>Todos</h3>
          <div className=" flex items-center justify-center  bg-[#b64949] py-[20px] px-[8px] w-full">
            <Form />
          </div>
          <div className="w-full">
            
          <table className=" flex flex-col w-full  bg-[#213f19]">
      <thead>
        <tr
          className="flex
    justify-around text-[black] font-bold   "
        >
          <th>check</th>
          <th>name</th>
          <th>edit</th>
          <th>del</th>
                </tr>
                
      </thead>
              <tbody>
                {Todos?.map((todo) => {
                  console.log(todo);
                  <List todo={todo} key={todo.id}></List>
                })}
            </tbody>
    </table>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
