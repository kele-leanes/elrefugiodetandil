import React, { useEffect } from 'react'
import video from '../../videos/Refugio.mp4'
import video_vertical from '../../videos/Refugio_Vertical.mp4'
import { useMediaQuery } from 'react-responsive'
import Spinner from './../Spinner';
import { Helmet } from 'react-helmet'
import './index.css';



function VideoContainer() {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const [videoLoaded, setVideoLoaded]=React.useState(false);
    const myRef = React.createRef();

    useEffect(()=> {
        window.scrollTo(0, myRef.current.offsetTop)
    })
        return (
            <div className='video-container' ref={myRef}>
                <Helmet>
                    <title>El Refugio | Bar Serrano</title>
                </Helmet>
                {!videoLoaded && <Spinner />}
                <video className='video-wrapper' 
                    onLoadedData={()=>setVideoLoaded(true)} 
                    src={ isPortrait ? video_vertical : video }  
                    autoPlay 
                    loop 
                    muted 
                    disablePictureInPicture 
                    playsInline 
                    style={{ opacity: videoLoaded ? 1 : 0 }}
                    >
                </video>
            </div>
        );
}

export default VideoContainer;