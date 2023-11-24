import React from 'react';
import '../../../../CSS/Timeline2.css';

const EarlyModernPeriod = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>Early Modern Period: 1500 - 1700</h1>
                </div>
                <div className="timeline-item">
                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=12480"
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default EarlyModernPeriod;
