import React, { useState, useEffect, useCallback } from 'react';

const HistoricalEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/historicalevents?text=${encodeURIComponent(searchTerm)}`, {
        headers: {
          'X-Api-Key': 'S9A5kAMmT6pm5myozTsnWg==pQcJABpiYIcKye8P' // Replace with your actual API key
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the data to the console for inspection
      setEvents(data);
    } catch (error) {
      console.error('Fetching error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]); 

  useEffect(() => {
    if (searchTerm) {
      fetchEvents();
    }
  }, [searchTerm, fetchEvents]); 

  const formatYear = (year) => {
    return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchEvents();
  };

  return (
    <div style={{ marginLeft: '1in', marginRight: '1in' }}>
    <h1>Historical Events</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Enter search term..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading historical events...</p>}
      {error && <p>Error fetching events: {error}</p>}
      {!loading && !error && events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {formatYear(event.year)}: {event.event || "Description not available."}
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>No historical events found.</p>
      )}
    </div>
  );
};

export default HistoricalEvents;
