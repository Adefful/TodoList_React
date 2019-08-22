import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem />
      </li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  );
};

export default TodoList;
