import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Header from "./components/Header/Header.jsx";
import Restaurant from "./components/Restaurant/Restaurant.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <div>
            <Header />
            <Restaurant title={"Restaurant"} />
          </div>
        ),
      },
      // {
      //   path: "",
      //   element: ,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
