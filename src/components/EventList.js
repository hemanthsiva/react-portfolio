import React from "react";

const EventList = ({ events, onClose, onEventClick }) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <ul>
        {events.map((event) => (
          <li key={event.id} onClick={() => onEventClick(event)}>
            {event.title} - {new Date(event.start).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
