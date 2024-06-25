/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./../style/LoginPage.css";
import Button from 'react-bootstrap/Button';
import { GiElephant } from "react-icons/gi";
import { MdLandslide } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function LoginPage() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };
  return (
    <>

      <div className="container-flex vh-100">
      <div className="row vh-100">

        {/* left side bar start */}
          <div className="LoginPage-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            
             <div className="hazard-LoginPage-header-box container-flex">
             <div className="hazard-LoginPage-header-title">SriLankan Railway Safety System</div>
             </div>

             <div className="hazard-LoginPage-description-box container-flex">
             <div className="hazard-LoginPage-header-description"><p>The login process for our Railway Safety System is straightforward and secure. Locomotive pilots or admins simply input their email and password on the login page. The system then verifies these details, ensuring only authorized personnel gain access. Upon successful verification, users are redirected to the main home page, where they can access tailored options and settings designed to facilitate a seamless navigation experience within the system.</p></div>
             </div>

             <div className="hazard-LoginPage-line-box container-flex">
             {/* <div className="hazard-LoginPage-header-title">Sri Lanka Railway Safety System</div> */}
             </div>

             <div className="hazard-LoginPage-circle-box container-flex">
                <div className="hazard-LoginPage-circle1 container-flex">
                <GiElephant className="icon" />
                </div>
                <div className="hazard-LoginPage-circle container-flex">
                <MdLandslide className="icon" />
                </div>
                <div className="hazard-LoginPage-circle container-flex">
                <FaTrainSubway className="icon" />
                </div>
                <div className="hazard-LoginPage-circle container-flex">
                <FaCarSide className="icon" />
                </div>
                <div className="hazard-LoginPage-circle container-flex">
                <FaUserTie className="icon" />
                </div>
                <div className="hazard-LoginPage-circle container-flex">
                <FaCloudSunRain className="icon" />
                </div>
                <div className="hazard-LoginPage-circle container-flex">
                <FaMapLocationDot className="icon" />
                </div>
             </div>

            
          

         
          </div>
{/* left side bar end  */}
          

          <div className="LoginPage-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6 ">

             <div className="hazard-LoginPage-heading-box container-flex">
             <div className="hazard-LoginPage-heading-title">Login Form</div>
             </div>

             <div className="hazard-LoginPage-heading-line-box container-flex">
             {/* <div className="hazard-LoginPage-header-title">Sri Lanka Railway Safety System</div> */}
             </div>

             <div className="hazard-LoginPage-radio-box container-flex">
             <div className="hazard-LoginPage-radio-container">
            <label className="hazard-LoginPage-radio-label">
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                />
                <span className="hazard-LoginPage-custom-radio"></span>
                Locomotive pilot
            </label>
            <label className="hazard-LoginPage-radio-label">
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                />
                <span className="hazard-LoginPage-custom-radio"></span>
                Admin
            </label>
        </div>
             </div>

             <div className="hazard-LoginPage-text-box container-flex">
             <input
                type="text"
                placeholder="Enter  User Name"
                className="hazard-LoginPage-input-text-box"
              />
             </div>

             <div className="hazard-LoginPage-text-box container-flex">
             <input
                type="password"
                placeholder="Enter  Password"
                className="hazard-LoginPage-input-text-box"
              />
             </div>

             <div className="hazard-LoginPage-login-button-box container-flex">
             <Button className="hazard-LoginPage-login-button">Sign in</Button>
             </div>

             <div className="hazard-LoginPage-register-button-box container-flex">
             <Button className="hazard-LoginPage-signup-button">Sign up</Button>
             </div>

             <div className="hazard-LoginPage-forgot-label-box container-flex">
             <div className="hazard-LoginPage-forgot-label">Forgot password?</div>
             </div>

          </div>


        </div>
      </div>

    </>
  );
}

export default LoginPage;
