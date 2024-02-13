import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingForm from "./components/BookingForm";
import { fetchAPI } from './API/Api';
import { BrowserRouter } from "react-router-dom";

// Mock the API module
jest.mock('./API/Api');

describe("App Component", () => {
  it("should initialize times on mount", async () => {
    // Mock the fetchAPI function to resolve with dummy data
    fetchAPI.mockResolvedValue(['10:00', '11:00', '12:00']);
    
    const formData = {
      date: '',
      time: '',
      guests: '',
      occasion: '',
    };

    // Render the component
    render(
        <BookingForm formData={formData}/>
    );

    // Wait for the component to render with the initial times
    await waitFor(() => {
      screen.getByText('10:00');
      screen.getByText('11:00');
      screen.getByText('12:00');
    });
  });

  it('should update times when a date is selected', async () => {
    // Mock the fetchAPI function to resolve with dummy data
    fetchAPI.mockResolvedValue(['14:00', '15:00', '16:00']);

    // Render the component
    render(
        <BookingForm />
    );

    // Simulate selecting a date (assuming there is a date input)
    userEvent.type(screen.getByLabelText('Choose date'), '2023-12-26');

    // Wait for the component to render with the updated times
    await waitFor(() => {
      screen.getByText('14:00');
      screen.getByText('15:00');
      screen.getByText('16:00');
    });
  });

  it('should render BookingForm and handle form interactions', () => {
    const formData = {
      date: '2023-12-26',
      time: '14:00',
      guests: '2',
      occasion: 'Birthday',
    };

    const setFormData = jest.fn();
    const availableTimes = ['14:00', '15:00', '16:00'];
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
        formData={formData}
        setFormData={setFormData}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    );

    screen.getByLabelText('Choose date');
    screen.getByLabelText('Choose time');
    screen.getByLabelText('Number of guests');
    screen.getByLabelText('Occasion');

    userEvent.type(screen.getByLabelText('Choose date'), '2023-12-26');
    userEvent.selectOptions(screen.getByLabelText('Choose time'), '15:00');
    userEvent.type(screen.getByLabelText('Number of guests'), '3');
    userEvent.selectOptions(screen.getByLabelText('Occasion'), 'Anniversary');
    userEvent.click(screen.getByText('Make Your reservation'));
  });
});