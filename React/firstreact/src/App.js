import logo from "./logo.svg";
import "./App.css";
// import React from "react";
// import Component1 from "./Components/Component1";
// import Component2, { Component3 } from "./Components/Component2";
// import MainCounter from "./Counter/Counter";
import ControlledComponent from "./Forms/Controlled";
//import UncontrolledComponent from "./Forms/Uncontrolled";
// import ListComponent from "./Components/List";
import ListMainComponent from "./List/List";
//import React, { useState,useEffect } from "react";
import TodoComponent from "./Todo/Todo";
import Component3 from "./Components/Component3";

function App() {
  return (
    // <div className="App">
    //   <div className="App-Header">
    //     <h2>Header</h2>
    //     <Component3 />
    //   </div>
    // </div>
    <div>
      <TodoComponent />
    </div>

    // <div className="App1">
    //   <div className="App-header">
    //     {/*<HooksComponent /> */}
    //     {/*<HooksCountComponent /> */}
    //     <ListMainComponent />
    //     {/*<ControlledComponent /> */}
    //   </div>
    // </div>
  );
}
// function HooksComponent() {
//   const [color, setColor] = useState("Blue");

//   return (
//     <>
//       <div className="colorLabel">My favourite color is {color}</div>
//       <button className="btn btn-primary mt-4" onClick={() => setColor("Red")}>
//         Change Color
//       </button>
//     </>
//   );
// }
// function HooksCountComponent() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(() => count + 1);
//     }, 1000);
//   });

//   return (
//     <>
//       <div className="colorLabel">Counter is {count}</div>
//       {/*<button
//         className="btn btn-primary mt-4"
//         onClick={() => setCount(() => count + 1)}> Change Count </button> */}
//     </>
//   );
// }
export default App;
