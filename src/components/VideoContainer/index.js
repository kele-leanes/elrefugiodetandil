import React from 'react'
import video from '../../videos/Refugio.mp4'
import video_vertical from '../../videos/Refugio_Vertical.mp4'
import { useMediaQuery } from 'react-responsive'
import Spinner from './../Spinner';
import './index.css'



function VideoContainer() {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const [videoLoaded, setVideoLoaded]=React.useState(false);
        return (
            <div className='video-container'>
                {!videoLoaded && <Spinner />}
                {isPortrait ? 
                <video className='video-wrapper' 
                    onLoadedData={()=>setVideoLoaded(true)} 
                    src={ video_vertical }  
                    autoPlay 
                    loop 
                    muted 
                    disablePictureInPicture 
                    playsInline 
                    style={{ opacity: videoLoaded ? 1 : 0 }}
                    >
                </video> : 
                <video className='video-wrapper' 
                    onLoadedData={()=>setVideoLoaded(true)} 
                    src={ video }  
                    autoPlay 
                    loop 
                    muted 
                    disablePictureInPicture 
                    playsInline 
                    style={{ opacity: videoLoaded ? 1 : 0 }}
                    >
                </video>}         
            </div>
        );
}

export default VideoContainer;