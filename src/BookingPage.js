import BookingForm from "./BookingForm";
import React, { useReducer, useState, useEffect } from "react";
import {
  submitAPI,
  availableTimesByDate,
  getDateList,
} from "./mockAPI";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking.js";
import {} from "./mockAPI";


export default function BookingPage({
  date,
  guests,
  occasion,
  time,
  setDate,
  setGuests,
  setOccasion,
  setTime,
}) {
  const navigate = useNavigate();

  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    getDateList();
    const initialTimes = initializeTimes();
    dispatch({ type: "initialize_times", initialTimes });
  }, []);

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  function initializeTimes() {
    const currentDate = new Date().toISOString().split("T")[0];
    return availableTimesByDate[currentDate] || [];
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case "initialize_times":
        return action.initialTimes;
      case "update_times":
        const selectedDate = action.selectedDate;
        return availableTimesByDate[selectedDate] || [];
      default:
        return state;
    }
  }

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    dispatch({ type: "update_times", selectedDate });
  };

  const submitForm = async (formData) => {
    try {
      setSubmittedData(formData);
      const isSubmitted = await submitAPI(formData);
      if (isSubmitted) {
        navigate("/confirmation");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {submittedData ? (
        <ConfirmedBooking submittedData={submittedData} />
      ) : (
        <div id="booking">
          <BookingForm
            date={date}
            setDate={handleDateChange}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            time={time}
            setTime={setTime}
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </div>
      )}
    </>
  );
}
