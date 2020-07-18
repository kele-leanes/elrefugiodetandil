import React, { Component } from 'react'
import vertical from '../../videos/Vertical.MOV'
import landscape from '../../videos/Refugio.MOV'
import './index.css'



class VideoContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            verticalVideo: null
        }
    }
    
    componentWillMount() {
        
        let orientation = (window.screen.orientation || {}).type || window.screen.mozOrientation || window.screen.msOrientation;
        
        if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
            this.setState({ verticalVideo: false });
        } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
            this.setState({ verticalVideo: true });
        } else if (orientation === undefined) {
        console.log("The orientation API isn't supported in this browser :("); 
        }
    }

    render() {
        return (
            <div className='video-container'>
                { this.state.verticalVideo ? <video className='video-wrapper' src={ vertical }  autoPlay loop muted ></video> : <video className='video-wrapper' src={ landscape }  autoPlay loop muted></video> }         
            </div>
        );
    }
}

export default VideoContainer;