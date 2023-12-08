import BookingForm from './BookingForm'
import {useReducer} from 'react'


function initializeTimes() {
    return (
        ['Select', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00']
    )
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES' :
            return state;
        default:
            return state;
    }
}


export default function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    function handleDateChange(newDate) {
        dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    }
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