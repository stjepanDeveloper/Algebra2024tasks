import "./App.css";
import React, { Component } from "react";
import TextComponent from "./components/TextComponent";
import ClassTextComponent from "./components/ClassTextComponent";

function App() {
  return (
    <div>
      <TextComponent />
      <ClassTextComponent />
    </div>
  );
}

export default App;
