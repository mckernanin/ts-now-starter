import React from "react";

import logo from "./logo.svg";
import "./App.css";
import HelloUser from "./HelloUser";
import HelloWorld from "./HelloWorld";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <HelloUser />
      </header>
    </div>
  );
};

export default App;
