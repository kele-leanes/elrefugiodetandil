import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './index.css'

class Menu extends Component {
    constructor(props){
        super(props)
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }

      setWrapperRef(node){
        this.wrapperRef = node;
      }

      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.clicked()
          }
      }

    render() {
        return(
            <div className='menu-wrapper' ref={this.setWrapperRef}>
                <ul>
                    <li className='items'>
                        <Link to='/' onClick={this.props.clicked} >Inicio</Link>
                    </li>
                    <li className='items'>
                        <Link to='/' onClick={this.props.clicked} >Quienes somos</Link>
                    </li>
                    <li className='items'>
                        <Link to='/contacto' onClick={this.props.clicked}>Contacto</Link>
                    </li>
                </ul>
            </div>
        )

    }
}

export default Menu