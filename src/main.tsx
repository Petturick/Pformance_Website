import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdminApp from "./admin/AdminApp";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./styles/global.css";
import "./styles/overrides.css";
import "./styles/redesign.css";
import "./styles/brandbook-v3.css";
import "./styles/moodboard-final.css";
import "./styles/moodboard-assets.css";

const isAdminRoute = window.location.pathname === "/admin" || window.location.pathname.startsWith("/admin/");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {isAdminRoute ? <AdminApp /> : <ThemeProvider><App /></ThemeProvider>}
  </React.StrictMode>
);
