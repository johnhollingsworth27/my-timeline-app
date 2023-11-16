import React from 'react';
import '../../Timeline2.css'; 

const Civilization = () => {
    return (
        <div className="timeline-container">
            <div>
                <h1>History of Human Civilization</h1>
            </div>
            <iframe
                className="timeline-iframe"
                src="https://time.graphics/embed?v=1&id=47134"
                frameBorder="0"
                allowFullScreen
                
                title="Embedded Timeline"
            ></iframe>
        </div>
    );
};

export default Civilization;
