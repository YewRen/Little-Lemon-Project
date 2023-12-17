import './App.css';
import Home from  "./components/Home";
import BookingPage from './components/BookingPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservations" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
