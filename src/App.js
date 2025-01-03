import './App.css';
import 'aframe';
import bal from '../src/bal.mp4';
import { ClerkProvider, SignIn, SignedOut, SignOutButton } from '@clerk/clerk-react';
import React, { useState, useRef, useEffect} from 'react';
import out from '../src/out.mp4';
import blue from './blue.mp4'




function App( ){   
  const video = () => {
    video.play()
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(bal);
  const videoRef1 = useRef(out);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () =>{
      video.handlePlay()
    };
    if (isPlaying) {
      handlePlay();
    }
    
  }
  )
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
            <video src={bal}onPlay={()=> videoRef1(!isPlaying())}></video>
             
            </div>
            <div>
              
              
              
            
            
            </div>
        </div>
        </div>        
  );  
}
export default App;
