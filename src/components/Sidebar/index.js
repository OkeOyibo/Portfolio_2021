import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,
SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="skills" onClick={toggle}>
                        My Skills
                    </SidebarLink>
                    <SidebarLink to="education" onClick={toggle}>
                        Education
                    </SidebarLink>
                    <SidebarLink to="cv" onClick={toggle}>
                        About Me
                    </SidebarLink>
                    <SidebarLink to="work" onClick={toggle}>
                        Work
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
