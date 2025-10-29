import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Agendamento from "./pages/Agendamento";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </Router>
  );
}