import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
  const { userId } = useParams();

  return (
    <div className="profile-details">
      <h3>Profile Details</h3>
      {userId && <p>Viewing profile for user ID: {userId}</p>}
      <div className="details-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Location:</strong> New York, USA</p>
        <p><strong>Member Since:</strong> January 2024</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>
    </div>
  );
};

export default ProfileDetails;