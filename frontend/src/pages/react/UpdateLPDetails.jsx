
import "./../style/UpdateLPDetails.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';

function UpdateLPDetails() {
  const navigate = useNavigate();
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="UpdateLPDetails-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">

            <div className="UpdateLPDetails-header-box container-flex w-100 vh-30">
              <div className="UpdateLPDetails-title"><h1>Loco Pilot Details</h1></div>
            </div>

            <div>
              
              <div>
              <InputGroup className="UpdateLPDetails-input-dropdown-box">
            <FloatingLabel controlId="floatingTextarea2" label="Location">
            <Form.Control  
          placeholder="Leave a comment here"
          style={{ height: '3px' }} aria-label="Text input with dropdown button" id="UpdateLPDetails-input"/>
            </FloatingLabel>
                  <DropdownButton 
                  variant="outline-secondary"
                  title="Select Route"
                  id="UpdateLPDetails-input-group-dropdown-2"
                  align="end"
                  className="UpdateLPDetails-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
            </InputGroup>

            <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPhoneNo"
                  type="tel"
                  name="locomotivePhoneNo"
                  placeholder="Phone Number"
                 
                  className="UpdateLPDetails-input-text-box"
                />
                <label htmlFor="floatingPhoneNo">Phone Number</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPhoneNo"
                  type="tel"
                  name="locomotivePhoneNo"
                  placeholder="Phone Number"
                 
                  className="UpdateLPDetails-input-text-box"
                />
                <label htmlFor="floatingPhoneNo">Phone Number</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPhoneNo"
                  type="tel"
                  name="locomotivePhoneNo"
                  placeholder="Phone Number"
                 
                  className="UpdateLPDetails-input-text-box"
                />
                <label htmlFor="floatingPhoneNo">Phone Number</label>
              </Form.Floating>

              </div>

            
              
            </div>

            <div className="UpdateLPDetails-box button-box container-flex">
            <Button variant="outline-dark" className='UpdateLPDetails-button' >Submit</Button>{' '}
           
            </div>

            <div className="UpdateLPDetails-box button-box container-flex">
            <Button variant="outline-dark" className='UpdateLPDetails-button' onClick={() => navigate('/adminhomepage')}>Back</Button>{' '}
            </div>

          

          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="UpdateLPDetails-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">

            <div className="UpdateLPDetails-heading-box container-flex">
              <h1>Locomotive pilot details</h1>
            </div>
            <div className="UpdateLPDetails-heading-line container-flex"></div>

            <div className="UpdateLPDetails-input-box container-flex">
              <div>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPhoneNo"
                  type="tel"
                  name="locomotivePhoneNo"
                  placeholder="Phone Number"
                 
                  className="UpdateLPDetails-input-text-box"
                />
                <label htmlFor="floatingPhoneNo">Phone Number</label>
              </Form.Floating>
              </div>
           
            

                  
              
            </div>
            

          
            
          </div>
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default UpdateLPDetails;
