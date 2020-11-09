import React from 'react';
import './Card.css'

const DonorCard = ({help,name,address,email,hospitalName,bloodType,phone}) => {
    if(help){
        return (
            <div className="card">

                <div className="content-container">
                    <p className="donor__title">{name}</p>
                    <p className="content">
                        Address: {address}
                    </p>
                    <p className="content">
                        Hospital Name:{hospitalName}
                    </p>
                </div>
                <div className="content-container">
                    <p className="donor__title">Blood Type:{bloodType}</p>
                    <p className="content">
                        Email:{email}
                    </p>
                    <p className="content">
                        Phone:{phone}
                    </p>
                </div>
                <div className="content-container">
                    <button id="accept" type="button"><i className="fa fa-phone"/>{phone}</button>
                    <button id="cancel" type="button">Info</button>
                </div>

            </div>
        )
    }
    return (
        <div className="card-c">
            <div className="avatar">
                <img className="image" src='https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg'/>
            </div>

            <div className="content-container">
                <p className="donor__title">Susan</p>
                <p className="content">
                    Lorem ipsum dolo
                </p>
                <p className="content">
                    Lorem ipsum dolor
                </p>
            </div>

        </div>
    );
};

export default DonorCard;