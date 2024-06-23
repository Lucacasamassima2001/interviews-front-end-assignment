import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./App/Welcome.tsx";
import { Homepage } from "./pages/Homepage.tsx";
import { AddRecipe } from "./pages/AddRecipe.tsx";
import { RecipeDetails } from "./pages/RecipeDetails.tsx";
import { About } from "./pages/About.tsx";
import { Error404Page } from "./pages/Error404Page.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/Homepage",
    element: <Homepage />,
  },
  {
    path: "/add-your-recipe",
    element: <AddRecipe />,
  },
  {
    path: "/recipe/:recipeId",
    element: <RecipeDetails />,
  },
  {
    path: "/create-recipe",
    element: <AddRecipe />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error404Page wrongPath={true} />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
