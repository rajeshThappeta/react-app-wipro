import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CounterContext from "./contexts/CounterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterContext>
      <App />
    </CounterContext>
  </StrictMode>
);
