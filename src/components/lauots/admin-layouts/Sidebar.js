import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li>
                        <NavLink  activeClassName="active" className="simple-text logo-normal" exact to="/adminlayous/profile">
                            <i className="nc-icon nc-diamond"></i>صفحه پروفایل کاربر </NavLink>
                    </li>
                    
                    <li>
                        <NavLink activeClassName="active" className="simple-text logo-normal" to="/adminlayous/about-me">
                            <i className="nc-icon nc-diamond"></i>
                            درباره من
                        </NavLink>
                    </li>                                        
                </ul>
            </div>
        </div>
    )
}; 