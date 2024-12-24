import React from 'react';
import bal from '../../src/bal.mp4'



const Main = () => {
    return (
        <div className='main'>
            <div className='overlay'>
            <video src={bal} alt=""/>             
            <div className='content'></div>
        </div>
        </div>
    )
}
export default Main