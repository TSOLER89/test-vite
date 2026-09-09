
import React from 'react';

function StarRating({ rating, max = 5 }) {
  return (
    <div>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          style={{ color: i < rating ? "#F9E795" : "#ccc" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
export default StarRating;
// Användning: <StarRating rating={3} />
