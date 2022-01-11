import React, {useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {ProfileContainer} from "../profile/Profile.styles";
import styled from "styled-components";
import UserIcon from "./UserIcon";
import OrdersIcon from "./UserIcon";
import ReviewsIcon from "./UserIcon";
import ProfileSetting from "../profile/ProfileSetting";
import MyReviews from "./MyReviews";
import MyOrders from "./Orders/MyRequests";
import { FcViewDetails } from "react-icons/fc";

const TabListHeader=styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2em;
  font-family: Lato,sans-serif;
`
const Profile = ({index}) => {
    const [tabIndex, setTabIndex] = useState(index);

    return (
        <ProfileContainer>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab><TabListHeader><FcViewDetails size={24}/> {' '} My Requests</TabListHeader></Tab>
                    <Tab><TabListHeader><UserIcon/> {' '}My Profile</TabListHeader></Tab>
                </TabList>
                <TabPanel>
                    <MyOrders/>
                </TabPanel>
                <TabPanel>
                    <ProfileSetting/>
            </TabPanel>

        </Tabs>
        </ProfileContainer>
    );
};

export default Profile;