import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./styles/main.scss";
import { injectSpeedInsights } from '@vercel/speed-insights';

// @ts-ignore
injectSpeedInsights();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
