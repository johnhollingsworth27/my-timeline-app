import React from 'react';
import '../../Timeline2.css';

const wikiEmbed = () => {
    return (
        <div className="timeline-container">

            <div>
                <h1>Title for embed content</h1>
            </div>
            <div className="timeline-item">

                <iframe
                    className="timeline-iframe"
                    src="https://en.wikipedia.org/wiki/Timeline_of_Western_philosophers"                    
                    allowFullScreen
                    title="Embedded Timeline"
                ></iframe>
            </div>
        </div>
    );
};

export default wikiEmbed;