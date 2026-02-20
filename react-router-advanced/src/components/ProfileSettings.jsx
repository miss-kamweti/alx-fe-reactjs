import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileSettings = () => {
  const { userId } = useParams();

  return (
    <div className="profile-settings">
      <h3>Profile Settings</h3>
      {userId && <p className="info-badge">Editing settings for user ID: {userId}</p>}
      
      <form className="settings-form">
        <div className="form-group">
          <label>
            <input type="checkbox" /> Email Notifications
          </label>
          <small>Receive email updates about your account</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="theme">Theme Preference:</label>
          <select id="theme" defaultValue="light">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select id="language" defaultValue="en">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-btn">Save Settings</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;