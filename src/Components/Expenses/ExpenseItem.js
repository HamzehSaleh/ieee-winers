import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__id">{props.number}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
