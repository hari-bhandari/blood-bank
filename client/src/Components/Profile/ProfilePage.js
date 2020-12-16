import React,{useEffect} from 'react';
import {ProfilePageCSS} from "./ProfilePageCss";
import {useParams} from "react-router";
import axios from "axios";
import {useQuery} from "react-query";

const ProfilePage = () => {
    const {id}=useParams()
    const fetchDonors = async () => {
        const response = await axios(
            `/api/help/${id}`
        );
        return response.data.data;
    }
    const { status, data } = useQuery(id, fetchDonors, {
        refetchAllOnWindowFocus: false
    });

    return (
        <ProfilePageCSS>
            <div className="profile-user-page card">
                <div className="img-user-profile">
                    <div className="profile-bgHome"
                         />
                    <img className="avatar" src="http://gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200"
                         alt="jofpin"/>
                </div>
                <button>Follow</button>
                <div className="user-profile-data">
                    <h1>{data.name}</h1>
                    <p>github.com/jofpin</p>
                </div>
                <div className="description-profile">Front-end | Security Researcher | CSS Warrior | <a
                    href="https://twitter.com/bullgit" title="bullgit"><strong>@bullgit</strong></a> | I love to create
                    small things for the internet!
                </div>
                <ul className="data-user">
                    <li><a><strong>9841291783</strong><span>Phone</span></a></li>
                    <li><a><strong>Bir Hospital</strong><span>Hospital Name</span></a></li>
                    <li><a><strong>239</strong><span>Following</span></a></li>
                </ul>
            </div>
        </ProfilePageCSS>

    );
};

export default ProfilePage;