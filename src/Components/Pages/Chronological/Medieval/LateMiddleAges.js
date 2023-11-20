import React from 'react';
import '../../../../Timeline2.css';

const LateMiddleAges = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>Late Middle Ages: 1300 - 1500</h1>
                </div>
                <div className="timeline-item">
                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=117219" 
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default LateMiddleAges;
