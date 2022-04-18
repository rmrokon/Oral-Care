import React from 'react';
import Profile from '../../images/profile.png';

const About = () => {
    return (
        <div className='text-center mt-5'>
            <img className='w-25 border rounded-2' src={Profile} alt="" />
            <h3 className='my-3'>Md. Roknuzzaman</h3>
            <p className='w-50 mx-auto fs-4 bg-light p-3'>
                I want to be a Full Stack Web developer. I am focusing to learn the MERN stack. In that process, I started learning React.JS and the fundamentals are coming to an end. Thanks to Programming Hero. Besides I am planning to start learning Node.js and MongoDB soon.
            </p>
        </div>
    );
};

export default About;