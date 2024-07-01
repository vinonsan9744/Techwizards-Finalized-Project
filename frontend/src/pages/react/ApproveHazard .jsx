/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./../style/ApproveHazard .css"
import { RiMessage2Fill } from "react-icons/ri";
import { GiElephant } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function ApproveHazard () {
  const navigate = useNavigate();
  return (
    <>
    {/* ..........this is the main division of screen.......... */}
    <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="ApproveHazard-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="ApproveHazard-header-box container-flex w-100 vh-30">
              <h1 className="ApproveHazard-title">Approve Hazard</h1>
             </div>
             <div className='ApproveHazard-newhazard-box continer-flex vh-30'>
             <div className="row">
               <div className='ApproveHazard-newhazard-heading-box container-flex'>
                  <div className='ApproveHazard-newhazard-heading-title-box container-flex'>
                    <h1>New hazards update</h1>
                  </div>

                  <div className='ApproveHazard-newhazard-heading-notification-box container-flex'>
                    <h1><RiMessage2Fill /></h1>
                  </div>
              </div>
              <div className='ApproveHazard-newhazard-content-box container-flex'>
                <div className='row'>
                  <div className='ApproveHazard-detail-box container-flex'>
                      <div className='ApproveHazard-detail-name-box container-flex'>
                        <p>Name:</p>
                      </div>
                      <div className='ApproveHazard-detail-loco-phone-box container-flex'>
                        <p>LP Phone:</p>
                      </div>
                      <div className='ApproveHazard-detail-station-phone-box container-flex'>
                      <p>Station Phone:</p>
                      </div>
                  </div>
                  <div className='ApproveHazard-description-box container-flex'>
                  </div>
                  <div className='ApproveHazard-accept-box container-flex'>
                    <div className='row'>
                      <div className='ApproveHazard-hazard-btn-box container-flex'>
                        <div className='ApproveHazard-hazard-left-icon-box'><GiElephant /></div>
                        <div className='ApproveHazard-hazard-middle-input-box'>
                          <p>Elephant</p>
                          
                          </div>
                        <div className='ApproveHazard-hazard-right-button-box'>
                        <Button className='ApproveHazard-hazard-right-button' variant="outline-dark">Accept</Button>
                        </div>
                      </div>
                      <div className='ApproveHazard-location-btn-box container-flex'>
                      <div className='ApproveHazard-hazard-left-icon-box'><FaLocationDot  /></div>
                        <div className='ApproveHazard-hazard-middle-input-box'>
                          <p>Anuradhapura</p>
                          
                          </div>
                        <div className='ApproveHazard-hazard-right-button-box'>
                        <Button className='ApproveHazard-hazard-right-button' variant="outline-dark">Accept</Button>
                        </div>
                      </div>

                    </div>
                  </div>


                </div>

              </div>


             </div>
             </div>
          </div>
           {/* ..........left side box ended.......... */}


           {/* ..........this is the right side box.......... */}
           <div className="ah-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
           <div className="ah-right-header-box container-flex vh-30">
            <h1>Approval Hazard</h1>
           </div>

           <InputGroup className="ah-input-dropdown-box mb-5">
            <FloatingLabel controlId="floatingTextarea2" label="Location">
            <Form.Control  
          placeholder="Leave a comment here"
          style={{ height: '3px' }} aria-label="Text input with dropdown button" id="ah-input"/>
            </FloatingLabel>
                  <DropdownButton 
                  variant="outline-secondary"
                  title="Select Route"
                  id="ah-input-group-dropdown-2"
                  align="end"
                  className="ah-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
            </InputGroup>

            <InputGroup className="ah-input-dropdown-box">
            <FloatingLabel controlId="floatingTextarea2" label="Location">
            <Form.Control  
          placeholder="Leave a comment here"
          style={{ height: '3px' }} aria-label="Text input with dropdown button" id="ah-input"/>
            </FloatingLabel>
                  <DropdownButton 
                  variant="outline-secondary"
                  title="Select Route"
                  id="ah-input-group-dropdown-2"
                  align="end"
                  className="ah-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
            </InputGroup>

            <div className="ah-box button-box container-flex">
            <Button variant="outline-dark" className='ah-button'onClick={() => navigate('/adminapprovehazardlocation')} >Approve</Button>{' '}
           
            </div>

            <div className="ah-box button-box container-flex">
            <Button variant="outline-dark" className='ah-button'>Decline</Button>{' '}
            </div>

            <div className="ah-box button-box container-flex">
            <Button variant="outline-dark" className='ah-button'  onClick={() => navigate('/adminhomepage')}>Back</Button>{' '}
           
            </div>

            <div className="ah-box button-box container-flex">
            <Button variant="outline-dark" className='ah-button' onClick={() => navigate('/adminhomepage')}>Back</Button>{' '}
            </div>
           
           

          
          </div>
          {/* ..........right side box ended.......... */}

        </div>
      </div>

    </>
  )
}

export default ApproveHazard 