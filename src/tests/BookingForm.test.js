import { render, screen } from "@testing-library/react";
import { act } from "react";

import BookingForm from "../components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("Check form works when valid", () => {
  const mockSubmit = jest.fn();
  const mockInitializeTimes = jest.fn();
  const mockUpdateTimes = jest.fn();
  const mockDispatch = jest.fn();
  render(<BookingForm />);
});
