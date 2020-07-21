import React, { Component } from 'react';
import Menu from './Menu';
import './index.css';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

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
                        <Link to='/' onClick={() => this.setState({isOpen: false})}>
                            <h1>EL REFUGIO</h1>
                        </Link>
                    </div>
                    <HamburgerMenu
                        isOpen={this.state.isOpen}
                        menuClicked={this.handleClick}
                        width={20}
                        height={18}
                        strokeWidth={2}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
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