import React, { useState, useEffect } from 'react';

function Quotes() {
  const API_KEY = 'PfgoD6eJJrdbX0H0Rpd90w==rNfC856dJmfCqHLG';
  const [quote, setQuote] = useState({ category: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
          method: 'GET',
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setQuote(json[0]);
        setIsLoading(false);
      } catch (error) {
        setHasError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {hasError ? (
        <p>Something went wrong! Please verify the connection.</p>
      ) : (
        <>
          <p className="quote">{quote.quote}</p>
          <span className="quote-author">
            {quote.author}
          </span>
        </>
      )}
    </div>
  );
}

export default Quotes;
