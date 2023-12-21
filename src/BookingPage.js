import BookingForm from "./BookingForm";
import React, { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking.js";

export default function BookingPage() {
  const navigate = useNavigate();

  const [submittedData, setSubmittedData] = useState(null);

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function initializeTimes() {
    // fetchAPI()
    //   .then((times) => {
    //     const availableTimes = [...times];
    //     dispatch({ type: "update_times", availableTimes });

    //   })
    //   .catch((error) => {
    //     console.error("Error fetching available times:", error);
    //   });
    console.log("Initial Time is");
    return [17];
  }

  const handleDateChange = (selectedDate) => {
    console.log("Initial Selected Date:", selectedDate);
    dispatch({ type: "update_times", selectedDate });
    console.log("Selected Date in dispatch", selectedDate);
  };

  function updateTimes(state, action) {
    switch (action.type) {
      case "update_times":
        const { selectedDate } = action;
        console.log("Selected Date in updateTimes:", action.selectedDate);

        fetchAPI(selectedDate)
          .then((times) => {
            const availableTimes = [...times];

            console.log("times in fetchAPI(selectedDate)" + times);
          })
          .catch((error) => {
            console.error("Error fetching available times:", error);
          });
        return [18]; /*End point*/
      default:
        return state;
    }
  }

  // const handleDateChange = async (selectedDate) => {
  //   console.log('selectedDate when pick a date: ', selectedDate)

  //   try {
  //     const times = await fetchAPI(selectedDate);
  //     dispatch({ type: 'update_times_success', availableTimes });
  //   } catch(error){
  //     console.error('Error fetching available times:', error);
  //     dispatch({ type: 'update_times_failure' });
  //   }
  // };

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
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </div>
      )}
    </>
  );
}
