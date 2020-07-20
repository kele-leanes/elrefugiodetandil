import React, { Component } from 'react'
import './index.css'

class ModalAlert extends Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    componentDidMount() {
        this.scrollToMyRef();
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop-100)
    
    render(){
        return (
            <div className='modal' ref={this.myRef} >
                <div className='modal-msg'>
                    <p>{this.props.textMsg}</p>
                </div>
                <button className='btn-primary' onClick={this.props.handler}>seguir</button>
            </div>
        )

    }

}

export default ModalAlert