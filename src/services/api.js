// /src/services/api.js
import axios from "axios";

// Base URL for the mock API
const BASE_URL = process.env.PUBLIC_URL || "";

// Fetch calendar details (events for specific date ranges)
export const getCalendarDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    throw new Error("Failed to fetch calendar details");
  }
};

// Fetch event details based on event ID
export const getEventDetails = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw new Error("Failed to fetch event details");
  }
};
