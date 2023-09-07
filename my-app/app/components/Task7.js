'use client'
import React, { useState } from 'react';
const quizData = [
  {question: 'What is the your 1st name',
    options: ['Hisam', 'Nasir', 'Ali', 'Hamza'],
    correctAnswer: 'Hisam',},
    
  {question: 'What is Your Last name',
    options: ['Hisam', 'Nasir', 'Ali', 'Hamza'],
    correctAnswer: 'Nasir',},];

function Task7() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswerSubmit = (selectedOption) => {
    const currentCorrectAnswer = quizData[currentQuestion].correctAnswer;
    if (selectedOption === currentCorrectAnswer) {setScore(score + 1);}
    setUserAnswers([...userAnswers, selectedOption]);
    setCurrentQuestion(currentQuestion + 1);};
  const renderQuiz = () => {
    if (currentQuestion >= quizData.length) {
      return (<div ><p>Score: {score}/{quizData.length}</p></div>);}
    
      const currentQuestionData = quizData[currentQuestion];
    return (
      <div className='text-white'>
        <hr/>
        <hr/>
        <h2 className='my-2'>Question {currentQuestion + 1}:</h2>
        <hr/>
        <p className='my-2'>{currentQuestionData.question}</p>
        {currentQuestionData.options.map((option, index) => (
          <button
            className=' my-2 p-2 px-4 w-full border rounded-xl hover:bg-slate-600 grid grid-cols-1'
            type='checkbox'
            onClick={() => handleAnswerSubmit(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="Task7 text-white flex justify-center">
        <div className='p-10 bg-slate-900 space-y-4 rounded-xl'>
      <h1 className=' text-2xl'>Quiz</h1>
      {renderQuiz()}
        </div>
    </div>
  );
}

export default Task7;
