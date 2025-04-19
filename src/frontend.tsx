import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import NavBarComponent from "./components/modules/NavBarComponent";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (import.meta.hot) {
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  createRoot(elem).render(app);
}
