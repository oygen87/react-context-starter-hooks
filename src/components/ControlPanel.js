import React, { useContext } from "react";
import { MoneyContext } from "../store/MoneyContext";
import { ADD_CUSTOM, ADD_ONE, ADD_TEN } from "../store/MoneyReducer";

const ControlPanel = () => {
  const moneyContext = useContext(MoneyContext);

  const addOne = () => {
    moneyContext.dispatch({ type: ADD_ONE });
  };

  const addTen = () => {
    moneyContext.dispatch({ type: ADD_TEN });
  };

  const add777 = () => {
    moneyContext.dispatch({ type: ADD_CUSTOM, payload: 777 });
  };

  return (
    <div>
      <button className="btn btn-success mr-3" onClick={addOne}>
        Add 1
      </button>
      <button className="btn btn-success mr-3" onClick={addTen}>
        Add 10
      </button>
      <button className="btn btn-success " onClick={add777}>
        Add 777
      </button>
      <h3>{moneyContext.money}</h3>
    </div>
  );
};

export default ControlPanel;
