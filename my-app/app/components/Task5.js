'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Task5 = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [pkrAmount, setPkrAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleCurrencyChanger = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleConverter = async () => {
    try {
      const response = await axios.get( // Iused  axios to get http request
        `https://api.exchangerate-api.com/v4/latest/PKR` //exchange rate
      );
      const exchangeRates = response.data.rates;
      const conversionRate = exchangeRates[selectedCurrency];
      if (conversionRate) {
        const converted = pkrAmount / conversionRate;
        setConvertedAmount(converted.toFixed(2));
      } else {
        setConvertedAmount(null);
      }
    } catch (error) {};
  };
  return (
    <div className='flex justify-center'>
      <div className=' bg-slate-900 text-white p-10 rounded-xl'>

      <label htmlFor="pkrAmount">Enter {selectedCurrency} Amount: </label>
      <input className='rounded-l-xl hover:bg-slate-700  bg-slate-950 border h-10 p-2 my-2'
        min={1}
        type="number"
        id="pkrAmount"
        value={pkrAmount}
        onChange={(e) => setPkrAmount(e.target.value)}
      />
            <select className='rounded-r-xl bg-slate-950 border h-10 p-2 my-2 hover:bg-slate-700 ' id="currency" onChange={handleCurrencyChanger} value={selectedCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <button  className='rounded-xl bg-slate-950 border h-10 hover:bg-slate-700 p-2 m-2'  onClick={handleConverter}>Convert</button>
      <p>
        Converted Amount in PKR: {convertedAmount ? `${convertedAmount} PKR` : 'N/A'}
      </p>
      </div>
    </div>
  );
};

export default Task5;
