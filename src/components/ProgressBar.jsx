import React from 'react';

function ProgressBar({ percent }) {
  return (
    <div
      style={{
        width: "100%", height: 16,
        background: "#eee", borderRadius: 8,
      }}
    >
      <div
        style={{
          width: `${percent}%`,
          height: "100%",
          background: "#1E2761",
          borderRadius: 8,
        }}
      />
    </div>
  );
}

export default ProgressBar;

// Användning: <ProgressBar percent={65} />
