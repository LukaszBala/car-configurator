import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyD5FQKuGQzxlt1Hj8DLMnlkJ8TDQLz92H0",
    authDomain: "car-configurator-6b257.firebaseapp.com",
    projectId: "car-configurator-6b257",
    storageBucket: "car-configurator-6b257.appspot.com",
    messagingSenderId: "1034811342781",
    appId: "1:1034811342781:web:d15b16d0d5d3545a139cd4",
    measurementId: "G-ELL08L4H93",
    databaseURL: "https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
