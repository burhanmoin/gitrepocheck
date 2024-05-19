import Countrylist from "./Countrylist";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function Home() {
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleFromChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromValue(event.target.value);
  };

  const handleToChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToValue(event.target.value);
  };
    return (
        <h1 className="heading" style={{ fontWeight: '500', margin: '80px'}}>
            Assessment<br />
            <p className="paragraph" style={{fontSize: '1.1rem'}}>Please provide some information 
            regarding your upcoming trip</p>
            <h2 className="formheading"style={{fontSize: '1rem', fontWeight: '500'}}> <span>Country travelling from<span style={{fontSize: '1.4rem', color:'red'}}>*<span  style={{
                color: 'red',
                fontSize: '1rem',
                marginLeft: '10px',
                border: '2px solid red',
                borderRadius: '50%',
                textAlign:'center',
                width: "20px",
                height: "20px",
                display: 'inline-block',
                cursor: 'pointer'
                }}>?
                </span></span><span style={{marginLeft: '500px', marginBottom: '5px',}}>Country travelling to<span style={{fontSize: '1.4rem', color:'red'}}>*</span><span  style={{
                color: 'red',
                fontSize: '1rem',
                marginLeft: '10px',
                border: '2px solid red',
                borderRadius: '50%',
                textAlign:'center',
                width: "20px",
                height: "20px",
                display: 'inline-block',
                cursor: 'pointer'
                }}>?
                </span> </span>
                <br/>
                <select value={fromValue} onChange={handleFromChange}>
                    <option value="">Please select country travelling from</option>
                    {Countrylist.map((country) => (
                    <option key={country.id} value={country.alphacode}>
                        {country.alphacode} - {country.Country}
                    </option>
                    ))}
                </select>
                <span style={{marginLeft: '340px'}} ><select value={toValue} onChange={handleToChange}>
                    <option value="">Please select country travelling to</option>
                    {Countrylist.map((country) => (
                    <option key={country.id} value={country.alphacode}>
                        {country.alphacode} - {country.Country}
                    </option>
                    ))}
                </select></span>
                </span>
                <h3><span style={{fontSize: '1rem', fontWeight: '500'}}>Starting date of your trip<span style={{fontSize: '1.4rem', color:'red'}}>*<span  style={{
                color: 'red',
                fontSize: '1rem',
                marginLeft: '10px',
                border: '2px solid red',
                borderRadius: '50%',
                textAlign:'center',
                width: "20px",
                height: "20px",
                display: 'inline-block',
                cursor: 'pointer'
                }}>?
                </span></span></span><br/> <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                /></h3>
            </h2>
        </h1>
    );
}
