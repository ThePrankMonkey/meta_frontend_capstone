import BookingForm from "../components/BookingForm";
import { useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../util/api";

const initialState = {
  availableTimes: [],
  timesByDate: {},
  currDate: "2024-06-23",
};

function reducer(state, action) {
  switch (action.type) {
    case "initialize": {
      const { date, times } = action.payload;
      if (state.timesByDate[date]) {
        return state;
      }
      return {
        ...state,
        timesByDate: {
          ...state.timesByDate,
          [date]: times,
        },
      };
    }
    case "reserve": {
      const { date, reservedTime } = action.payload;
      return {
        ...state,
        timesByDate: {
          ...state.timesByDate,
          [date]: state.timesByDate[date].filter(
            (time) => time !== reservedTime
          ),
        },
      };
    }
    case "date": {
      return {
        ...state,
        currDate: action.payload,
      };
    }
    default:
      return state;
  }
}

const submitForm = (formData) => {
  if (submitAPI(formData)) {
    // pass
  }
};

export function updateTimes(dispatch) {
  return (reservedTime, date) => {
    dispatch({ type: "reserve", payload: { reservedTime, date } });
  };
}

export function initializeTimes(dispatch) {
  return (date) => {
    const times = fetchAPI(new Date(date));
    dispatch({ type: "initialize", payload: { date, times } });
  };
}

export default function Reservations() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    initializeTimes(dispatch)("2024-07-24");
  }, [dispatch]);

  return (
    <>
      <h1>Reservations</h1>
      <section>
        <BookingForm
          availableTimes={state.timesByDate}
          updateTimes={updateTimes(dispatch)}
          initializeTimes={initializeTimes(dispatch)}
          currDate={state.currDate}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
    </>
  );
}
