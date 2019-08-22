import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
