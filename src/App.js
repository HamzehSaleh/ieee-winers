import { useEffect, useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import MainScreen from "./Components/MainScreen/MainScreen";
import NewExpense from "./Components/NewExpenes/NewExpense";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const addExpenseHandler = (ele) => {
    setUsers((prevState) => {
      return [ele, ...prevState];
    });
  };
  return (
    <div className="App">
      {users && <MainScreen items={users} />}
      <NewExpense addExpenseData={addExpenseHandler} />
      {users && <Expenses expenses={users} />}
    </div>
  );
}

export default App;
