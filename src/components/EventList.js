import React from "react";

const EventList = ({ events, onClose, onEventClick }) => (
  <div>
    <h2>Events on this Date</h2>
    <button onClick={onClose}>Close</button>
    <ul>
      {events.map((event) => (
        <li key={event.id} onClick={() => onEventClick(event)}>
          {event.title} - {event.start.toLocaleTimeString()}
        </li>
      ))}
    </ul>
  </div>
);

export default EventList;
