import React from 'react';

function Avatar({ name, size = 48 }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="avatar-chip" style={{ '--avatar-size': `${size}px` }}>
      {initials}
    </div>
  );
}
export default Avatar;