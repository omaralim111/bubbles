import './App.css';
import 'aframe';
import bal from '../src/bal.mp4';
import { ClerkProvider, SignIn, SignedOut, SignOutButton } from '@clerk/clerk-react';
import React, { useState, useRef, useEffect} from 'react';
import out from '../src/out.mp4'




function App( ){   
  const video = () => {
    video.play()
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(bal);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () =>{
      video.play()
    };
    if (isPlaying) {
      handlePlay();
    }
    
  }
  )
  return (    
      <div className='Main'>
          <video src={bal} autoPlay loop muted />   
            <div className='overlay'/>
              <h1 className='content'>
                Block Chain Concepts
              </h1>
                
               <div className='ep1'> <button onClick={()=> setIsPlaying(!isPlaying)}>
                {isPlaying ? 'pause' : 'play'}
              </button>
              <h3>

              
              </h3>
              <div class="parent">
              <div class="child1">
              <button onClick={video}/>
              <video src={bal}></video>
                <p> Balance </p>

              </div>
              <div className='child2'></div>
              <div class="videos"></div>
              <video src={out}></video>
              <button onClick={out.play}/>
              <p> Beating on the door </p>
              </div>
            <div>
              
              
              
            
            
            </div>
        </div>
        </div>        
  );  
}
export default App;
