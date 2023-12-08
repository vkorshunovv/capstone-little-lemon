import { useState } from "react";
import homeLogo from './icons_assets/home-5-512.png'


export default function BookingForm({availableTimes, handleDateChange, updateTimes}) {

    const initialTimes = [
        'Select',
        '17.00',
        '18.00',
        '19.00',
        '20.00',
        '21.00',
        '22.00',
    ]
    const timeSelections = initialTimes.map((time, index) => {
            return (
                <option
                 value={time}
                 key={index}
                 disabled = {time == 'Select'}
                 >
                 {time}
                </option>
                )})

    const [date, setDate] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
           e.preventDefault();
           setDate('');
           setGuests('');
           setOccasion('');
           console.log(availableTimes, date, guests, occasion);
    }

    function onDateChange(e) {
        const newDate = e.target.value;
        setDate(newDate)
        handleDateChange(newDate);
    }

    return (
        <>
          <div className='homeIcon'>
             <a href="/">
                <img src={homeLogo} alt='Homepage Icon' />
              </a>
          </div>
 <section>
            <header>
                <div className='heading'>
                    <p>Little Lemon</p>
                    <p>Chicago</p>
                </div>
            </header>

     <form onSubmit={handleSubmit}>

        <label htmlFor="res-date">Date</label>
        <input
            type="date"
            id="res-date"
            onChange={onDateChange}
            value={date}
        />

        <label htmlFor="res-time">Time</label>
        <select
            id="res-time"
            onChange={updateTimes}
            value={availableTimes}
            >
                {timeSelections}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            placeholder="1-10"
            min="1"
            max="10"
            id="guests"
            onChange={(e) => setGuests(e.target.value)}
            value={guests}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            onChange={(e) => setOccasion(e.target.value)}
            value={occasion}
         >
                <option value='' disabled >Select</option>
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
        </select>
        <input disabled={!date || !availableTimes || !guests || !occasion} type="submit" value="Reserve a Table" id="button"/>
     </form>
</section>
</>
);
}