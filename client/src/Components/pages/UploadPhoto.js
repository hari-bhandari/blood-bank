import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import ImageUploader from 'react-images-upload'
import axios from "axios";

const UploadPhoto = (props) => {
    return (
        <ImageUploader {...props} withIcon={false} withPreview={true}/>
    )
}
export default UploadPhoto
