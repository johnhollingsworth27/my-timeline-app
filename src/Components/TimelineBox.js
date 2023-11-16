import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type-checking
import '../TimelineBox.css'; // Make sure the path to your CSS file is correct


const TimelineBox = ({ timelineId, onClick }) => {
  return (
    <button className="timeline-box" onClick={onClick}>
      <div className="timeline-label">Timeline {timelineId}</div>
      {/* This div will contain the background image of the timeline mock */}
      <div className="timeline-mock"></div>
    </button>
  );
};

TimelineBox.propTypes = {
  timelineId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TimelineBox;
