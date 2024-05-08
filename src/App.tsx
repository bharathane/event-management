import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import Event from "./components/Events";
import Calender from "./components/Calender";
import Blogs from "./components/Blogs";
import Prodjucts from "./components/Projects";
import Projects from "./components/Products";
import NotFound from "./components/NotFound";
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
        <Route path="/events" element={<Event />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/producs" element={<Prodjucts />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
