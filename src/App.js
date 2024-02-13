import React, { useEffect, useReducer, useState } from "react";
import './App.css';
import Home from "./components/Home";
import BookingPage from './components/BookingPage';
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./API/Api";
import ConfirmedBooking from "./components/ConfirmedBooking";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return { times: action.payload };
    case "UPDATE_TIMES":
      return { times: action.payload };
    default:
      return state;
  }
};

const today = new Date().toISOString().split("T")[0];

function App() {
  const [availableTimes, setAvailableTimes] = useReducer(
    availableTimesReducer, { times: [] }
  );

  const [formData, setFormData] = useState({
    date: today,
    time: "",
    guests: "2",
    occasion: "Birthday",
    firstname: "",
    lastname: "",
    contactnumber: "",
    email: "",
  });

  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();

  const initializeTimes = async () => {
    try {
      const times = await fetchAPI(new Date());
      setAvailableTimes({ type: "INITIALIZE_TIMES", payload: times });
    } catch (error) {
      console.log("Error fetching initial available times:", error);
    }
  };

  const updateTimes = async (selectedDate) => {
    try {
      const newTimes = await fetchAPI(selectedDate);
      setAvailableTimes({ type: "UPDATE_TIMES", payload: newTimes });
    } catch (error) {
      console.log("Error fetching updated available times:", error);
    }
  };

  const submitForm = async () => {
    try {
      const submissionResult = await submitAPI(formData);
      if (submissionResult === true) {
        setBookingData(formData);
        navigate("/confirmation");
      } else {
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitted form:", error);
    }
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservations"
          element={<BookingPage
            availableTimes={availableTimes.times}
            updateTimes={updateTimes}
            formData={formData}
            setFormData={setFormData}
            submitForm={submitForm}
          />
          }
        />
        <Route path="confirmation"
          element={<ConfirmedBooking bookingData={bookingData} />}
        />
      </Routes>
  );
}

export default App;
