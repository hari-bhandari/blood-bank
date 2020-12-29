import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

const DonorCard = ({request:{name,district,email,hospitalName,bloodType,id}}) => {
    const deleteRequest=async (e)=>{
        e.preventDefault();
        try {
            const ok=window.confirm("Do you want to delete the request you made?")
            if (ok){
                const res=await axios.delete(`/api/help/delete/${id}`);
                toast.success(res.data.data, {
                    position: "top-center",
                    autoClose: 80000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        } catch (err) {
            toast.error(err?.response?.data?.error, {
                position: "top-center",
                autoClose: 80000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div className="card">
            <span className={"X"} onClick={deleteRequest}>X</span>

            <div className="content-container">
                <p className="donor__title">{name}</p>
                <p className="content">
                    District: {district}
                </p>
                <p className="content">
                    Hospital Name:{hospitalName}
                </p>
            </div>
            <div className="content-container">
                <p className="donor__title">Blood Type:{bloodType}</p>
                <p className="content">
                    Email:{email}
                </p>

            </div>
            <div className="content-container">
                <button id="accept" type="button">Available Donors</button>
                <Link to={`/help/${id}`}> <button id="cancel" type="button">More Info</button> </Link>

            </div>

        </div>
    );
};

export default DonorCard;