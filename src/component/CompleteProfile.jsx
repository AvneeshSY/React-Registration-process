import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/completeProfile.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PhoneInput from "react-phone-input-2";
import {useNavigate } from "react-router-dom";
import 'react-phone-input-2/lib/style.css'
import img from './image/img.png'
import ReactFlagsSelect from "react-flags-select";


const CompleteProfile = () => {
   
   
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [selected, setSelected] = useState("");
    // const [valid, setValid] = useState(true);

    // const handleChange = (value) => {
        
    //     setPhoneNumber(value);
    //     setValid(validatePhoneNumber(value));


    // };
   

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPatter = /^\d{10}$/;
        return phoneNumberPatter.test(phoneNumber);
    }
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/BankVerification'); 

       
     
    };


    return (
        <div className="container">
            <div className="image-container">
                
                <img src={img} alt="Background" />
            </div>

        
            <div className="Right-container">
                <div className="reg-Top-Content">
                    <div className="sub-reg-Top-Container">
                        <Link to="/Reg_individual" > <div className="back_arrow"><ArrowBackIosNewIcon className="back-arrow"></ArrowBackIosNewIcon></div>
                            <div className="Back">Back</div></Link>
                    </div>
                    <div className="steps">
                        <span>STEPS 02/03</span><br></br>Residency Info
                    </div>



                </div>
                <div className="sub-container">
                    <div className="reg-heading">
                        <h2>Complete Your Profile</h2>
                        <span className="reg-form">For the purpose of industry regulation, your details are required</span>
                    </div>
                    <div className="personal-info">
                        <form className="form-personal" onSubmit={handleSubmit}>
                            <label className="label-profile">
                               <span>Phone Number</span> 
                                <PhoneInput
                                       className= "input-num"
                                    country={'in'}
                                    value={PhoneNumber}
                                  

                                    inputProps={{
                                        required: true,
                                        className: "input-num1"
                                    }}
                                    
                                     
                                />


                            </label>
                            <label className="label-profile">
                              <span>Your address</span>  
                                <input className="input-add" type="text" placeholder="Enter your address"  required/>
                            </label>
                            <label className="label-profile">
                               <span>Country of residence</span> 
                                <ReactFlagsSelect

                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    searchable
                                    searchPlaceholder="Search countries"
                                    className="menu-flag"
                                    
                                     required
                                />
                            </label>
                            
                            <button className="reg-btn per-btn" type="submit">Save & Continue</button>
                            <span className="lst-span">Your info is saftly secured</span>
                        </form>
                    </div>


                </div>
            </div>
        </div>

    )
}
export default CompleteProfile;