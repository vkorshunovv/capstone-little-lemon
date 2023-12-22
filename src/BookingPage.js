import BookingForm from "./BookingForm";
import React, { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking.js";

const availableTimesByDate = {
  "2023-11-29": ["17:00", "18:00", "19:00"],
  "2023-12-01": ["20:00", "21:00", "22:00"],
  "2023-12-02": ["17:00", "18:00", "19:00"],
  "2023-12-03": ["20:00", "21:00", "22:00"],
  "2023-12-04": ["17:00", "18:00", "19:00"],
  "2023-12-05": ["20:00", "21:00", "22:00"],
  "2023-12-06": ["17:00", "18:00", "19:00"],
  "2023-12-07": ["20:00", "21:00", "22:00"],
  "2023-12-08": ["17:00", "18:00", "19:00"],
  "2023-12-09": ["20:00", "21:00", "22:00"],
  "2023-12-10": ["17:00", "18:00", "19:00"],
  "2023-12-11": ["20:00", "21:00", "22:00"],
  "2023-12-12": ["17:00", "18:00", "19:00"],
  "2023-12-13": ["20:00", "21:00", "22:00"],
  "2023-12-14": ["17:00", "18:00", "19:00"],
  "2023-12-15": ["20:00", "21:00", "22:00"],
  "2023-12-16": ["17:00", "18:00", "19:00"],
  "2023-12-17": ["20:00", "21:00", "22:00"],
  "2023-12-18": ["17:00", "18:00", "19:00"],
  "2023-12-19": ["20:00", "21:00", "22:00"],
  "2023-12-20": ["17:00", "18:00", "19:00"],
  "2023-12-21": ["20:00", "21:00", "22:00"],
  "2023-12-22": ["17:00", "18:00", "19:00"],
  "2023-12-23": ["20:00", "21:00", "22:00"],
  "2023-12-24": ["17:00", "18:00", "19:00"],
  "2023-12-25": ["20:00", "21:00", "22:00"],
  "2023-12-26": ["17:00", "18:00", "19:00"],
  "2023-12-27": ["20:00", "21:00", "22:00"],
  "2023-12-28": ["17:00", "18:00", "19:00"],
  "2023-12-29": ["20:00", "21:00", "22:00"],
  "2023-12-30": ["17:00", "18:00", "19:00"],
  "2023-12-31": ["20:00", "21:00", "22:00"],
};

export default function BookingPage() {
  const navigate = useNavigate();

  const [submittedData, setSubmittedData] = useState(null);

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function initializeTimes() {
    fetchAPI()
      .then((times) => {
        const availableTimes = [...times];
        console.log("TIMES FORM initializeTimes()" + availableTimes);
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
      console.log("Is Submitted?", formData);
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
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </div>
      )}
    </>
  );
}
