import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";

function App() {
  const tododata = [
    { label: "Drink", important: false, id: 1 },
    { label: "Drink more", important: true, id: 2 },
    { label: "and Drink", important: false, id: 3 }
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={tododata} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
