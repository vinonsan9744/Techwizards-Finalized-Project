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
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

function ApproveHazard() {
  const [hazardCount, setHazardCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch hazard data from the API
    axios.get('http://localhost:4000/api/locomotivePilotHazard')
      .then(response => {
        // Count the number of hazards
        setHazardCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching hazard data:', error);
      });
  }, []);


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

                    >
                      {<RiMessage2Fill className='ApproveHazard-message-icon' />}
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <Badge bg="danger" className="ApproveHazard-badge-position">{hazardCount}</Badge>
                        <span class="visually-hidden">unread messages</span>
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
                      <div className="ApproveHazard-detail-loco-phone-box container-flex">
                        <p>LP Phone:</p>
                      </div>
                      <div className="ApproveHazard-detail-station-phone-box container-flex">
                        <p>Station Phone:</p>
                      </div>
                    </div>
                    <div className="ApproveHazard-description-box container-flex"></div>
                    <div className="ApproveHazard-accept-box container-flex">
                      <div className="row">
                        <div className="ApproveHazard-hazard-btn-box container-flex">
                          <div className="ApproveHazard-hazard-left-icon-box">
                            <GiElephant />
                          </div>
                          <div className="ApproveHazard-hazard-middle-input-box">
                            <p>Elephant</p>
                          </div>
                          <div className="ApproveHazard-hazard-right-button-box">
                            <Button className="ApproveHazard-hazard-right-button" variant="outline-dark">Accept</Button>
                          </div>
                        </div>
                        <div className="ApproveHazard-location-btn-box container-flex">
                          <div className="ApproveHazard-hazard-left-icon-box">
                            <FaLocationDot />
                          </div>
                          <div className="ApproveHazard-hazard-middle-input-box">
                            <p>Anuradhapura</p>
                            <h1>gfhfjyk</h1>
                          </div>
                          <div className="ApproveHazard-hazard-right-button-box">
                            <Button className="ApproveHazard-hazard-right-button" variant="outline-dark">Accept</Button>
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
                style={{ height: '70px' , fontSize:'5vh' } }
                aria-label="Text input with dropdown button"
                id="ah-input"
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
                style={{ height: '70px' , fontSize:'5vh' } }
                aria-label="Text input with dropdown button"
                id="ah-input"
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
    </>
  );
}

export default ApproveHazard;
