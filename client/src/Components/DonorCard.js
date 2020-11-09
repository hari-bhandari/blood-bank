import React from 'react';
import './Card.css'
const DonorCard = ({help}) => {
    return (
        <div className="card">
            <div className="avatar">
                <img className="image" src='https://lh3.googleusercontent.com/proxy/lQt0E-8IPOZByHkzsc1_KAjJvAJyd4Q26cDhiNeeCGG0QZLb2OvPO6M6T5_RtMX1-MyWeIc5BKexEmGqMN9qdYwUQV0aJslo4ujMQzwQqVWsw2lEifK8Mg'/>
            </div>
            {help&&
            <div className="content-container">
                <p className="donor__title">Susan</p>
                <p className="content">
                    Lorem ipsum dolo
                </p>
                <p className="content">
                    Lorem ipsum dolor
                </p>
            </div>}
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