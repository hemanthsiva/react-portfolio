const fetch = require("node-fetch"); // Install node-fetch if not already available

exports.handler = async function (event, context) {
  try {
    // Fetch the data from the external URL
    const response = await fetch(
      "https://hilarious-semifreddo-4e1635.netlify.app/db.json"
    );
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
