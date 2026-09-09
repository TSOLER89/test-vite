
import React from 'react';

function StatusBadge({ status }) {
  const colors = {
    active: "#02C39A",
    pending: "#F9E795",
    inactive: "#B85042",
  };

  return (
    <span
      style={{
        background: colors[status],
        padding: "4px 12px",
        borderRadius: 12,
        color: "white",
      }}
    >
      {status.toUpperCase()}
    </span>
  );
}
export default StatusBadge;
