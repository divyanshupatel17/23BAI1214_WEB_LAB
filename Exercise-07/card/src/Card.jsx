// Card.jsx

import React from 'react';
import './index.css';
import meImage from './assets/me.jpg';

function Card() {
    return (
        <>
            <div className="card">
                <div className="profile-image">
                    <img src={meImage} alt="profile-img" /> 
                </div>
                <div className="content">
                    <h2>Divyanshu Patel</h2>
                    <p>
                        A CS student at VIT Chennai, passionate about web development and digital art. 
                        Exploring database design and query processing while working on web and network projects. 
                        Focused on building efficient, user-centric applications with strong frontend and database skills.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;
