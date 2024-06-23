import { useState } from "react";

export default function BookingForm() {
  const [bookings, setBookings] = useState({
    date: "",
    time: "17:00",
    guests: "1",
    occasion: "Birthday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((bookings.date, bookings.time, bookings.guests !== "")) {
      console.log(bookings);
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
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
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
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
