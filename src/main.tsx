import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Could not find root element");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);