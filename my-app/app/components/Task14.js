// pages/index.js
import Head from "next/head";
import React from "react";

// Utility function to generate random data
const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry"];
const genders = ["Male", "Female"];
const abilities = ["Intelligent", "Brave", "Fast Runner", "Strong"];

const generateRandomCharacter = () => {
  const name = randomElement(names);
  const gender = randomElement(genders);
  const age = Math.floor(Math.random() * 87) + 14; // age 14 to 100
  const ability = randomElement(abilities);
  return { age, gender, name, ability };
};
const RandomCharacter = () => {
  const { name, gender, age, ability } = generateRandomCharacter();

  return (
    <div className="p-4 m-10 rounded-xl bg-slate-900 text-white w-80">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-md">{`Special Ability: ${ability}`}</p>
      <p className="text-md">{`Age: ${age}`}</p>
      <p className="text-md">{gender}</p>
    </div>
  );
};

export default function Task14() {
  return (
    <div className="container  w-full mx-auto p-4">
        <h1 className="text-4xl  text-white font-semibold  text-center">Random Data Generator</h1>
      <div className="flex justify-center h-full items-center">
        
          <RandomCharacter />
        
      </div>
    </div>
  );
}
