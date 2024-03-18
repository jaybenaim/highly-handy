import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./assets/scss/style.scss";
import { reportWebVitals } from "./reportWebVitals";
import * as serviceWorker from "./serviceWorkerRegistration";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

serviceWorker.register();
reportWebVitals();
