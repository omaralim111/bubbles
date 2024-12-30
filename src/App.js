import './App.css';
import 'aframe';
import bal from '../src/bal.mp4';
import { ClerkProvider, SignIn, SignedOut, SignOutButton } from '@clerk/clerk-react';
import React, { useState, useRef, useEffect} from 'react';
import blue from './blue.mp4'





function App( ){   
  
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);


  


  const handlePlay = () => {
    if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
    
    
  
  
  return (    
      <div className='Main'>
          <video src={blue} autoPlay loop muted />   
            <div className='overlay'/>
              <h1 className='page-break'>  The National Token Initiative</h1>
              <h1 className='content'>
                PROJECT TOKEN 2025
              </h1>
              <page-break></page-break>          
            <div className='ep1'> 
            <div className='contentv'/>
            <div class="parent">
            <div class="child1"></div>
            <div className='child2'></div>
            <div class="videos"></div>
            <video src={bal} ref={videoRef} controls></video>
             
            </div>
            <div>
              
              
              
            
            
            </div>
        </div>
        </div>        
  );  
}
export default App;
