import React from 'react'
import Image from "../../assets/avatar-1.svg"
import "./About.css"

const About = () => {
  return (
    <section className="about container section" id="about">
        <h2 className='section_title'>About Me</h2>
        <div className='about_container grid'>
            <img src={Image} alt="" className='about_img'/>
            <div className='about_data grid'>
                <div className='about_info'>Hi, I'm Kota Sree Kalyan, a passionate web developer and machine learning enthusiast currently pursuing a B.Tech in Information Technology at Sreenidhi Institute of Science and Technology, Hyderabad. I love building innovative web solutions and exploring the transformative potential of AI in modern applications.
                    <p className='about_description'>
</p>
                    <p className='about_description'>As the organizer of UXplosion, a design hackathon, I have honed my skills in collaboration and creative problem-solving. My commitment to continuous learning keeps me updated with the latest trends in technology, ensuring that my work is always impactful and forward-thinking.</p>                </div>
            </div>
        </div>
    </section>
  )
}

export default About