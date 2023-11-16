import React from 'react';

const TimelineTrack = ({ title, onTrackSelect }) => {
    return (
        <div classname="timeline-track"
            onClick={onTrackSelect}>
            <h3>{title}</h3>
            
        </div>
    );
};

export default TimelineTrack;