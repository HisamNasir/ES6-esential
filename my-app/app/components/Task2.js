'use client'

import React, { useEffect, useState } from 'react';
const QuoteList = [
    "The purpose of our lives is to be happy.— Dalai Lama",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "Get busy living or get busy dying. — Stephen King",
    "You only live once, but if you do it right, once is enough. — Mae West",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison"
];



function ShuffelQuoteDisplay() {
    const [ShuffelQuote, setShuffelQuote] = useState('');

    useEffect(() => {
        getShuffelQuote();
    }, []);
    const getShuffelQuote = () => {
        const ShuffelIndex = Math.floor(Math.random() * QuoteList.length);
        setShuffelQuote(QuoteList[ShuffelIndex]);
    };

    return (
        <div>
            {ShuffelQuote && <p>{ShuffelQuote}</p>}
        </div>
    );
}

export default ShuffelQuoteDisplay;
