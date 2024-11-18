import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/global.css";
import "./css/app.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
