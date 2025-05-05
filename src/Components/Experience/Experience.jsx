import React from 'react';
import "./Experience.css";
import Data from './Data';
import Card from './Card';

const Experience = () => {
  return (
    <section className='exp container section' id='resume'>
        <h2 className='section_title'>Experience</h2>

        <div className='exp_container grid' >
            <div className='timeline grid'>
                {Data.map((val,id)=>{
                   
                    return (
                        <Card key={id} icon={val.icon} title={val.title} year={val.year} />
                    )
                   
                })}
            </div>
            {/* <div className='timeline grid'>
                {Data.map((val,id)=>{
                   if(val.category === 'two'){
                    return (
                        <Card key={id} icon={val.icon} title={val.title} year={val.year} />
                    )
                   }
                })}
            </div> */}
        </div>
    </section>
  )
}

export default Experience