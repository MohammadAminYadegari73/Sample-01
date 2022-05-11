import React from 'react'
import '../../../assets/css/paper-dashboard.css';
import '../../../assets/css/demo.css';
import { Routes, Route } from 'react-router-dom';
import { Profile } from '../../auth/profile/Profile';
import { Sidebar } from './Sidebar';
import TopNavBar from './TopNavBar';
import { AboutME } from '../../auth/about/AboutMe';
export const AdminLayouts = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <TopNavBar />
                <div className="content">
                    <Routes>
                        <Route title='صفحه پروفایل کاربر' path="/profile" element={<Profile />} />
                        <Route title='درباره من' path="/about-me" element={<AboutME />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}



