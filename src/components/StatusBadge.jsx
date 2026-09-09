
import React from 'react';

/* Status badge component */      
function StatusBadge({ status }) {
  return (
    <span className={`status-badge status-${status}`}>
      {status.toUpperCase()}
    </span>
  );
}
export default StatusBadge;
