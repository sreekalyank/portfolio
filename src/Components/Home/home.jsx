import React from 'react';
import './home.css';
import HeaderIcons from './HeaderIcons';
import Scroll from './Scroll';
import Me from "../../assets/avatar-2.svg";
import Typewriter from '../Typewriter';
const texts=[
    "ML Enthusiast",
    "Information Technology Undergraduate",
    "Web Developer"
];

const home = () => {
  return (
        <section className='home container' id='home'>
           
           <div className='intro'>
                
                <img src={Me} alt="profile" className="home_img" />
                <h1 className='home_name'>Kota Sree Kalyan</h1>
                <div>
                    <span className='home_education'> I'm a <Typewriter texts={texts} speed={100} delay={2000} /></span>
                </div>

                <HeaderIcons />

                
          

                <Scroll />
            </div>
            
        </section>  
    )
}

export default home;