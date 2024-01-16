import React, { useEffect } from "react";
import { useTodo } from "../Contexts/TodoContext";

const Form = () => {
  const [value, setValue] = React.useState("");
  const { addTodo, Todos } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      console.log("null");
    } else console.log(addTodo({ todo: value, toggleCompleted: false }));
    setValue("")
  };

  useEffect(() => {
    console.log(`total todos : ${JSON.stringify(Todos)}`)
  }, [Todos])
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-[5px] outline-none  w-[400px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button className="outline-none border-none py-[5px] px-[13px] bg-[#0e0c0c] text-[white]">
        submit
      </button>
    </form>
  );
};

export default Form;
