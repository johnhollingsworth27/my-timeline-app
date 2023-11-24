import React from 'react';
import '../../../../CSS/Timeline2.css';

const HighMiddleAges = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>High Middle Ages: 1000 - 1250</h1>
                </div>
                <div className="timeline-item">
                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=858592" 
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default HighMiddleAges;
