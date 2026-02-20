import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
  const { userId } = useParams();

  return (
    <div className="profile-details">
      <h3>Profile Details</h3>
      {userId && <p className="info-badge">Viewing details for user ID: {userId}</p>}
      
      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Name:</span>
          <span className="detail-value">John Doe</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Email:</span>
          <span className="detail-value">john.doe@example.com</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Location:</span>
          <span className="detail-value">New York, USA</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Member since:</span>
          <span className="detail-value">January 2024</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Role:</span>
          <span className="detail-value">Administrator</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;