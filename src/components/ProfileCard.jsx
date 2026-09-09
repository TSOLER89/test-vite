

import React from 'react';

/* Profile card component */
function ProfileCard({ name, role, initials }) {
  return (
    <div className="card">
      <div className="avatar">{initials}</div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
export default ProfileCard;
// Användning:
<ProfileCard
  name="TSOLER HAYITIAN"
  role="Frontend-Utvecklare"
  initials="TH"
/>
