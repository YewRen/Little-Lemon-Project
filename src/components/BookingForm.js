import React, { useEffect } from "react";

const BookingForm = ({ formData, setFormData, availableTimes, updateTimes, submitForm }) => {

    useEffect(() => {
        // useEffect to set initial formData.time when availableTimes changes
        if (availableTimes.length > 0) {
            setFormData((prevData) => ({
                ...prevData,
                time: availableTimes[0],
            }));
        }
    }, [availableTimes, setFormData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        if (id === "date") {
            updateTimes(new Date(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Details", formData)
        submitForm(formData);
    }

    return (
        <>
            <div className="booking-wrapper">
                <h1>Reservations</h1>
                <div className="booking-content">
                    <h2>Booking Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="booking-details">
                            <div className="booking-date">
                                <label htmlFor="date">Choose date</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="booking-time">
                                <label htmlFor="time">Choose time</label>
                                <select id="time"
                                    value={formData.time} onChange={handleChange}>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="booking-guests">
                                <label htmlFor="guests">Number of guests</label>
                                <input type="number"
                                    placeholder="2"
                                    min="2"
                                    max="8"
                                    id="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="booking-occasion">
                                <label htmlFor="occasion">Occasion</label>
                                <select data-testid="occasion" id="occasion"
                                    value={formData.occasion} onChange={handleChange}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                            <div className="booking-request">
                                <label htmlFor="special-request">Add Special Request</label>
                                <input
                                    type="text"
                                    id="special-request"
                                    placeholder="Please enter any special requests (e.g. baby seat)"
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <h2>Personal Details</h2>
                        <div className="personal-details">
                            <div className="booking-firstname">
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    minLength="3"
                                    required
                                    onChange={handleChange} />
                            </div>
                            <div className="booking-lastname">
                                <label htmlFor="lastname">Last Name</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    required
                                    onChange={handleChange} />
                            </div>
                            <div className="booking-contactnumber">
                                <label htmlFor="contactnumber">Contact number</label>
                                <input
                                    type="tel"
                                    id="contactnumber"
                                    minLength="8"
                                    required
                                    onChange={handleChange} />
                            </div>
                            <div className="booking-email">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="abc@gmail.com"
                                    minLength="13"
                                    required
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="booking-submit">
                            <input
                                type="submit"
                                value="Make Your reservation"
                                id="button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingForm;