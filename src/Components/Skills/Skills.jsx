import React from 'react';
import "./Skills.css";

const Skills = () => {
  return (
    <section className="service container section" id="services">
        <h2 className='section_title'>Skills</h2>
        <ul className='skills_list'>
        <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-react" ></i>
                    <span className='icon_title'>React JS</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-solid fa-database"></i>
                    <span className='icon_title'>SQL</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-node"></i>
                    <span className='icon_title'>Node JS</span>
                </a>
            </li>
           
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-js"></i>
                    <span className='icon_title'>JavaScript</span>
                </a>
            </li>
        </ul>
        <ul className='skills_list'>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-html5"></i>
                    <span className='icon_title'>HTML</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-solid fa-computer"></i>
                    <span className='icon_title'>Problem Solving</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-java"></i>
                    <span className='icon_title'>Java</span>
                </a>
            </li>
            
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-python"></i>
                    <span className='icon_title'>Python</span>
                </a>
            </li>
        </ul>
    </section>
  );
};

export default Skills;
