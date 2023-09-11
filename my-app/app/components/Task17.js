import React from 'react';

const Task17 = () => {
  const fname = 'Hisam';
  const numbers = [1, 2, 3];
  const person = { name: 'Ali', age: 20 };

  const greeting = `Hello, ${fname}!`; //Template Literals:
  const [first, second] = numbers;  //Destructuring
  const newArray = [...numbers, 4, 5, 6, 7, 8];  //Spread Operator
  const { age, ...rest } = person;  //Rest Operator
  return (
    <div className=' text-center text-white flex flex-col justify-center h-full w-full '>
      <p>{greeting}</p>
      <p>First and Second number is {first} & {second}</p>
      <p>All Numbers {newArray.join(', ')}</p>
      <p>Age: {age} {JSON.stringify(rest)}</p>
    </div>
  );
};

export default Task17;
