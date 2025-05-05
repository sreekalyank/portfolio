import React,{useEffect,useState} from 'react'

const Typewriter = ({texts,speed=150,delay=1000}) => {
  const [displayText,setDisplayText]=useState('');
  const [charIndex,setCharIndex]=useState(0);
  const [textIndex,setTextIndex]=useState(0);
  
  useEffect(() =>{
    if(textIndex<texts.length){
        if(charIndex<texts[textIndex].length){
            const timeout = setTimeout(() =>{
                setDisplayText(displayText+texts[textIndex][charIndex]);
                setCharIndex(charIndex+1);
            },speed);
            return () => clearTimeout(timeout);
        }else{
            const delayTimeout = setTimeout(() =>{
                setDisplayText('');
                setCharIndex(0);
                setTextIndex((textIndex+1)%texts.length);
            },delay);
            return () => clearTimeout(delayTimeout);
        }
    }
  },[charIndex,textIndex,texts,displayText,speed,delay]);
  
    return (
    <div>{displayText}</div>
  )
}

export default Typewriter