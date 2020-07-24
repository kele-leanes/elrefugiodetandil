import React, { Component } from 'react';
import Menu from './Menu';
import styled from "styled-components";
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
            isOpen: false,
            showHeader: true,
            scrollPos: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    render(){
        return (
            <StyledHeader className={this.state.showHeader ? "active" : "hidden"}>
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
            </StyledHeader>   
        )
    }
};

const StyledHeader = styled.header`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 80px;
    top: 0;
    padding: 10px 20px;
    z-index: 999;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    @media screen and (min-width: 900px) {
        padding: 10px 30px;    
    }    
`

export default Header;