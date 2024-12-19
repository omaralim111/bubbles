import React from 'react';
import './App.css';
import 'aframe';
import solar from './one.jpg';
import beating from './Beatin on the door.mp3'

function App(self){ 
  self.play.Audio
  let audio = new Audio("/Beatin on the door.mp3")
  const start = {
  }
  return (       
    <div>
      <header className='App-header'/> 
        <p>
        DONT <code>BE SHY </code>BUY  <buttfon onClick={play}/>
        <p>      </p>
        </p>
        <image src="/one.jpg" alt=""/>
         
    </div> 
  );  
}

export default App;
