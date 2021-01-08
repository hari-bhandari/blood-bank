export const getSizedImageURL=(imageName,width,height)=>{
    const re = /(?:\.([^.]+))?$/;
    const extension=re.exec(imageName)[0]
    const ImageInitialName=imageName.replace(extension,'')
    return `/uploads/${ImageInitialName}_${width}x${height}${extension}`
}