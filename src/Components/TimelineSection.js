import React from 'react';
import TimelineTrack from './TimelineTrack';

const TimelineSection = ({ sectionTitle, tracks, onTrackSelect }) => {
    return (
        <div className="timeline-section">
            <h2>{sectionTitle}</h2>
            <div className="tracks">
                {tracks.map((track, index) => (
                    <TimelineTrack
                        key={index}
                        title={track.title}
                        onTrackSelect={() =>
                            onTrackSelect(track)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TimelineSection;