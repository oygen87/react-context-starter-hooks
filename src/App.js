import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import SecondPage from "./pages/SecondPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/second" component={SecondPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
