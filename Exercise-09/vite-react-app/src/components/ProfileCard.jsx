import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profileData }) => {
  const { name, designation, about, imageUrl } = profileData;
  
  return (
    <div className="profile-card">
      <img 
        src={imageUrl} 
        alt={`${name}'s profile`} 
        className="profile-image" 
      />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-designation">{designation}</p>
      <p className="profile-about">{about}</p>
    </div>
  );
};

export default ProfileCard; 