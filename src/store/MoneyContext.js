import React from "react";

export const MoneyContext = React.createContext();

const initialState = {
  money: 1337,
  bank: "JP Morgan"
};

const MoneyReducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return { ...state, money: state.money + 1 };
    case ADD_TEN:
      return { ...state, money: state.money + 10 };
    case ADD_CUSTOM:
      return { ...state, money: state.money + action.payload };
    default:
      return state;
  }
};

export const MoneyProvider = props => {
  const [state, dispatch] = React.useReducer(MoneyReducer, initialState);
  const value = { state, dispatch };
  return (
    <MoneyContext.Provider value={value}>
      {props.children}
    </MoneyContext.Provider>
  );
};

export const ADD_ONE = "ADD_ONE";
export const ADD_TEN = "ADD_TEN";
export const ADD_CUSTOM = "ADD_CUSTOM";
