import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import Presentation from "./test/Presentation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Presentation" element={<Presentation />} />
      </Routes>
    </Router>
  );
};

export default App;
