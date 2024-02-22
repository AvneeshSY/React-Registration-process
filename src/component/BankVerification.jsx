import React, { useState } from "react";
import img from './image/img.png';
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './css/bankverification.css';

const BankVerification = () => {
    const [bvn, setBvn] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        if (value.length <= 12) {
            setBvn(value);
            setError("");
        } else {
            setError("BVN must not exceed 12 characters.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src={img} alt="Background" />
            </div>

            <div className="Right-container">
                <div className="reg-Top-Content">
                    <div className="sub-reg-Top-Container">
                        <Link to="/CompleteProfile">
                            <div className="back_arrow">
                                <ArrowBackIosNewIcon className="back-arrow" />
                            </div>
                            <div className="Back">Back</div>
                        </Link>
                    </div>
                    <div className="steps">
                        <span>STEPS 03/03</span><br></br>Bank Verification
                    </div>
                </div>
                <div className="sub-container">
                    <div className="reg-heading">
                        <h2>Complete Your Profile</h2>
                        <span className="reg-form">For the purpose of industry regulation, your details are required</span>
                    </div>
                </div>
                <div className="personal-info">
                    <form className="form-personal" onSubmit={handleSubmit}>
                        <label className="label-profile">
                            <span>Bank verification number (BVN)</span>
                            <input
                                className="input-add"
                                type="text"
                                placeholder="Enter BVN"
                                value={bvn}
                                onChange={handleChange}
                                required
                            />
                            {error && <span className="error">{error}</span>}
                        </label>
                        <button className="reg-btn per-btn" type="submit">Save & Continue</button>
                        <span className="lst-span">Your info is safely secured</span>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BankVerification;
