import React from 'react';
import {ProfilePageCSS} from "./ProfilePageCss";

const ProfilePage = () => {
    return (
        <ProfilePageCSS>
            <div className="profile">
                <div className="profile-background"></div>
                <div className="profile-contents">
                    <div className="profile-header">
                        <svg className="profile-header__icon" width="10rem" height="10rem"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="#FEB692"></circle>
                        </svg>

                        <h1 className="profile-header__text">Sally Doe</h1>
                    </div>
                    <div className="profile-info">
                        <div className="profile-info-data">
                            <div className="profile-info-data__number">23.8k</div>
                            <div className="profile-info-data__name">Likes</div>
                        </div>
                        <div className="profile-info-data">
                            <div className="profile-info-data__number">8.6k</div>
                            <div className="profile-info-data__name">Followers</div>
                        </div>
                        <div className="profile-info-data">
                            <div className="profile-info-data__number">1.6k</div>
                            <div className="profile-info-data__name">Photos</div>
                        </div>
                    </div>
                </div>

            </div>
        </ProfilePageCSS>

    );
};

export default ProfilePage;