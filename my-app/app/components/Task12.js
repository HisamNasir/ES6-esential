'use client'
import React, { useState } from 'react';
import EventForm from './EventsForm';
// import './Calendar.css'; // Add CSS styles for calendar

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventAdd = (event) => {
    setEvents([...events, event]);
  };

  const eventsForSelectedDate = events.filter(
    (event) => event.date === selectedDate
  );

  return (
    <div className="calendar-container text-white">
      <div className="calendar">
        {/* Render your calendar here */}
      </div>
      <div className="event-list">
        <h2>Events for {selectedDate}</h2>
        <ul>
          {eventsForSelectedDate.map((event, index) => (
            <li key={index}>{event.description}</li>
          ))}
        </ul>
      </div>
      <EventForm
        selectedDate={selectedDate}
        onEventAdd={handleEventAdd}
      />
    </div>
  );
};

export default Calendar;
