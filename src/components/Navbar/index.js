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
                            <NavLinks
                                to="skills"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >My Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="education"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Education</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks
                                to="cv"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About Me</NavLinks>
                        </NavItem>              
                        <NavItem>
                            <NavLinks
                                to="work"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Work</NavLinks>
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