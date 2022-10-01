import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpeseList(props) {
  if (props.expenses.length == 0) {
    return <h2 className="expenses-list__fallback">No Items Found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((ele) => (
        <ExpenseItem key={ele.number} name={ele.name} number={ele.number} />
      ))}
    </ul>
  );
}

export default ExpeseList;
