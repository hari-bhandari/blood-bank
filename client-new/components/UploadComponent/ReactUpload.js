import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';

const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
};

const ERROR = {
    NOT_SUPPORTED_EXTENSION: 'NOT_SUPPORTED_EXTENSION',
    FILESIZE_TOO_LARGE: 'FILESIZE_TOO_LARGE'
}
const ReactImageUploadComponent = ({className, defaultImages,
                                       onChange, fileContainerStyle,
                                       singleImage,accept,maxFileSize,imgExtension,
                                       maxFiles,label,labelStyles,labelClass,
                                       withLabel,fileSizeError,errorStyle,errorClass,withPreview,fileTypeError,
                                       buttonStyles,buttonClassName,buttonType,style,buttonText,name}) => {
    const [pictures, setPictures] = useState([...defaultImages])
    const [files, setFiles] = useState([])
    let inputElement = '';

    const [fileErrors, setFilesError] = useState([])
    useEffect(() => {
        onChange(files, pictures);
    }, [files]);
    // useEffect(() => {
    //     setPictures([...defaultImages]);
    // }, [defaultImages]);
    const hasExtension=(fileName)=> {
        const ext='.'+fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2)
        let isTrue=false
        imgExtension.forEach((extension)=>{
            console.log(extension)
            if(ext.toLowerCase()===extension){
                isTrue=true
            }
        })
        return isTrue

    }

    /*
     Handle file validation
     */
    const onDropFile=(e)=> {
        const droppedFiles = e.target.files;
        const allFilePromises = [];
        const fileErrors = [];

        // Iterate over all uploaded files
        for (let i = 0; i < droppedFiles.length && i < maxFiles; i++) {
            let file = droppedFiles[i];
            let fileError = {
                name: file.name,
            };
            // Check for file extension
            if (!hasExtension(file.name)) {
                fileError = Object.assign(fileError, {
                    type: ERROR.NOT_SUPPORTED_EXTENSION
                });
                fileErrors.push(fileError);
                continue;
            }
            // Check for file size
            if(file.size >maxFileSize) {
                fileError = Object.assign(fileError, {
                    type: ERROR.FILESIZE_TOO_LARGE
                });
                fileErrors.push(fileError);
                continue;
            }
            allFilePromises.push(readFile(file));
        }
        setFilesError(fileErrors)


        Promise.all(allFilePromises).then(newFilesData => {
            const dataURLs = singleImage?[]:pictures.slice();
            const newFiles= singleImage?[]:files.slice();

            newFilesData.forEach(newFileData => {
                dataURLs.push(newFileData.dataURL);
                newFiles.push(newFileData.file);
            });

            // Slice array if maxLength is reached
            setPictures(dataURLs.slice(0,maxFiles))
            setFiles(newFiles.slice(0,maxFiles))

        });
    }

    const onUploadClick=(e)=> {
        // Fixes If you select an image, remove it, then select it again, nothing happens
        e.target.value = null;
    }

    /*
       Read a file and return a promise that when resolved gives the file itself and the data URL
     */
    const readFile=(file)=> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Read the image via FileReader API and save image result in state.
            reader.onload = function (e) {
                // Add the file name to the data URL
                let dataURL = e.target.result;
                dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
                resolve({file, dataURL});
            };

            reader.readAsDataURL(file);
        });
    }

    /*
     Remove the image from state
     */
    const removeImage=(picture)=> {
        const removeIndex = pictures.findIndex(e => e === picture);
        const filteredPictures = pictures.filter((e, index) => index !== removeIndex);
        const filteredFiles = files.filter((e, index) => index !== removeIndex);
        setPictures(filteredPictures)
        setFiles(filteredFiles)
        onChange(files, pictures)
    }

    /*
     Check if any errors && render
     */
    const renderErrors=()=> {
        return fileErrors.map((fileError, index) => {
            return (
                <div className={'errorMessage ' + errorClass} key={index} style={errorStyle}>
                    * {fileError.name} {fileError.type === ERROR.FILESIZE_TOO_LARGE ? fileSizeError: fileTypeError}
                </div>
            );
        });
    }



    /*
     Render label
     */
    const renderLabel=()=> {
        if (withLabel) {
            return <p className={labelClass} style={labelStyles}>{label}</p>
        }
    }

    /*
     Render preview images
     */
    const renderPreview=()=> {
        return (
            <div className="uploadPicturesWrapper">
                {renderPreviewPictures()}
            </div>
        );
    }

    const renderPreviewPictures=()=> {
        return pictures.map((picture, index) => {
            return (
                <div key={index} className="uploadPictureContainer">
                    <div className="deleteImage" onClick={() => removeImage(picture)}>X</div>
                    <img src={picture} className="uploadPicture" alt="preview"/>
                </div>
            );
        });
    }

    /*
     On button click, trigger input file to open
     */
    const triggerFileUpload=()=> {
        inputElement.click();
    }

    const clearPictures=()=> {
        this.setState({pictures: []})
    }
    return (
        <div className={"fileUploader " + className} style={style}>
            <div className="fileContainer" style={fileContainerStyle}>
                {renderLabel()}
                <div className="errorsContainer">
                    {renderErrors()}
                </div>
                {
                    (files.length < maxFiles && pictures.length<maxFiles) && <button
                        type={buttonType}
                        className={"chooseFileButton " + buttonClassName}
                        style={buttonStyles}
                        onClick={triggerFileUpload}
                    >
                        {buttonText}
                    </button>
                }
                <input
                    type="file"
                    ref={input => inputElement = input}
                    name={name}
                    multiple={!singleImage}
                    onChange={onDropFile}
                    onClick={onUploadClick}
                    accept={accept}
                />
                { withPreview ? renderPreview() : null }
            </div>
        </div>
    );
};
ReactImageUploadComponent.defaultProps = {
    className: '',
    fileContainerStyle: {},
    buttonClassName: "",
    buttonStyles: {},
    withPreview: false,
    accept: "image/*",
    name: "",
    withIcon: true,
    buttonText: "Choose images",
    buttonType: "button",
    withLabel: true,
    label: "Max file size: 5mb, accepted: jpg|gif|png",
    labelStyles: {},
    labelClass: "",
    imgExtension: ['.jpg', '.jpeg', '.gif', '.png'],
    maxFileSize: 5242880,
    fileSizeError: " file size is too big",
    maxFiles: 99,
    fileTypeError: " is not a supported file extension",
    errorClass: "",
    style: {},
    errorStyle: {},
    singleImage: false,
    onChange: () => {
    },
    defaultImages: []
};

ReactImageUploadComponent.propTypes = {
    style: PropTypes.object,
    fileContainerStyle: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    buttonClassName: PropTypes.string,
    buttonStyles: PropTypes.object,
    buttonType: PropTypes.string,
    withPreview: PropTypes.bool,
    accept: PropTypes.string,
    name: PropTypes.string,
    withIcon: PropTypes.bool,
    buttonText: PropTypes.string,
    withLabel: PropTypes.bool,
    label: PropTypes.string,
    labelStyles: PropTypes.object,
    labelClass: PropTypes.string,
    imgExtension: PropTypes.array,
    maxFileSize: PropTypes.number,
    fileSizeError: PropTypes.string,
    maxFiles: PropTypes.number,
    fileTypeError: PropTypes.string,
    errorClass: PropTypes.string,
    errorStyle: PropTypes.object,
    singleImage: PropTypes.bool,
    defaultImages: PropTypes.array
};


export default ReactImageUploadComponent;