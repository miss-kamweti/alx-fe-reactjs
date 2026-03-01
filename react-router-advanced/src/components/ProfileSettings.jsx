import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileSettings = () => {
  const { userId } = useParams();

  return (
    <div className="profile-settings">
      <h3>Profile Settings</h3>
      {userId && <p>Editing settings for user ID: {userId}</p>}
      <form className="settings-form">
        <div className="form-group">
          <label>
            <input type="checkbox" /> Email Notifications
          </label>
        </div>
        <div className="form-group">
          <label>Theme:</label>
          <select defaultValue="light">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-group">
          <label>Language:</label>
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default ProfileSettings;