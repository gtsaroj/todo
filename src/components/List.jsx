/* eslint-disable react/prop-types */
import React from "react";
import { useTodo } from "../Contexts/TodoContext";


const List = (todo ) => {
    
    

  const [isTodoEditable, setIsTodoEditable] = React.useState(false);
  const [todoMessage, setTodoMessage] = React.useState();

  const { deleteTodo, updateTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsTodoEditable(false);
  };
    

  return (
    <tr
      className="flex
      justify-around text-[#1a1818] font-bold bg-[#317520] "
      key={todo.id}
    >
      <td>
        <input
          type="checkbox"
          onChange={() => toggleCompleted(todo.id)}
          checked={todo.toggleCompleted}
        ></input>
      </td>
      <td>
        <input
          type="text"
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
        ></input>
      </td>
          <td onClick={() => {
              if (todo.toggleCompleted) return
              if (isTodoEditable) {
                  editTodo();
              }
              else {
                  setIsTodoEditable(!isTodoEditable);
              }
      }}>-</td>
      <td onClick={()=> deleteTodo(todo.id)}>x</td>
    </tr>
  );
};

export default List;
