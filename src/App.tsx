// import { useState } from "react";

import { SecondCard } from "./components/SecondCard";
import { ThirdCard } from "./components/ThirdCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ClientViewRoot } from "./pages/ClientViewRoot";
import { DetailsPage } from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientViewRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "about",
            element: <SecondCard />,
          },
          {
            path: "details",
            element: <DetailsPage />,
          },
          /* the rest of the routes */
        ],
      },
    ],
  },
  {
    path: "/dash",
    element: <ThirdCard />,
  },
]);

function App() {
  return (
    <div className="bg-slate-100 px-10">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
