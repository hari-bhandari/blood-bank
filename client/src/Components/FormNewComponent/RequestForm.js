import React from 'react';
import './RequestForm.css'
const RequestForm = () => {
    return (
        <div className="card-form">
            <form className="signup">
                <div className="form-title">Request for a blood</div>
                <div className="form-body">
                    <div className="row">
                        <input type="text" placeholder="Name" required/>
                            <input type="text" placeholder="Blood Type"/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="City" required/>
                        <input type="text" placeholder="Hospital Name"/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Email Address*"/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Phone Number"/>
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