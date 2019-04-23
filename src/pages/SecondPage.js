import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MoneyContext } from "../store/MoneyContext";
import Header from "../components/Header";

const SecondPage = () => {
  const moneyContext = useContext(MoneyContext);
  return (
    <div className="container">
      <Header title="Second Page" />
      <p>
        Value from context : <h2>{moneyContext.state.money}</h2>
      </p>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
};

export default SecondPage;
