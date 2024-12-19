import React from 'react';
import video1 from '../assets/components/Movie on 12-19-24 at 12.59 AM.mov';
const Main = () => {
    return (
        <div className='main'>
            <video src= {video1} autoPlay />
            <main/>
        </div>
    )
}

export default Main