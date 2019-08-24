import React from "react";

const TodoListItem = ({ label, important }) => {
  const listyle = {
    color: important ? "tomato" : "black"
  };
  return <span style={listyle}> {label} </span>;
};

export default TodoListItem;
