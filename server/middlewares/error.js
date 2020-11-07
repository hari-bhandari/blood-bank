import ErrorResponse from "../utils/errorResponse.js";
export const errorHandler=(err,req,res,next)=>{
    let error={...err};
    error.message=err.message;
    console.log(err);
    //Mongoose bad objectId
    if(err.name==='CastError'){
        const message= `Resource not found`;
        error= new ErrorResponse(message,404)
    }
    // Mongoose duplicate Key
    if(err.code===11000){
        const message=`An account exists with that email.`;
        error=new ErrorResponse(message,400);
    }
    if(err.name==='ValidationError'){
        const message=Object.values(err.errors).map(val=>val.message)
        error=new ErrorResponse(message,400)
    }
    res.status(error.statusCode||500).json({
        success:false,
        error:error.message|| 'Server Error! Please try again later'
    })
}
