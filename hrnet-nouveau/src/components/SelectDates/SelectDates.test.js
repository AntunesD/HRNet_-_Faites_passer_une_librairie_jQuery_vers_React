import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Pour utiliser les matchers supplémentaires de jest-dom
import SelectDate from './SelectDates';
jest.mock('react-datepicker/dist/react-datepicker.css', () => ({}));


describe('SelectDate component', () => {
  test('renders with correct label', () => {
    render(<SelectDate id="myDate" name="Date" selectedDate={new Date()} onChange={() => {}} />);
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
  });

  test('renders with correct placeholder text', () => {
    render(<SelectDate id="myDate" name="Date" selectedDate={new Date()} onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
  });

  test('calls onChange handler when date is selected', () => {
    const handleChange = jest.fn();
    render(<SelectDate id="myDate" name="Date" selectedDate={new Date()} onChange={handleChange} />);
    const input = screen.getByLabelText('Date');
    fireEvent.change(input, { target: { value: '03/26/2024' } }); // Simule un changement de date
    expect(handleChange).toHaveBeenCalled();
  });
});
