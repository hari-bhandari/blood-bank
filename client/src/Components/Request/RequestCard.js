import React from 'react';
import {CardContainer} from "./RequestCardCSS";
import {BloodType} from '../Donors/DonorItemCSS'

const RequestCard = () => {
    return (


        <CardContainer>
            <BloodType position={'10%'}>A+</BloodType>
                <img
                    src="https://haribhandari.me/static/bbfbed4a006f12cc6ec59b3f42d010d5/b3cab/me.jpg"
                    alt="Person" className="card__image"/>
                    <p className="card__name">Help</p>
                    <div className="grid-container">
                        <div className="grid-child-posts">
                            156 Post
                        </div>

                        <div className="grid-child-followers">
                            1012 Likes
                        </div>
                        <p className="card__description">Lily-Grace Colley</p>


                    </div>

                    <button className="btn-request draw-border">9841921783</button>
                    <button className="btn-request draw-border">More</button>

        </CardContainer>
    );
};

export default RequestCard;