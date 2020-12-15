export const advancedResults=(model,populate)=>async (req,res,next)=>{
    let query;
    //copy req.query
    const reqQuery={...req.query}
    //fields to exclude
    const removeFields=['select','sort','page','limit'];
    //loop over removeFields and delete from

    //loop over and remove if it has empty value

    // req query
    removeFields.forEach(param=>delete reqQuery[param])
    for (const [key, value] of Object.entries(reqQuery)) {
        if(value.replace(/ /g,'') ==="" || value==="null" ){
            delete reqQuery[key]
        }
    }
    //create query String
    let queryStr=JSON.stringify(reqQuery);


    //Create operators ($ge,$gte etc)
    queryStr=queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g,match=>`$${match}`);
    //FINDING RESOURCE
    query=model.find(JSON.parse(queryStr));
    //SELECT fields
    if(req.query.select){
        const fields=req.query.select.split(',').join(' ');
        query=query.select(fields)
    }
    //sort
    if(req.query.sort){
        const sortBy=req.query.sort.split(',').join(' ');
        query=query.sort(sortBy);

    }else {
        query=query.sort('-createdAt')
    }
    //pagination
    const page=parseInt(req.query.page,10)||1;
    const limit=parseInt(req.query.limit,10)||25;
    const startIndex=(page-1)*limit;
    const endIndex=page*limit;
    const total=await model.countDocuments()
    query=query.skip(startIndex).limit(limit);
    //populate
    if(populate){
        query=query.populate(populate);
    }
    //executing query
    const results=await query;
    //pagination results
    const pagination={};
    if(endIndex<total){
        pagination.next={
            page:page+1,
            limit
        }
    }
    if(startIndex>0){
        pagination.prev={
            page:page-1,
            limit
        }
    }
    res.advancedResults={
        success:true,
        count:results.length,
        pagination,
        data:results
    }
    next();

}
