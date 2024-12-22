import React from 'react';
import './App.css';
import 'aframe';
import bal from '../src/bal.mp4'
import { ClerkProvider, SignInWithMetamaskButton, SignIn, SignedOut } from '@clerk/clerk-react';

function App(){ 
  return (    
    <div className='main'>
        <video src={bal} autoPlay loop muted />
        <div className='overlay'></div>
        <div className='content'>
          <h1>Block Chain Content</h1>
          <p>Art
            Officially
            Intelligent</p>
        </div>
      </div> 
  );  
}

export default App;
