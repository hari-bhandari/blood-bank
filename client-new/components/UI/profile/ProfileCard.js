import React from 'react';
import {ProfileCardContainer} from './profilecard.css'
const ProfileCard = () => {
    return (
        <ProfileCardContainer>
            <body>
            <div class="game">
                <div class="rank">3</div>

                <div class="front">
                    <img class="thumbnail" src="https://res.cloudinary.com/wisecart/image/upload/v1642795814/game-cover_wp5mlp.jpg" alt="" />
                    <h3 class="name icon">Game name</h3>
                    <div class="stats">
                        <p class="viewers icon">539.9k</p>
                        <div class="streamers">
                            <img src="https://res.cloudinary.com/wisecart/image/upload/v1642839312/streamer-1_yofgik.jpg" alt="" />
                            <img src="https://res.cloudinary.com/wisecart/image/upload/v1642839312/streamer-1_yofgik.jpg" alt="" />
                            <img src="https://res.cloudinary.com/wisecart/image/upload/v1642839312/streamer-1_yofgik.jpg" alt="" />
                        </div>
                    </div>
                    </div>
                </div>

                <div class="back">
                    <div class="streaming-info">
                        <p class="game-stat">559k<span>Watching</span></p>
                        <p class="game-stat">25.8k<span>Streams</span></p>
                    </div>
                    <button class="btn">See more streams</button>
                    <div class="streamers">
                        <div class="streamer">
                            <div class="icon"><img src="https://res.cloudinary.com/wisecart/image/upload/v1642839312/streamer-1_yofgik.jpg" alt="" /></div>
                            <p class="name">Gamer1</p>
                            <p class="number">36.1k</p>
                        </div>
                        <div class="streamer">
                            <div class="icon"><img src="https://res.cloudinary.com/wisecart/image/upload/v1642839312/streamer-1_yofgik.jpg" alt="" /></div>
                            <p class="name">Gamer 2</p>
                            <p class="number">35.1k</p>
                        </div>
                        <div class="streamer">
                            <div class="icon"><img src="https://res.cloudinary.com/wisecart/image/upload/v1642839312/streamer-1_yofgik.jpg" alt="" /></div>
                            <p class="name">Gamer 3</p>
                            <p class="number">34.1k</p>
                        </div>
                    </div>
                </div>

                <div class="background">
                    <img src="https://res.cloudinary.com/wisecart/image/upload/v1642795814/game-cover_wp5mlp.jpg" alt="" />
                </div>
            <svg width="0" height="0" x="0px" y="0px">
                <defs>
                    <clipPath id="wave" clipPathUnits="objectBoundingBox">
                        <path
                            d="M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
	C1.8,1,1.8,0.8,2,0.8V0H1.5z"
                        />
                        <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            type="translate"
                            from="0 0"
                            to="-200 0"
                            begin="0s"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </clipPath>
                </defs>
            </svg>
            </body>
        </ProfileCardContainer>
    );
};

export default ProfileCard;