import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
  const { userId } = useParams();

  return (
    <div className="profile-details">
      <h3>Profile Details</h3>
      {userId && <p>Viewing details for user ID: {userId}</p>}
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Location: New York, USA</p>
      <p>Member since: January 2024</p>
    </div>
  );
};

export default ProfileDetails;