import React from 'react';
import '../profile/Profile.css';
import Images from '../../../assets/images/images.jpg'
import Helmet from 'react-helmet';
export const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <Helmet><title>پروفایل کاربری</title></Helmet>
            <div className="middle-container container">
                <div className="profile block">
                    <div className="profile-picture big-profile-picture clear">
                        <img alt='Ali Monesi' src={Images} />
                    </div>
                    <div className="user-name">
                        <h4 className="user-name">{user != null ? user.firstName : null}</h4>
                        <h4 className="user-name">{user != null ? user.lastName : null}</h4>
                    </div>
                    <div className="profile-description">
                        <p className="scnd-font-color">Web developer</p>
                    </div>
                    <ul className='review'>
                        <li className='text-inline'><p><span className="icon fontawesome-comment-alt scnd-font-color"></span>بررسی</p></li>
                        <li className='text-inline'><p><span className="icon fontawesome-eye-open scnd-font-color"></span>جستوجو</p></li>
                        <li className='text-inline'><p><span className="icon fontawesome-heart-empty scnd-font-color"></span>دنبال کننده</p></li>
                    </ul>
                    <ul className="profile-options horizontal-list">
                        <li><a className="comments" href=""><p><span className="icon fontawesome-comment-alt scnd-font-color"></span>23</p></a></li>
                        <li><a className="views" href=""><p><span className="icon fontawesome-eye-open scnd-font-color"></span>841</p></a></li>
                        <li><a className="likes" href=""><p><span className="icon fontawesome-heart-empty scnd-font-color"></span>49</p></a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}