import React, { useState } from "react";
import "./../style/LoginPage.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { GiElephant } from "react-icons/gi";
import { MdLandslide } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function LoginPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [details, setDetails] = useState({
    id: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from the database based on the selected option
      const userResponse = await axios.get(
        selectedOption === "option1"
          ? `http://localhost:4000/api/locomotivePilot/${details.id}`
          : `http://localhost:4000/api/AdministrativeOfficer/${details.id}`
      );

      const userData = userResponse.data;

      // Compare the user data with the details entered by the user
      if (
        selectedOption === "option1"
          ? userData.locomotivePilotID === details.id
          : userData.AD_ID === details.id &&
            userData.password === details.password
      ) {
        // IDs and passwords match, proceed with login
        console.log("Login successful");

        setError(""); // Clear any previous errors
        setSuccess(true); // Show success message
        setDetails({
          id: "",
          password: "",
        }); // Clear the form inputs
        console.log(details);
        // Show success message and navigate to home page after 2 seconds
        setTimeout(() => {
          navigate("/homepage");
        }, 2000);
      } else {
        // IDs or passwords do not match
        setError("Invalid ID or password.");
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Login failed:", error); // Log the error
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error); // Set error message from server response
      } else {
        setError("Login failed. Please try again."); // Set a generic error message
      }
      setShowErrorModal(true); // Show error modal
    } finally {
      // Always clear the form inputs
      setDetails({
        id: "",
        password: "",
      });
    }
  };

  const handleCloseErrorModal = () => setShowErrorModal(false);

  return (
    <>
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* left side bar start */}
          <div className="LoginPage-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="hazard-LoginPage-header-box container-flex">
              <div className="hazard-LoginPage-header-title">
                SriLankan Railway Safety System
              </div>
            </div>

            <div className="hazard-LoginPage-description-box container-flex">
              <div className="hazard-LoginPage-header-description">
                <p>
                  The login process for our Railway Safety System is
                  straightforward and secure. Locomotive pilots or admins simply
                  input their email and password on the login page. The system
                  then verifies these details, ensuring only authorized
                  personnel gain access. Upon successful verification, users are
                  redirected to the main home page, where they can access
                  tailored options and settings designed to facilitate a
                  seamless navigation experience within the system.
                </p>
              </div>
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

            {success && (
              <Modal show={true} onHide={() => setSuccess(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Registration successful!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setSuccess(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}

            <Form onSubmit={handleSubmit}>
              <div className="hazard-LoginPage-radio-box container-flex">
                <div className="hazard-LoginPage-radio-container">
                  <label className="hazard-LoginPage-radio-label">
                    <input
                      type="radio"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleOptionChange}
                    />
                    <span className="hazard-LoginPage-custom-radio"></span>
                    Locomotive pilot
                  </label>
                  <label className="hazard-LoginPage-radio-label">
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                    />
                    <span className="hazard-LoginPage-custom-radio"></span>
                    Admin
                  </label>
                </div>
              </div>

              <div className="row hazard-LoginPage-text-box container-flex">
                <input
                  id="id"
                  type="text"
                  name="id"
                  placeholder={
                    selectedOption === "option1"
                      ? "Locomotive Pilot ID"
                      : "Admin ID"
                  }
                  value={details.id}
                  onChange={handleChange}
                  className="hazard-LoginPage-input-text-box"
                />
              </div>

              <div className="row hazard-LoginPage-text-box container-flex">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={details.password}
                  onChange={handleChange}
                  className="hazard-LoginPage-input-text-box"
                />
              </div>

              <div className="hazard-LoginPage-login-button-box container-flex">
                <Button type="submit" className="hazard-LoginPage-login-button">
                  Sign in
                </Button>
              </div>

              <div className="hazard-LoginPage-register-button-box container-flex">
                <Button
                  className="hazard-LoginPage-signup-button"
                  onClick={() => navigate("register")}
                >
                  Sign up
                </Button>
              </div>
            </Form>

            <div className="hazard-LoginPage-forgot-label-box container-flex">
              <div
                className="hazard-LoginPage-forgot-label"
                onClick={() => navigate("resetpassword")}
              >
                Forgot password?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
