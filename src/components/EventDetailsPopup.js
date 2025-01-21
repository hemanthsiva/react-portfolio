import React from "react";

const EventDetailsPopup = ({ event, onClose }) => (
  <div>
    <h2>{event.title}</h2>
    <p>{event.description}</p>
    <a href={event.link} target="_blank" rel="noopener noreferrer">
      Join Meeting
    </a>
    <button onClick={onClose}>Close</button>
  </div>
);

export default EventDetailsPopup;
