import React, { useState, useEffect, useCallback } from 'react';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const category = 'history';

    const fetchQuotes = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
                headers: {
                    'X-Api-Key': 'S9A5kAMmT6pm5myozTsnWg==pQcJABpiYIcKye8P' // Replace with your actual API key
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data); // Log the data to the console for inspection
            setQuotes(data);
        } catch (error) {
            console.error('Request failed:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        fetchQuotes();
    }, [fetchQuotes]);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>Generate Historical Quotes</h2>
                <button onClick={fetchQuotes} disabled={loading}>Click</button>
            </div>
            {loading && <p>Loading quotes...</p>}
            {error && <p>Error fetching quotes: {error}</p>}
            {!loading && !error && quotes.length > 0 ? (
                <ul>
                    {quotes.map((quote, index) => (
                        <li key={index}>
                            {quote.quote} - {quote.author}
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && !error && <p>No quotes found.</p>
            )}
        </div>
    );
};

export default Quotes;