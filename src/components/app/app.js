import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

const App = () => {
  const tododata = [
    { label: "Drink", important: false, id: 1 },
    { label: "Drink more", important: true, id: 2 },
    { label: "and Drink", important: false, id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={tododata} />
    </div>
  );
};

export default App;
