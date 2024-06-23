import { useState } from "react";

export default function BookingForm(props) {
  console.log(props.availableTimes);
  const [bookings, setBookings] = useState({
    date: props.currDate,
    time: "17:00",
    guests: "1",
    occasion: "Birthday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((bookings.date, bookings.time, bookings.guests !== "")) {
      console.log(bookings);
      window.alert(
        `Your booking for ${bookings.guests} guests at ${bookings.time} on ${bookings.date} is confirmed!`
      );
      setBookings({
        date: "",
        time: "17:00",
        guests: "",
        occasion: "Birthday",
      });
    } else {
      console.log("Error");
    }
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={bookings.date}
        onChange={(e) => {
          setBookings({ ...bookings, date: e.target.value });
          props.dispatch({ type: "date", payload: e.target.value });
          props.initializeTimes(e.target.value);
        }}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={bookings.time}
        onChange={(e) => {
          setBookings({ ...bookings, time: e.target.value });
        }}
        required
      >
        {props.availableTimes[bookings.date] &&
          props.availableTimes[bookings.date].map((atime) => (
            <option key={atime} value={atime}>
              {atime}
            </option>
          ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={bookings.guests}
        onChange={(e) => {
          setBookings({ ...bookings, guests: e.target.value });
        }}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={bookings.occasion}
        onChange={(e) => {
          setBookings({ ...bookings, occasion: e.target.value });
        }}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make your reservation" />
    </form>
  );
}
