
import React from 'react';

/* Star rating component */
function StarRating({ rating, max = 5 }) {
  return (
    <div className="star-rating">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < rating ? 'star filled' : 'star'}
        >
          ★
        </span>
      ))}
    </div>
  );
}
export default StarRating;
// Användning: <StarRating rating={3} />
