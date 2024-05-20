import React from "react";
import { useState } from "react";
import "./App.css";
import "./Media.css";
import "./Media1024px.css";
import "./Media1080px.css";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";

function App() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              date={date}
              setDate={setDate}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              time={time}
              setTime={setTime}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <ConfirmedBooking
              date={date}
              setDate={setDate}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              time={time}
              setTime={setTime}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
