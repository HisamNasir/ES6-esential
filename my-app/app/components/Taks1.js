'use client'
import React, { useState, useEffect } from 'react';

//// const -> block withing it's body cant be called outside
//// let -> block withing it's body cant be called outside
//// var -> function throughout the code (Dont use it until it is necessary)

// what is the difference between (const vs let)

// const x=2;
// x=3;   // it will show error( you canot change const once declared to 2)

// let x=2;
// x=3; //it will show no error ( you can reasign variable of x)


// all the code are either copy or modified version of ES6-notes in vanila js

const Taks1 = () => {
    const [onetotenOutput, setonetotenOutput] = useState('');

  // Loop 
  useEffect(() => {function hello() { let output = '';
  for (var i = 0; i <= 10; i++) {
    output += i + ' ';
  }
  setonetotenOutput(output);
}
hello();
}, 
[] //Too many re-renders. React limits the number of renders to prevent an infinite loop. thats why used this to run array once
);


// take 2 vairables and apply operations on it
const [value, setValue] = useState({ x: 2, y: 2 });
const sum = value.x + value.y;
const mul = value.x * value.y;
const div = value.x / value.y;


// take strings and manuplate 
const text1 = 'hello';
const text2 = 'world';
const text= text1+' '+text2
const upText = text.toUpperCase();

//convert numb to str and str to numb
const numberconv = 42;
const stri = numberconv.toString();

  return (
    <div>
              <div>
      <div>{onetotenOutput}</div>
      <hr/>
      <p>Add={sum}<br/>Multiply={mul}<br/>Divide={div}</p>
      <hr/>
      <div>{upText}</div>
      </div>
      <hr/>
      <div><p>String Number: {stri}</p></div>
    </div>
  )
}

export default Taks1