'use client'
import React, { useState } from 'react';

function Task4() {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  const randomIndex = Math.floor(Math.random() * numberArray.length);
  const initialRandomNumber = numberArray[randomIndex];
  const [randomNumber] = useState(initialRandomNumber);
  const [userGuess, setUserGuess] = useState('');
  const [result, setResult] = useState('');
  function handleInputChange(event) {
    setUserGuess(event.target.value);
  }
  function handleCheckGuess() {
    if (parseInt(userGuess, 10) === randomNumber) {setResult('win');}
    else {setResult('lose');}
    }
  return (
    <div>
      <input
        className='border rounded-l-xl h-10 px-2'
        onChange={(event) => handleInputChange(event)}
        placeholder='Select number(1-10)'
        min={1} max={10} type="number"
        value={userGuess}/>
      <button className='border rounded-r-xl h-10 px-2 hover:bg-slate-100' onClick={() => handleCheckGuess()}>Check Guess</button>
      {result && <p>You {result}!</p>}
    </div>
  );
}
export default Task4;
