import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SelectDate = ({ id, selectedDate, name,  onChange }) => {
    return (
        <div className='select_date'>
            <label htmlFor={id}>{name}</label>
            <DatePicker
                id={id}
                selected={selectedDate}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                placeholderText={`Select ${name.toLowerCase()}`}
            />
        </div>
    );
}

export default SelectDate;
