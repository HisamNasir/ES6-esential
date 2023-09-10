'use client'
import React, { useState } from 'react';

const EventForm = ({ selectedDate, onEventAdd }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      onEventAdd({ date: selectedDate, description });
      setDescription('');
    }
  };

  return (
    <div className="event-form">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
