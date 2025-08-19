import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Force dark theme on app initialization
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);