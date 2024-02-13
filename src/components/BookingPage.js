import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const BookingPage = ({ formData, setFormData, availableTimes, updateTimes, submitForm }) => {

    return (
        <>
            <Header />
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                formData={formData}
                setFormData={setFormData}
                submitForm={submitForm}
            />
            <Footer />   
        </>
    )
}

export default BookingPage;