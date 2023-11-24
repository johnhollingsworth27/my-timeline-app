import React from 'react';
import '../../../../CSS/Timeline2.css';

const LateModernPeriod = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>Late Modern Period: 1700 - 1900</h1>
                    <h2>1775 - 1900</h2>
                </div>
                <div className="timeline-item">
                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=858595" 
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default LateModernPeriod;
