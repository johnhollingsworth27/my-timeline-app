import React from 'react';
import '../../../../Timeline2.css';

const Neolithic = () => {
    return (
        <>
            <div className="timeline-container">
                <div>
                    <h1>Neolithic Era: 8,000 bce - 3,000 bce</h1>
                </div>
                <div className="timeline-item">

                    <iframe
                        className="timeline-iframe"
                        src="https://time.graphics/embed?v=1&id=534160"                        title="Embedded Timeline"
                    ></iframe>
                    <br />
                </div>
            </div>
        </>
    );
};

export default Neolithic;
