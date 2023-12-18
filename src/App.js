import React from "react";
import "./App.css";
import "./Media.css";
import "./Media1024px.css"
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
