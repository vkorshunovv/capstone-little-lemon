import { Link } from "react-router-dom";

export default function ConfirmedBooking({ submittedData }) {
  console.log("Submitted Data is", submittedData);
  return (
    <div id="confirmContainer">
      <div id="confirm">
        <h1>Booking Confirmed!</h1>
        <h2>Your booking has been confirmed. Thank you!</h2>
        <p>
          {/* <span>Date: {submittedData?.date}</span>
          <span>Time: {submittedData?.time}</span>
          <span>Guests: {submittedData?.guests}</span>
          <span>Occasion: {submittedData?.occasion}</span> */}
        </p>

        <Link to="/">
          <button id="button">Home</button>
        </Link>
      </div>
    </div>
  );
}
