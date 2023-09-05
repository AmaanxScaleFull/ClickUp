import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
