import React from 'react';
import '../../Timeline2.css';

const Civilization = () => {
    return (
        
        <div className="timeline-container">

            <div>
                <h1>Human Civilization</h1>
            </div>
            <div className="timeline-item">

                <iframe
                    className="timeline-iframe"
                    src="https://time.graphics/embed?v=1&id=47134"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded Timeline"
                ></iframe>
            </div>
        </div>
    );
};

export default Civilization;
