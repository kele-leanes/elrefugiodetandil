import React from 'react'
import video from '../../videos/Refugio.mp4'
import './index.css'



function VideoContainer() {

        return (
            <div className='video-container'>
                <video className='video-wrapper' src={ video }  autoPlay loop muted ></video>      
            </div>
        );
}

export default VideoContainer;