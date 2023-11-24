import React from 'react';
import '../../../../CSS/Timeline2.css';

const TwentyFirstCentury = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>LTwenty First Century: 1990 - 2023</h1>
                </div>
                <div className="timeline-item">
                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=858613" 
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default TwentyFirstCentury;
