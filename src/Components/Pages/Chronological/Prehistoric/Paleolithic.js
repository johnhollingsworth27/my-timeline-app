import React from 'react';
import '../../../../CSS/Timeline2.css';

const Paleolithic = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>Paleolithic Era: 2.5 million bce - 10,000 bce</h1>
                </div>
                <div className="timeline-item">

                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=31869" frameBorder="0"
                        allowFullScreen
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
            <div className="timeline-container">

                <div>
                    <h1>Fossil Records</h1>
                </div>
                <div className="timeline-item">

                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=179347"
                        frameBorder="0"
                        allowFullScreen
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>

        </>
    );
};

export default Paleolithic;
