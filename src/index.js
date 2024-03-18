import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "../public/serviceWorker";
import App from "./app";
import "./assets/scss/style.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

serviceWorker.register();
