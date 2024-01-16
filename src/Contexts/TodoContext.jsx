/* eslint-disable react-refresh/only-export-components */

import React from "react";

 export const TodoContext = React.createContext({
    Todos: [],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id)=> {},
})


export const useTodo = () => {
    return React.useContext(TodoContext)
}



export const TodoProvider = TodoContext.Provider



