import React, { Component } from 'react';
import Menu from './Menu';
import './index.css';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import logoHeader from './../../images/logo-web.png';
import Media from 'react-media';


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
                 <Media queries={{ small: { maxWidth: 899 } }}>
                     {matches => matches.small ? 
                        <div className='navbar'>
                            <div className='logo-img'>
                                <Link to='/' onClick={() => this.setState({isOpen: false})}>
                                    <img src={logoHeader} alt='logo'></img>
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
                        : 
                        <div className='navbar'>
                            <div className='logo-img'>
                                <Link to='/' onClick={() => this.setState({isOpen: false})}>
                                    <img src={logoHeader} alt='logo'></img>
                                </Link>
                            </div>
                            <Menu />
                        </div>
                        } 
                </Media>
            </header>
        )
    }
};

export default Header;