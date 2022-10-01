import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  let formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = { number, name };

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then(() => {
      console.log("new user added");
    });

    props.onSaveExpenseData(userData);

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter The Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Num"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
