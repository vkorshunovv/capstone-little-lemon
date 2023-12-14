import BookingPage from "./BookingPage";
import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <div id="confirmContainer">
      <div id="confirm">
        <h1>Booking Confirmed!</h1>
        <h2>Your booking has been confirmed. Thank you!</h2>
        <p></p>
        <Link to="/">
          <button id="button">Home</button>
        </Link>
      </div>
    </div>
  );
}
