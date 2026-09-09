import React from 'react';

/* Progress bar component */
function ProgressBar({ percent }) {
  return (
    <div className="progress-track" style={{ '--progress-width': `${percent}%` }}>
      <div className="progress-fill" />
    </div>
  );
}

export default ProgressBar;

// Användning: <ProgressBar percent={65} />
