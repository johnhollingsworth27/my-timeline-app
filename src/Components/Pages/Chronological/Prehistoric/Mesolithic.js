import React from 'react';
import '../../../../Timeline2.css';

const Mesolithic = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>Mesolithic Era: 10,000 bce - 8,000 bce</h1>
                </div>
                <div className="timeline-item">

                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=858530" 
                        allowFullScreen
                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default Mesolithic;
