import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();

  return (
    <div className="profile">
      <h2>User Profile {userId && `- User ${userId}`}</h2>
      <nav className="profile-nav">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;