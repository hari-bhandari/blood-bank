import React from 'react';
import {CardContainer} from "./RequestCardCSS";

const RequestCard = () => {
    return (
        <CardContainer>
                <img
                    src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
                    alt="Person" className="card__image"/>
                    <p className="card__name">Lily-Grace Colley</p>
                    <div className="grid-container">

                        <div className="grid-child-posts">
                            156 Post
                        </div>

                        <div className="grid-child-followers">
                            1012 Likes
                        </div>

                    </div>

                    <button className="btn draw-border">Follow</button>
                    <button className="btn draw-border">Message</button>

        </CardContainer>
    );
};

export default RequestCard;