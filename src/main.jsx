import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
const element = document.querySelector(".root");
const root = ReactDOM.createRoot(element);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)