import React from "react";
import "./EventDetailsPopup.css";

const EventDetailsPopup = ({ event, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <h2>{event.title}</h2>
        <p>
          <strong>Job Title:</strong> {event.job.title}
        </p>
        <p>
          <strong>Role:</strong> {event.job.role}
        </p>
        <p>
          <strong>Skills:</strong> {event.job.skills}
        </p>
        <p>
          <strong>Job Description:</strong> {event.job.description}
        </p>
        <p>
          <strong>Candidate Name:</strong> {event.candidate.name}
        </p>
        <p>
          <strong>Candidate Email:</strong> {event.candidate.email}
        </p>
        <p>
          <strong>Meeting Link:</strong>{" "}
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            Join the meeting
          </a>
        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventDetailsPopup;
