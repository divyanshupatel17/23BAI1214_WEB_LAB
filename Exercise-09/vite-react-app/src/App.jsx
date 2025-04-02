import React from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import profilesData from './data/profileData'

function App() {
  return (
    <div className="app-container">
      <div className="cards-grid">
        {profilesData.map((profile, index) => (
          <ProfileCard key={index} profileData={profile} />
        ))}
      </div>
    </div>
  )
}

export default App
