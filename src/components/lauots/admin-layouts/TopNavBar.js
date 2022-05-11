import React from 'react';
import { NavLink } from "react-router-dom";

const TopNavBar = () => {
    //get data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));


    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/login' className="nav-link btn-rotate" title="خروج" >
                                <svg viewBox="0 0 24 24" width="24" height="24" class="ml-1 text-grays-500" >
                                    <path d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z" fill-rule="evenodd">
                                    </path>
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNavBar;






