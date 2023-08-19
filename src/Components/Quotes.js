import React, { useState, useEffect } from "react";

function Quotes() {
  const API_KEY = 'PfgoD6eJJrdbX0H0Rpd90w==rNfC856dJmfCqHLG';
  const [quote, setQuote] = useState({ category: "" }); // Initialize with an empty object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes?category=learning", {
          method: 'GET',
          headers: {
            'X-Api-Key': API_KEY, // Remove curly braces around API_KEY
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setQuote(json[0]); // Assuming the API returns an array of quotes, so we take the first one
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <p> {quote.quote}- {quote.author}</p>
  );
}

export default Quotes;
