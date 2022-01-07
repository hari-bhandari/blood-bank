import React from 'react';
import ImageUploader from './ReactUpload';

const PhotoUpload = ({withIcon,label,buttonText,setImages,defaultImages,maxFiles}) => {
    const onDrop =  (files,pictures) => {
        setImages({files,pictures})
    }
    return (
        <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                       withPreview={true} defaultImages={defaultImages} onChange={onDrop} label={label} buttonText={buttonText} withIcon={withIcon} maxFiles={maxFiles}/>

    );
};

export default PhotoUpload;