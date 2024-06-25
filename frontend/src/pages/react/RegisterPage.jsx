/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./../style/RegisterPage.css"
import { GiElephant } from "react-icons/gi";
import { MdLandslide } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function RegisterPage() {
  const [formData, setFormData] = useState({
    locomotiveName: '',
    locomotiveEmail: '',
    locomotivePhoneNo: ''
  });
  const [error, setError] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/locomotivePilot', formData);
      console.log(response.data); // Handle success response
      setSuccessMessage('Your Registration Success!'); // Set success message
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Registration failed:', error); // Log the error
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error); // Set error message from server response
      } else {
        setError('Registration failed. Please try again.'); // Set a generic error message
      }
      setShowErrorModal(true); // Show the error modal
    }
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false); // Close the error modal
  };

  return (
    <div>
        <div className="container-flex vh-100">
      <div className="row vh-100">

        {/* left side bar start */}
          <div className="RegisterPage-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            
             <div className="hazard-RegisterPage-header-box container-flex">
              <div className="hazard-RegisterPage-header-title">Sri Lanka Railway Safety System</div>
             </div>

             <div className="hazard-RegisterPage-description-box container-flex">
             <div className="hazard-RegisterPage-header-description"><p>The login process for our Railway Safety System is straightforward and secure. Locomotive pilots or admins simply input their email and password on the login page. The system then verifies these details, ensuring only authorized personnel gain access. Upon successful verification, users are redirected to the main home page, where they can access tailored options and settings designed to facilitate a seamless navigation experience within the system.</p></div>
             </div>

             <div className="hazard-RegisterPage-line-box container-flex">
             {/* <div className="hazard-LoginPage-header-title">Sri Lanka Railway Safety System</div> */}
             </div>

             <div className="hazard-RegisterPage-circle-box container-flex">
                <div className="hazard-RegisterPage-circle1 container-flex">
                <GiElephant className="icon" />
                </div>
                <div className="hazard-RegisterPage-circle container-flex">
                <MdLandslide className="icon" />
                </div>
                <div className="hazard-RegisterPage-circle container-flex">
                <FaTrainSubway className="icon" />
                </div>
                <div className="hazard-RegisterPage-circle container-flex">
                <FaCarSide className="icon" />
                </div>
                <div className="hazard-RegisterPage-circle container-flex">
                <FaUserTie className="icon" />
                </div>
                <div className="hazard-RegisterPage-circle container-flex">
                <FaCloudSunRain className="icon" />
                </div>
                <div className="hazard-RegisterPage-circle container-flex">
                <FaMapLocationDot className="icon" />
                </div>
             </div>

          </div>
          {/* left side bar end  */}
          

          <div className="RegisterPage-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6 ">

             <div className="hazard-RegisterPage-heading-box container-flex">
             <div className="hazard-RegisterPage-heading-title">Sign up Form</div>
             </div>

             <div className="hazard-RegisterPage-heading-line-box container-flex">
             {/* <div className="hazard-LoginPage-header-title">Sri Lanka Railway Safety System</div> */}
             </div>

              {error && (
                <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{error}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseErrorModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              {successMessage && (
                <Modal show={true} onHide={() => setSuccessMessage('')}>
                  <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{successMessage}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSuccessMessage('')}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
              
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="locomotiveName"
                  placeholder="Name"
                  className="hazard-RegisterPage-input-text-box"
                  value={formData.locomotiveName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="locomotiveEmail"
                  placeholder="Email"
                  className="hazard-RegisterPage-input-text-box"
                  value={formData.locomotiveEmail}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="locomotivePhoneNo"
                  placeholder="Phone Number"
                  className="hazard-RegisterPage-input-text-box"
                  value={formData.locomotivePhoneNo}
                  onChange={handleChange}
                />
                <div className="hazard-RegisterPage-login-button-box container-flex">
                  <Button type="submit" className="hazard-RegisterPage-login-button">Sign up</Button>
                </div>
                <div className="hazard-RegisterPage-register-button-box container-flex">
                  <Button className="hazard-RegisterPage-signup-button">Sign in</Button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
