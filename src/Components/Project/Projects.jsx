import React, { useState } from 'react';
import "./Projects.css";
import Resume from './Resume'; 
const Projects = () => {
    const [items,setitems]=useState(Resume);
    const handleCardClick = (url) => {
        if (url && url.startsWith('http')) {
            window.open(url, '_blank');
        } 
    }
    return (
    <section className="Project container section " id="work">
        <h2 className='section_title'>Projects</h2>
        <div className='work_container grid'>
            {items.map((elem)=>{
                const{id,image,title,category,url} = elem;
                return(
                    <div className='work_card' key={id} onClick={() => handleCardClick(url)}>
                        <div className='work_thumbnail'>
                            <img src={image} alt="" className='work_img' style={{ backgroundColor: '#00000' }}/>
                            <div className='work_mask'></div>
                        </div>
                        <span className='work_category'>{category}</span>
                        <h3 className='work_title'>{title}</h3>
                        <a href={url} className='work_button'>
                            <i className='icon-link work_button'></i>
                        </a>
                    </div>

                    
                )
            })
            }
        </div>
    </section>
  )
}

export default Projects