import React, { useState } from 'react';
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import ThemeSwitcher from '../ThemeSwitcher';

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    
    return (
        <>
            <aside className={toggle ? "aside show_menu" : "aside"}>
                <ThemeSwitcher />
                <nav className="nav">
                    <div className='nav_menu'>
                        <ul className='nav_list'>
                            <li className='nav_item'>
                                <a href="#home" className='nav_link' onClick={() => showMenu(false)}>
                                    <i className='icon-home'></i>
                                </a>
                            </li>
                            <li className='nav_item'>
                                <a href="#about" className='nav_link' onClick={() => showMenu(false)}>
                                    <i className='icon-info'></i>
                                </a>
                            </li>
                            <li className='nav_item'>
                                <a href="#skills" className='nav_link' onClick={() => showMenu(false)}>
                                    <i className='icon-briefcase'></i>
                                </a>
                            </li>
                            <li className='nav_item'>
                                <a href="#experience" className='nav_link' onClick={() => showMenu(false)}>
                                    <i className='icon-graduation'></i>
                                </a>
                            </li>
                            <li className='nav_item'>
                                <a href="#projects" className='nav_link' onClick={() => showMenu(false)}>
                                    <i className='icon-note'></i>
                                </a>
                            </li>
                           </ul>
                    </div>
                </nav>
                <div className='nav_footer'>
                    <span className='copyright'>&copy; K Sree Kalyan</span>
                </div>
            </aside>
            <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
                <i className='icon-menu'></i>
            </div>
        </>
    )
}

export default Sidebar;
