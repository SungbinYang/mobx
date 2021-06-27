import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { observable } from "mobx";
import PersonContext from "./contexts/PersonContext";
import PersonStore from "./stores/PersonStore";
import { Provider } from "mobx-react";

// const isLogin = observable(true);

// const person = observable({
//   name: "Sungbin",
//   age: 26,
// });

const personStore = new PersonStore();

// setInterval(() => {
//   personStore.age++;
// }, 1000);

// autorun(() => {
//   console.log(isLogin.get());
//   console.log(person.age);
//   console.log(personStore.age);
// });

// isLogin.set(false);

// person.age = 22;

// personStore.age = 28;

ReactDOM.render(
  <React.StrictMode>
    <Provider personStore={personStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
