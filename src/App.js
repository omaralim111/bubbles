import React from 'react';
import './App.css';
import 'aframe';
import bal from '../src/bal.mp4'
import { ClerkProvider, SignIn, SignInWithMetamaskButton, SignedOut } from '@clerk/clerk-react';




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
          <ClerkProvider publishableKey='pk_test_aWRlYWwtYmFzcy00Mi5jbGVyay5hY2NvdW50cy5kZXYk'> sign in 
            <SignIn>
                <p>signed in</p>
            </SignIn>
            <SignedOut>
                <SignInWithMetamaskButton/>
            </SignedOut>
          
          </ClerkProvider>
        </div>
      </div> 
  );  
}

export default App;
