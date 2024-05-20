import { Link } from "react-router-dom";

export default function ConfirmedBooking({ date, guests, occasion, time }) {
  return (
    <div id="confirmContainer">
      <div id="confirm">
        <h1>Booking Confirmed!</h1>
        <h2>Your booking has been confirmed. Thank you!</h2>
        <p>
          <span>Date: {date}</span>
          <span>Time: {time}</span>
          <span>Guests: {guests}</span>
          <span>Occasion: {occasion}</span>
        </p>

        <Link to="/">
          <button id="button">Home</button>
        </Link>
      </div>
    </div>
  );
}
