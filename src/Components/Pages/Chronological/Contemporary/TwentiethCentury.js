import React from 'react';
import '../../../../CSS/Timeline2.css';

const TwentiethCentury = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>20th Century</h1>
                    <h2>1900 - 1950</h2>
                </div>
                <div className="timeline-item">
                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=858601"
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
            <br />
            <div className="timeline-container">
                <div>
                    <h2>1950 - 2000</h2>
                </div>
                <div className="timeline-item">
                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=858598" 
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default TwentiethCentury;


