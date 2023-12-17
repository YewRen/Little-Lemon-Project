import React, { useState } from "react";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        resdate: "",
        restime: "",
        guests: "1",
        occasion: "Birthday",
    });
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    }

    return (
        <>
            <h1>Reservations</h1>
            <h2>Booking Details</h2>
            <h2>Personal Details</h2>
            <div className="booking-wrapper">
            <form onSubmit={handleSubmit}>
                <label htmlFor="resdate">Choose date</label>
                <input 
                type="date" 
                id="resdate" 
                value={formData.resdate}
                onChange={handleChange}
                />
                <label htmlFor="restime">Choose time</label>
                <select id="restime"
                value={formData.restime} onChange={handleChange}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={formData.guests}
                onChange={handleChange}
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                value={formData.occasion} onChange={handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
            </div>
        </>
    )
}

export default BookingForm;