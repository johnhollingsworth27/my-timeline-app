import React from 'react';
import '../../../../CSS/Timeline2.css';

const ClassicalAntiquity = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>Classical Antiquity: 800 bce - 475 ce</h1>
                </div>
                <div className="timeline-item">

                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=858589"                     
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default ClassicalAntiquity;
