import { useState } from "react";
import homeLogo from "./icons_assets/home-5-512.png";

export default function BookingForm({
  availableTimes,
  handleDateChange,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      guests,
      occasion,
      time,
    };
    submitForm(formData);
    console.log("Form submitted :", time, date, guests, occasion);
  };

  const timeSelections = availableTimes?.map((time, index) => {
    return (
      <option value={time} key={index}>
        {time}
      </option>
    );
  });

  const handleDateChangeUpdate = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    handleDateChange(selectedDate);
  };

  return (
    <>
      <div className="homeIcon">
        <a href="/">
          <img src={homeLogo} alt="Homepage Icon" />
        </a>
      </div>
      <section>
        <header>
          <div className="heading">
            <p>Little Lemon</p>
            <p>Chicago</p>
          </div>
        </header>

        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Date</label>
          <input
            type="date"
            id="res-date"
            onChange={handleDateChangeUpdate}
            value={date}
          />

          <label htmlFor="res-time">Time</label>
          <select
            id="res-time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
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
            <option value="" disabled>
              Select
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>

          <input
            disabled={!date || !time || !guests || !occasion}
            type="submit"
            value="Reserve a Table"
            id="button"
          />
        </form>
      </section>
    </>
  );
}
