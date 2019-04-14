import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import SecondPage from "./pages/SecondPage";
import Home from "./pages/Home";
import { MoneyContext } from "./store/MoneyContext";
import { MoneyReducer } from "./store/MoneyReducer";

const App = () => {
  const initialState = {
    money: 1337,
    dispatch: action => {
      setState(state => MoneyReducer(state, action));
    }
  };

  const [state, setState] = useState(initialState);

  return (
    <MoneyContext.Provider value={state}>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/second" component={SecondPage} />
        </div>
      </BrowserRouter>
    </MoneyContext.Provider>
  );
};

export default App;
