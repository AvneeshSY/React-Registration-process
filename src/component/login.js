import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import img from './image/img.png'
const Login = () => {
  return (
    <div className="container">
      <div className="image-container">
        {/* You can replace the image URL with your own */}
        {/* <div className='text'>" The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets and again during the
          as desktop publishers bundled the text with their software. </div> */}
        <img src={img} alt="Background" />
      </div>
      <div className="Right-container">
        <div className='top-Content'>
          <span>Already have an account? </span><Link to='/'>Sign in</Link>
        </div>

        <div className='Mid-content'>

          <b>Join Us!<br></br></b>
          <div className='Sub-mid'><span className='adjust'> To being this journey, tell us what type of account you'd be opening</span></div>
        </div>

        <div className='main'>
          <Link to="/reg_individual">
            <div className='box-Containter'>
              <div className='sub-Box'><AssignmentIndIcon className='icon'></AssignmentIndIcon></div>
              <div className='sub-Box2'><b>Individual<br></br></b><span>Personal account to manage all you activities</span></div>
              <div className='arrow'><ArrowRightAltIcon className='Rightarrow'></ArrowRightAltIcon></div>
            </div></Link></div>
        <div className='main'>
          <div className='box-Containter'>
            <div className='sub-Box'><BusinessCenterIcon className='icon'></BusinessCenterIcon></div>
            <div className='sub-Box2'><b>Business<br></br></b><span>Own or belong to a comapany, This is for you.</span></div>
          </div></div>
      </div>

    </div>
  );
};

export default Login;
