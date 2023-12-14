import BookingForm from "./BookingForm";
import React, { useReducer } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const isSubmitted = await submitAPI(formData);
      if (isSubmitted) {
        navigate("/confirmation");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function initializeTimes() {
    fetchAPI()
      .then((times) => {
        const availableTimes = [...times];
        dispatch({ type: "update_times", availableTimes });
      })
      .catch((error) => {
        console.error("Error fetching available times:", error);
      });
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case "update_times":
        const { selectedDate } = action;
        console.log("Selected Date(2):", selectedDate);

        fetchAPI(selectedDate)
          .then((times) => {
            const availableTimes = [...times];
            dispatch({ type: "update_times", availableTimes });
          })
          .catch((error) => {
            console.error("Error fetching available times:", error);
          });
        return state;
      default:
        return state;
    }
  }

  const handleDateChange = (selectedDate) => {
    console.log("Selected Date(1):", selectedDate);
    dispatch({ type: "update_times", selectedDate });
  };

  return (
    <>
      <div id="booking">
        <BookingForm
          availableTimes={availableTimes}
          handleDateChange={handleDateChange}
          submitForm={submitForm}
        />
      </div>
    </>
  );
}
