import React from 'react';

const MyReviews:React.FC<{data:any,isLoading:boolean}> = ({data,isLoading}) => {
    if(isLoading||!data){
        return <h3>Loading...</h3>
    }
    return (
        <div>
            {/*{data.data.map((review)=>{*/}
            {/*    return <ReviewCard name={review.name} comment={review.comment} rating={review.rating} title={review.title} _id={review._id} createdAt={review.createdAt} product={review.product[0]}/>*/}
            {/*})}*/}

        </div>
    );
};

export default MyReviews;