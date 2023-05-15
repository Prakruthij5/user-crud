/* import React, { useState } from 'react'
import useCounter from './components/useCounter';
import ReactDOM from "react-dom";
function App() {
  //const [count, setCount] = useState(0) 
  
  /* const {count,increment,decrement}=useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
    </div>
  );
} */







 /*  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = [];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {`Items checked are: ${checkedItems}`}
      </div>
    </div>
  );
}*/
/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;  */

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";


const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
  { name: "rahul" }
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Select Users</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
     
    </div>
  );
}

export default App;