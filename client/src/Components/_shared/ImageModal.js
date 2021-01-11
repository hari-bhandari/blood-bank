import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ImageModal = ({open,setOpen,imageLink}) => {


    const onCloseModal = () => setOpen(false);
    return (
        <Modal open={open} onClose={onCloseModal} center>
            <img src={imageLink} alt="zoomed picture" style={{width:"100%"}}/>
        </Modal>
    );
};

export default ImageModal;