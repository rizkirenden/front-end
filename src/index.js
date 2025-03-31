import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Ubah ini dari './landingpage' ke './App'
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Sekarang akan merender komponen App yang berisi router */}
  </React.StrictMode>
);

reportWebVitals();
