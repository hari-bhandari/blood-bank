export const getSizedImageURL=(imageName,width,height)=>{
    try {
        if(width===undefined||height==undefined){
            return `/uploads/${imageName}`
        }
        const re = /(?:\.([^.]+))?$/;
        const extension = re.exec(imageName)[0]
        const ImageInitialName = imageName.replace(extension, '')
        return `/uploads/${ImageInitialName}_${width}x${height}${extension}`
    }catch (e){
        return `/uploads/noProfile.png`
    }
}