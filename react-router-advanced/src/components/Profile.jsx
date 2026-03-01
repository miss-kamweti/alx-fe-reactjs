import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  const { userId } = useParams();

  return (
    <div className="profile">
      <h2>User Profile {userId && `- User ${userId}`}</h2>
      
      <nav className="profile-nav">
        <Link to={`/profile${userId ? `/user/${userId}` : ''}/details`}>Profile Details</Link>
        <Link to={`/profile${userId ? `/user/${userId}` : ''}/settings`}>Profile Settings</Link>
      </nav>

      <div className="profile-content">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route index element={<ProfileDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;