import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ConfirmedBooking = ({ bookingData }) => {
    return (
        <>
            <Header />
            <div className="booking-confirmation">
                <h2>Booking Confirmed!</h2>
                <p>Your reservation has been confirmed. Check your email for confirmation of your reservation.</p>
                <p>Thank you for choosing us!</p>
                <p>Date: {bookingData.date}</p>
                <p>Time: {bookingData.time}</p>
                <p>Number of Guests: {bookingData.guests}</p>
                <p>Occasion: {bookingData.occasion}</p>
                <p>Name: {bookingData.firstname} {bookingData.lastname}</p>
                <p>Contact Number: {bookingData.contactnumber}</p>
                <p>Email Address: {bookingData.email}</p>
            </div>
            <Footer />
        </>
    )
}

export default ConfirmedBooking;