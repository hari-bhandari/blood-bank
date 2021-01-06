import 'react-dropzone-uploader/dist/styles.css'
import ImageUploader from 'react-images-upload'
import axios from "axios";
import {toast} from "react-toastify";
const UploadPhoto = (props) => {
    const {id,setSubmitted,setSubmittedImage}=props
    const onDrop=async (picture)=>{
        const formData = new FormData();
        const imageFile =picture[0];
        formData.append("file", imageFile);
        try {
            const res = await axios.put(`/api/help/${id}/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if(setSubmittedImage !==undefined && setSubmitted!==undefined){
                setSubmitted(false)
                setSubmittedImage(true)
                setSubmittedImage(true)
            }

                toast.success(`Request has been created with Image ${res.data.data}`, {
                    position: "top-center",
                    autoClose: 80000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
            })

        }catch (e){
            toast.error(`Please try again later`, {
                position: "top-center",
                autoClose: 80000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }
    return (
        <ImageUploader {...props} withIcon={false} withPreview={true} onChange={onDrop} singleImage={true} />
    )
}
export default UploadPhoto
