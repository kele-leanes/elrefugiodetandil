import React, { Component } from 'react'
import Menu from './Menu'
import './index.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    render(){
        return (
            <header>
                <div className='navbar'>
                    <div>
                        <h1>EL REFUGIO</h1>
                    </div>
                    <div className='menu-icon' onClick={this.handleClick}>
                        {this.state.isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </div>
                        {this.state.isOpen ? <Menu clicked={this.handleClick}/> : null}
                </div>
            </header>
        )
    }
};

export default Header;