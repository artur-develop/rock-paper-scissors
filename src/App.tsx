import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Header from "./components/Header";
import routesConfig from "./routes/routesConfig";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
