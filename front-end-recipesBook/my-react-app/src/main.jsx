import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./App/Welcome";
import { Homepage } from "./pages/Homepage";
import { AddRecipe } from "./pages/AddRecipe";
import { RecipeDetails } from "./pages/RecipeDetails";
import { About } from "./pages/About";
import { Error404Page } from "./pages/Error404Page";
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
    element: <Error404Page />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
