import BookingForm from './BookingForm'
import {useReducer} from 'react'
import React from 'react';



export default function BookingPage() {

    function initializeTimes() {
        return [
          'Select',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00'
        ];
      }

    function updateTimes(state, action) {
        switch (action.type) {
          case 'update_times':
            return state;
          default:
            return state;
        }
      }

      const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

      const handleDateChange = (selectedDate) => {
        dispatch({ type: 'update_times', availableTimes: initializeTimes() });
      };

    return (
        <>
        <div id='booking'>
            <BookingForm
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            />
        </div>
        </>
    )}