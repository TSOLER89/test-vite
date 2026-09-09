import React from 'react';

function Avatar({ name, size = 48 }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      style={{
        width: size, height: size,
        borderRadius: "50%",
        background: "#1E2761",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {initials}
    </div>
  );
}
export default Avatar;