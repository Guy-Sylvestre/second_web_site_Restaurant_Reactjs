import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrap } from './SidebarElements';

const Sidebar = ({isOpen, toogle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarWrap>
                <SidebarRoute to="/">Order</SidebarRoute>
            </SidebarWrap>
        </SidebarContainer>
    );
};

export default Sidebar;