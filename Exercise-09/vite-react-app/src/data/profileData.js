import meImage from '../assets/me.jpg';

// Single profile data to be used for all cards
const profileData = {
  name: "Divyannshu Patel",
  designation: "Web Developer",
  about: "Passionate about creating beautiful and functional web applications with React.",
  imageUrl: meImage
};

// Create an array of 8 identical profiles
const profilesData = Array(8).fill(profileData);

export default profilesData; 