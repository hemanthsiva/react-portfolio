// import React from "react";

// const EventList = ({ events, onClose, onEventClick }) => {
//   return (
//     <div>
//       <button onClick={onClose}>Close</button>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id} onClick={() => onEventClick(event)}>
//             {event.title} - {new Date(event.start).toLocaleTimeString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventList;

// src/components/EventList.js
import React from "react";

const EventList = ({ events, onClose, onEventClick }) => (
  <div style={{ padding: "20px", background: "#f9f9f9" }}>
    <button onClick={onClose} style={{ marginBottom: "10px" }}>
      Close
    </button>
    <ul>
      {events.map((event) => (
        <li
          key={event.id}
          onClick={() => onEventClick(event)}
          style={{ cursor: "pointer" }}
        >
          {event.title} - {new Date(event.start).toLocaleTimeString()}
        </li>
      ))}
    </ul>
  </div>
);

export default EventList;
