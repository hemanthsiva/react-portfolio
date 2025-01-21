// import axios from "axios";

// // Base URL for the hosted db.json
// const BASE_URL = "https://hilarious-semifreddo-4e1635.netlify.app/db.json";

// // Fetch calendar details (events for specific date ranges)
// export const getCalendarDetails = async () => {
//   try {
//     const response = await axios.get(BASE_URL);
//     return response.data.events; // Ensure you access the `events` property of the JSON
//   } catch (error) {
//     console.error("Error fetching calendar events:", error);
//     throw new Error("Failed to fetch calendar details");
//   }
// };

// // Fetch event details based on event ID
// export const getEventDetails = async (eventId) => {
//   try {
//     const response = await axios.get(BASE_URL);
//     const event = response.data.events.find((e) => e.id === eventId); // Match event by ID
//     if (!event) throw new Error("Event not found");
//     return event;
//   } catch (error) {
//     console.error("Error fetching event details:", error);
//     throw new Error("Failed to fetch event details");
//   }
// };

export const getCalendarDetails = async () => {
  try {
    // Fetch data from the Netlify function (not directly from the JSON file)
    const response = await fetch("/.netlify/functions/fetchJson");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
