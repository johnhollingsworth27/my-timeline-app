import React from 'react';
import '../../Timeline2.css';

const UShistory = () => {
    return (
        <div className="timeline-container">

            <div>
                <h1>History of The United States</h1>
            </div>
            <div className="timeline-item">

                <iframe
                    className="timeline-iframe"
                    src="https://time.graphics/embed?v=1&id=44548"                    frameBorder="0"
                    allowFullScreen
                    title="Embedded Timeline"
                ></iframe>
            </div>
        </div>
    );
};

export default UShistory;