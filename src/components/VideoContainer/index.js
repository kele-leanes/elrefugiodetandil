import React from 'react'
import video from '../../videos/Refugio.mp4'
import video_vertical from '../../videos/Refugio_Vertical.mp4'
import { useMediaQuery } from 'react-responsive'
import './index.css'



function VideoContainer() {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
        return (
            <div className='video-container'>
                {isPortrait ? 
                <video className='video-wrapper' src={ video_vertical }  autoPlay loop muted disablePictureInPicture playsInline ></video> : 
                <video className='video-wrapper' src={ video }  autoPlay loop muted disablePictureInPicture playsInline ></video>}         
            </div>
        );
}

export default VideoContainer;