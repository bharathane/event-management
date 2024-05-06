import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import Calender from "./components/Calender";
import Reservation from "./components/Reservation";
import "./App.css";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/reserve" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
