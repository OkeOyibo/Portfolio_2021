import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink  } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>severinhasler.</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="skills">My Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="education">Education</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to="cv">About Me</NavLinks>
                        </NavItem>              
                        <NavItem>
                            <NavLinks to="work">Work</NavLinks>
                        </NavItem>                                                                   
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;