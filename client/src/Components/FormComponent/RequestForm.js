import React from 'react';
import './RequestForm.css'
import {useFormik} from "formik";

const RequestForm = () => {
    const requestFormik = useFormik({
        initialValues: {
            name: '',
            bloodType: '',
            city: '',
            hospitalName: '',
            email: '',
            phone: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values))

        },
    });
    return (
        <div className="card-form">
            <form className="signup" onSubmit={requestFormik.handleSubmit}>
                <div className="form-title">Request for a blood</div>
                <div className="form-body">
                    <div className="row">
                        <input type="text" placeholder="Name" required name="name" value={requestFormik.values.name}/>
                        <input type="text" placeholder="Blood Type" name="bloodType" value={requestFormik.values.bloodType}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="City" required name="city" value={requestFormik.values.city}/>
                        <input type="text" placeholder="Hospital Name" name="hospitalName" value={requestFormik.values.hospitalName}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Email Address*" name="email" value={requestFormik.values.email}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Phone Number" name="phone" value={requestFormik.values.phone}/>
                    </div>
                </div>
                <div className="rule"></div>
                <div className="form-footer">
                    <a>Sign Me Up!<span className="fa fa-thumbs-o-up"></span></a>
                    <a>Not Now!<span className="fa fa-ban"></span></a>
                </div>
            </form>
        </div>
    );
};

export default RequestForm;