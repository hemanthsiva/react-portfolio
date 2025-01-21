import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { getCalendarDetails } from "../services/api";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import EventList from "./EventList"; // Component to list events
import EventDetailsPopup from "./EventDetailsPopup"; // Popup for event details

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventList, setShowEventList] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getCalendarDetails();
      const formattedEvents = data.map((event) => ({
        id: event.id,
        title: event.summary,
        start: new Date(event.start),
        end: new Date(event.end),
        description: event.desc,
        link: event.link,
        score: event.score.P,
        candidate: {
          name: `${event.user_det.candidate.candidate_firstName} ${event.user_det.candidate.candidate_lastName}`,
          email: event.user_det.candidate.candidate_email,
        },
        job: {
          title: event.job_id.jobRequest_Title,
          role: event.job_id.jobRequest_Role,
          skills: event.job_id.jobRequest_KeySkills,
          description: event.job_id.jobRequest_Description,
        },
        handledBy: {
          name: `${event.user_det.handled_by.firstName} ${event.user_det.handled_by.lastName}`,
          role: event.user_det.handled_by.userRole,
          email: event.user_det.handled_by.userEmail,
        },
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleDateClick = (slot) => {
    const eventsOnDate = events.filter(
      (event) => event.start.toDateString() === slot.start.toDateString()
    );
    setSelectedDate(eventsOnDate);
    setShowEventList(true);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectSlot={handleDateClick}
        onSelectEvent={handleEventClick}
        selectable
      />
      {showEventList && (
        <EventList
          events={selectedDate}
          onClose={() => setShowEventList(false)}
          onEventClick={handleEventClick}
        />
      )}
      {showEventDetails && (
        <EventDetailsPopup
          event={selectedEvent}
          onClose={() => setShowEventDetails(false)}
        />
      )}
    </div>
  );
};

export default CalendarComponent;
