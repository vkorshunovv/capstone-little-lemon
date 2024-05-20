import BookingForm from "./BookingForm";
import React, { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking.js";

const availableTimesByDate = {
  "2024-06-01": ["17:00", "18:00", "19:00"],
  "2024-06-02": ["20:00", "21:00", "22:00"],
  "2024-06-03": ["17:00", "18:00", "19:00"],
  "2024-06-04": ["20:00", "21:00", "22:00"],
  "2024-06-05": ["17:00", "18:00", "19:00"],
  "2024-06-06": ["20:00", "21:00", "22:00"],
  "2024-06-07": ["17:00", "18:00", "19:00"],
  "2024-06-08": ["20:00", "21:00", "22:00"],
  "2024-06-09": ["17:00", "18:00", "19:00"],
  "2024-06-10": ["20:00", "21:00", "22:00"],
  "2024-06-11": ["17:00", "18:00", "19:00"],
  "2024-06-12": ["20:00", "21:00", "22:00"],
  "2024-06-13": ["17:00", "18:00", "19:00"],
  "2024-06-14": ["20:00", "21:00", "22:00"],
  "2024-06-15": ["17:00", "18:00", "19:00"],
  "2024-06-16": ["20:00", "21:00", "22:00"],
  "2024-06-17": ["17:00", "18:00", "19:00"],
  "2024-06-18": ["20:00", "21:00", "22:00"],
  "2024-06-19": ["17:00", "18:00", "19:00"],
  "2024-06-20": ["20:00", "21:00", "22:00"],
  "2024-06-21": ["17:00", "18:00", "19:00"],
  "2024-06-22": ["20:00", "21:00", "22:00"],
  "2024-06-23": ["17:00", "18:00", "19:00"],
  "2024-06-24": ["20:00", "21:00", "22:00"],
  "2024-06-25": ["17:00", "18:00", "19:00"],
  "2024-06-26": ["20:00", "21:00", "22:00"],
  "2024-06-27": ["17:00", "18:00", "19:00"],
  "2024-06-28": ["20:00", "21:00", "22:00"],
  "2024-06-29": ["17:00", "18:00", "19:00"],
  "2024-06-30": ["20:00", "21:00", "22:00"]
}


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

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function initializeTimes() {
    fetchAPI()
      .then((times) => {
        const availableTimes = [...times];
      })
      .catch((error) => {
        console.error("Error fetching available times:", error);
      });
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function updateTimes(state, action) {
    if (action.type === "update_times") {
      var selectedDate = action.selectedDate;

      return availableTimesByDate[selectedDate];
    } else {
      return state;
    }
  }

  const handleDateChange = (selectedDate) => {
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
            setDate={setDate}
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
