import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import "./../style/UpdateHazard.css";

function UpdateHazard() {
  const navigate = useNavigate();
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="update-hazard-header-box container-flex ">
              <div className="update-hazard-title">header</div>
            </div>
          <div className="update-hazard-main-left col-sm-12 col-md-9 col-lg-9 col-xl-9">
            
            

            <div>

            <InputGroup className="update-hazard-input-dropdown-box">
            <FloatingLabel controlId="floatingTextarea2" label="Date">
            <Form.Control  
          placeholder="Leave a comment here"
          style={{ height: '5px' }} aria-label="Text input with dropdown button" id="update-hazard-input"/>
            </FloatingLabel>
                  <DropdownButton 
                  variant="outline-secondary"
                  title="Select Route"
                  id="update-hazard-input-group-dropdown-2"
                  align="end"
                  className="update-hazard-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
            </InputGroup>


            <InputGroup className="update-hazard-input-dropdown-box">
            <FloatingLabel controlId="floatingTextarea2" label="Location">
            <Form.Control  
          placeholder="Leave a comment here"
          style={{ height: '5px' }} aria-label="Text input with dropdown button" id="update-hazard-input"/>
            </FloatingLabel>
                  <DropdownButton 
                  variant="outline-secondary"
                  title="Select Route"
                  id="update-hazard-input-group-dropdown-2"
                  align="end"
                  className="update-hazard-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
            </InputGroup>


            <InputGroup className="update-hazard-input-dropdown-box">
            <FloatingLabel controlId="floatingTextarea2" label="Hazard type">
            <Form.Control  
          placeholder="Leave a comment here"
          style={{ height: '5px' }} aria-label="Text input with dropdown button" id="update-hazard-input"/>
            </FloatingLabel>
                  <DropdownButton 
                  variant="outline-secondary"
                  title="Select Route"
                  id="update-hazard-input-group-dropdown-2"
                  align="end"
                  className="update-hazard-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
            </InputGroup>

            <InputGroup className="update-hazard-input-dropdown-box">
            <FloatingLabel controlId="floatingTextarea2" label="Description">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
           id="update-hazard-input"
          style={{ height: '110px' }}
        />
      </FloatingLabel>
            </InputGroup>

        

           
      
            </div>

          </div>
          {/* ..........left side box ended.......... */}

          <div className="update-hazard-main-left col-sm-12 col-md-3 col-lg-3 col-xl-3">

            <div className="update-hazard-button-box">
            <Button variant="outline-dark" className='update-hazard-button' >Submit</Button>{' '}
            <Button variant="outline-dark" className='update-hazard-button' onClick={() => navigate('/homepage')}>Back</Button>{' '}
            
            </div>
            
        
          </div>
         
        </div>
      </div>
    </>
  );
}

export default UpdateHazard;
