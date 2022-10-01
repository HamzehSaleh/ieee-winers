import React from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseList expenses={props.expenses} />
    </div>
  );
}

export default Expenses;
