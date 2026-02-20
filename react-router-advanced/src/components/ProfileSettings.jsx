import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileSettings = () => {
  const { userId } = useParams();

  return (
    <div className="profile-settings">
      <h3>Profile Settings</h3>
      {userId && <p>Editing settings for user ID: {userId}</p>}
      <form>
        <div className="form-group">
          <label>Email Notifications:</label>
          <input type="checkbox" /> Enable
        </div>
        <div className="form-group">
          <label>Theme:</label>
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default ProfileSettings;