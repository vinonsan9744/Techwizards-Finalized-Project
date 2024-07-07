/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../style/ApproveHazard .css';
import { RiMessage2Fill } from 'react-icons/ri';
import { GiElephant } from 'react-icons/gi';
import { FaLocationDot } from 'react-icons/fa6';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

function ApproveHazard() {
  const [hazardCount, setHazardCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null); // New state for selected notification
  const [inputLocation, setInputLocation] = useState(''); // State for the location input value
  const [inputHazard, setInputHazard] = useState(''); // State for the hazard input value
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch hazard data from the API
    axios.get('http://localhost:4000/api/locomotivePilotHazard')
      .then(response => {
        // Count the number of hazards
        setHazardCount(response.data.length);
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching hazard data:', error);
      });
  }, []);

  const handleNotificationClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const markAsRead = (hazardId) => {
    // Fetch the selected notification details using hazardId
    axios.get(`http://localhost:4000/api/locomotivePilotHazard/hazardID/${hazardId}`)
      .then(response => {
        setSelectedNotification(response.data); // Set the fetched notification
        console.log(`Mark hazard ${hazardId} as read`);
        setShowModal(false); // Close the modal after marking as read
      })
      .catch(error => {
        console.error('Error fetching hazard details:', error);
      });
  };

  const handleAcceptClick = (type, value) => {
    if (type === 'hazard') {
      setInputHazard(value); // Set the input value to the hazard type
    } else if (type === 'location') {
      setInputLocation(value); // Set the input value to the location name
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth(); // Months are zero-based
    const year = date.getUTCFullYear();
    
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    const month = monthNames[monthIndex];
    
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes if needed
    
    const time = `${formattedHours}:${formattedMinutes} ${period}`;
  
    return { day, month, year, time };
  };

  return (
    <>
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* Left side box */}
          <div className="ApproveHazard-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="ApproveHazard-header-box container-flex w-100 vh-30">
              <h1 className="ApproveHazard-title">Approve Hazard</h1>
            </div>
            <div className="ApproveHazard-newhazard-box container-flex vh-30">
              <div className="row">
                <div className="ApproveHazard-newhazard-heading-box container-flex">
                  <div className="ApproveHazard-newhazard-heading-title-box container-flex">
                    <h1>New Hazards Update</h1>
                  </div>
                  <div className="ApproveHazard-newhazard-heading-notification-box container-flex">
                    <button
                      type="button"
                      className="ApproveHazard-notification-button-box-icon btn btn-primary position-relative"
                      onClick={handleNotificationClick}
                    >
                      <RiMessage2Fill className='ApproveHazard-message-icon' />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <Badge bg="danger" className="ApproveHazard-badge-position">{hazardCount}</Badge>
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="ApproveHazard-newhazard-content-box container-flex">
                  <div className="row">
                    <div className="ApproveHazard-detail-box container-flex">
                      <div className="ApproveHazard-detail-name-box container-flex">
                        <p>Name:</p>
                      </div>
                      <div className="ApproveHazard-detail-name-box container-flex">
                        <p>LP Phone:</p>
                      </div>
                      <div className="ApproveHazard-detail-name-box container-flex">
                        <p>Station Phone:</p>
                      </div>
                    </div>
                    <div className="ApproveHazard-description-box container-flex">
                      <p>
                        {selectedNotification && (() => {
                          const { day, month, year, time } = formatDate(selectedNotification.time);
                          return `IN ${selectedNotification.locationName}, On ${day} ${month} ${year} at ${time}, ${selectedNotification.hazardType} hazard was reported`;
                        })()}
                      </p>
                    </div>
                    <div className="ApproveHazard-accept-box container-flex">
                      <div className="row">
                        <div className="ApproveHazard-hazard-btn-box container-flex">
                          <div className="ApproveHazard-hazard-left-icon-box">
                            <GiElephant />
                          </div>
                          <div className="ApproveHazard-hazard-middle-input-box">
                            <p>{selectedNotification && <p>{selectedNotification.hazardType}</p>}</p>
                          </div>
                          <div className="ApproveHazard-hazard-right-button-box">
                            <Button
                              className="ApproveHazard-hazard-right-button"
                              variant="outline-dark"
                              onClick={() => handleAcceptClick('hazard', selectedNotification.hazardType)}
                            >
                              Accept
                            </Button>
                          </div>
                        </div>
                        <div className="ApproveHazard-location-btn-box container-flex">
                          <div className="ApproveHazard-hazard-left-icon-box">
                            <FaLocationDot />
                          </div>
                          <div className="ApproveHazard-hazard-middle-input-box">
                            <p>{selectedNotification && <p>{selectedNotification.locationName}</p>}</p>
                          </div>
                          <div className="ApproveHazard-hazard-right-button-box">
                            <Button
                              className="ApproveHazard-hazard-right-button"
                              variant="outline-dark"
                              onClick={() => handleAcceptClick('location', selectedNotification.locationName)}
                            >
                              Accept
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right side box */}
          <div className="ah-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="ah-right-header-box container-flex vh-30">
              <h1>Approval Hazard</h1>
            </div>
            <InputGroup className="ah-input-dropdown-box mb-5">
              <Form.Control
                placeholder="Location"
                value={inputLocation} // Bind the location input value state
                onChange={(e) => setInputLocation(e.target.value)} // Update the state on change
                style={{ height: '70px', fontSize: '5vh', color: 'red', fontWeight: 'bolder' }}
                aria-label="Text input with dropdown button"
                id="ah-input-location"
              />
              <Button
                variant="outline-secondary"
                title="Select Route"
                id="ah-input-group-dropdown-2"
                align="end"
                className="ah-dropdown-box-button"
              >
                <div className="ApproveHazard-hazard-right-hazard-icon">
                  <FaLocationDot />
                </div>
              </Button>
            </InputGroup>
            <InputGroup className="ah-input-dropdown-box">
              <Form.Control
                placeholder="Hazard"
                value={inputHazard} // Bind the hazard input value state
                onChange={(e) => setInputHazard(e.target.value)} // Update the state on change
                style={{ height: '70px', fontSize: '5vh', color: 'red', fontWeight: 'bolder' }}
                aria-label="Text input with dropdown button"
                id="ah-input-hazard"
              />
              <Button
                variant="outline-secondary"
                title="Select Route"
                id="ah-input-group-dropdown-2"
                align="end"
                className="ah-dropdown-box-button"
              >
                <div className="ApproveHazard-hazard-right-hazard-icon">
                  <GiElephant />
                </div>
              </Button>
            </InputGroup>
            <div className="ah-box button-box container-flex">
              <Button
                variant="outline-dark"
                className="ah-button"
                onClick={() => navigate('/adminapprovehazardlocation')}
              >
                Approve
              </Button>
            </div>
            <div className="ah-box button-box container-flex">
              <Button variant="outline-dark" className="ah-button">
                Decline
              </Button>
            </div>
            <div className="ah-box button-box container-flex">
              <Button
                variant="outline-dark"
                className="ah-button"
                onClick={() => navigate('/adminhomepage')}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Hazard Reports</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <p>{`Hazard Reporting${index + 1}`}</p>
              <Button variant="outline-success" onClick={() => markAsRead(notification.hazardID)}>
                View Report
              </Button>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApproveHazard;
