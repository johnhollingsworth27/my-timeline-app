import React from 'react';
import { Link } from 'react-router-dom';
import TimelineBox from './TimelineBox'; // Your TimelineBox component
import '../LandingPage.css'; // Make sure the path to your CSS file is correct


const LandingPage = () => {
  return (
    <div className="landing-grid">
      {Array.from({ length: 9 }, (_, i) => {
        const timelineId = i + 1;
        return (
          <Link key={timelineId} to={`/timeline${timelineId}`}>
            <TimelineBox timelineId={timelineId} />
          </Link>
        );
      })}
    </div>
  );
};

export default LandingPage;
