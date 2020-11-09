import React from 'react';
import './Card.css'
const DonorCard = () => {
    return (
        <div className="card">
            <div className="avatar">
                <img className="image" src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Round&hairColor=Black&facialHairType=Blank&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Deer&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Tanned'/>
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