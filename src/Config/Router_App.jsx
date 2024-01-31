import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Private_Routes from "./Private_Routes";
import Public_Routes from "./Public_Routes";

export default function Router_App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<Private_Routes />}>
          <Route path="" element={<Home />} />
          <Route path="/account" element={<Home />} />
          <Route path="/product" element={<Home />} />
        </Route>

        <Route path="" element={<Public_Routes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    )
  );
  return (
    
      <RouterProvider router={route} />
    
  );
}
