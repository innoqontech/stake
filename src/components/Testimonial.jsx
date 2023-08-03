import React from 'react';
import '../styles/Testimonial.css';


const Testimonial = ({ title, description, name, occupation, profilePicture }) => {
    return (
      <div className='testicont'>
        <div className="content">
          <h3 style={{ paddingBottom: '30px' }}>{title}</h3>
          <p>{description}</p><span>Read More</span>
        </div>
        <div className='customerdetails'>
          <div>
            <img
              className='pfimg'
              src={profilePicture}
              alt="Profile"
            />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <p className='name'>{name}</p>
            <p className='prof'>{occupation}</p>
          </div>
        </div>
      </div>
    );
  };

export default Testimonial
