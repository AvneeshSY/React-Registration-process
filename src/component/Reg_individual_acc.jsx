import React, { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './reg_individual_acc.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from "react-router-dom";
import img from './image/img.png'

const Reg_individual = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        agreeToTerms: false,
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/CompleteProfile'); 

        
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="container">
            <div className="image-container">
                
                <img src={img} alt="Background" />
            </div>
            <div className="Right-container">
                <div className="reg-Top-Content">
                    <div className="sub-reg-Top-Container">
                      <Link to="/" > 
                          <div className="back_arrow">
                              <ArrowBackIosNewIcon className="back-arrow" />
                          </div>
                          <div className="Back">Back</div>
                      </Link>
                    </div>
                    <div className="steps">
                        <span>STEPS 01/03</span><br />Personal Info
                    </div>
                </div>
                <div className="sub-container">
                    <div className="reg-heading">
                        <h2>Register Individual Account!</h2>
                        <span className="reg-form">For the purpose of industry regulation, your details are required</span>
                    </div>
                    <div className="reg-form">
                        <form onSubmit={handleSubmit}> 
                            <label>
                                <span className="reg-form-span">Your fullname*</span>
                                <input className="input_box" type="text" placeholder="Enter your fullname" name="fullName" value={formData.fullName} onChange={handleChange} required />
                            </label>
                            <label>
                                <span className="reg-form-span">Email address*</span>
                                <input className="input_box" type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} required />
                            </label>
                            <label>
                                <span className="reg-form-span">Create Password*</span>
                                <input className="input_box" type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
                            </label>
                            <label>
                                <input className="check_box" type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required />
                                I agree to terms and conditions
                            </label>
                            <button className="reg-btn" type="submit">Register Account</button>
                            <div className="divder">
                                <hr />or<hr />
                            </div>
                            <button className="reg-btn-google" type="submit">
                                <GoogleIcon className="google-icon" />
                                Register Account with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reg_individual;