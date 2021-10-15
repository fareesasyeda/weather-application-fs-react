import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

//function App() {
// return (
// <div className="App">
//  <App />
// </div>
// );
//}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
