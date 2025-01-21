// import React from "react";
// import "./EventDetailsPopup.css";

// const EventDetailsPopup = ({ event, onClose }) => {
//   return (
//     <div className="overlay" onClick={onClose}>
//       <div className="popup" onClick={(e) => e.stopPropagation()}>
//         <h2>{event.title}</h2>
//         <p>
//           <strong>Job Title:</strong> {event.job.title}
//         </p>
//         <p>
//           <strong>Role:</strong> {event.job.role}
//         </p>
//         <p>
//           <strong>Skills:</strong> {event.job.skills}
//         </p>
//         <p>
//           <strong>Job Description:</strong> {event.job.description}
//         </p>
//         <p>
//           <strong>Candidate Name:</strong> {event.candidate.name}
//         </p>
//         <p>
//           <strong>Candidate Email:</strong> {event.candidate.email}
//         </p>
//         <p>
//           <strong>Meeting Link:</strong>{" "}
//           <a href={event.link} target="_blank" rel="noopener noreferrer">
//             Join the meeting
//           </a>
//         </p>
//         <button className="close-button" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventDetailsPopup;

// src/components/EventDetailsPopup.js
import React from "react";

const EventDetailsPopup = ({ event, onClose }) => (
  <div style={styles.overlay} onClick={onClose}>
    <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
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
        <strong>Description:</strong> {event.job.description}
      </p>
      <p>
        <strong>Candidate:</strong> {event.candidate.name}
      </p>
      <p>
        <strong>Email:</strong> {event.candidate.email}
      </p>
      <a href={event.link} target="_blank" rel="noopener noreferrer">
        Join Meeting
      </a>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
  },
};

export default EventDetailsPopup;
