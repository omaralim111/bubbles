import './App.css';
import './index.css'
import 'aframe';
import bal from '../src/bal.mp4';
import React, { useState, useRef, useEffect} from 'react';
import blue from './blue.mp4'
import { Wallet, ethers } from 'ethers';







function App( ){  
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState (null);

  
  
  const [isPlaying, setIsPlaying] = useState(null);
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }; 

  const connectWallet = async(accountData) => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        const accounts = await window.ethereum.request({ 
          method: "eth_requestAccounts", 
          params: []
        });
        const account = accounts[0];
        console.log('Account:',account);
        setAccount(accountData);
        setProvider(provider); 
      } catch(err) {
        console.error(err.message);
      }
    } else {
      console.log("Please Install MetaMask");
    }
  } 
  
  return (    
      <div className='Main'>
          <video src={blue} autoPlay loop muted />   
            <div className='overlay'/>
              <h1 className='page-break'>The National Token Initiative</h1>
              <h1 className='content'>
                PROJECT TOKEN 2025
              </h1>
              <page-break></page-break>          
            <div className='ep1'> 
            <div className='parent'/>
            <div class="parent">
            <div class="child1"></div>
            <div className='child2'></div>
            <div class="videos"></div>
            <video src={bal} ref={videoRef} controls></video> 
            <div>
              {account ? (
                <p>welcome, {account.username}!</p>
              ):(
                <button onClick={connectWallet}>WATCH VIDEO</button>
              )}
              </div>  
            <div>   
            </div>
            </div>
            <div>   
            </div>
        </div>
        </div>        
  );  
}
export default App;
