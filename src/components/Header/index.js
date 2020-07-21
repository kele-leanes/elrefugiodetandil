import React, { Component } from 'react'
import Menu from './Menu'
import './index.css'
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

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
                        <Link to='/' onClick={this.handleClick}>
                            <h1>EL REFUGIO</h1>
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={this.handleClick}>
                        {this.state.isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </div>
                        <CSSTransition
                            in={this.state.isOpen}
                            timeout={350}
                            classNames="display"
                            unmountOnExit
                        >
                            <Menu 
                                clicked={this.handleClick}
                            />
                        </CSSTransition>
                </div>
            </header>
        )
    }
};

export default Header;