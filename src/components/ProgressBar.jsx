import React from 'react';

function ProgressBar({ percent }) {
  return (
    <div className="progress-track" style={{ '--progress-width': `${percent}%` }}>
      <div className="progress-fill" />
    </div>
  );
}

export default ProgressBar;

// Användning: <ProgressBar percent={65} />
