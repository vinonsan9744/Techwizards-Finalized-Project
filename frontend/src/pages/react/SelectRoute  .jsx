
import "./../style/SelectRoute .css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function SelectRoute() {
  const navigate = useNavigate();
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="select-route-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="select-route-header-box container-flex ">
              <div className="select-route-title">Select Route</div>
            </div>

            <div className="select-route-dropdown-box container-flex">
              
            <div>
            <InputGroup className="select-route-input-dropdown-box">
                  <Form.Control aria-label="Text input with dropdown button" id="select-route-input"/>

                  <DropdownButton 
                  variant="outline-secondary"
                  title="Select Route"
                  id="select-route-input-group-dropdown-2"
                  align="end"
                  className="select-route-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
            </InputGroup>

            <InputGroup className="select-route-input-dropdown-box">
                  <Form.Control aria-label="Text input with dropdown button" id="select-route-input"/>

                  <DropdownButton 
                  variant="outline-secondary"
                  title="Start  Route"
                  id="select-route-input-group-dropdown-2"
                  align="end"
                  className="select-route-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
              </InputGroup>

              <InputGroup className="select-route-input-dropdown-box">
                  <Form.Control aria-label="Text input with dropdown button" id="select-route-input"/>

                  <DropdownButton 
                  variant="outline-secondary"
                  title="End   Route"
                  id="select-route-input-group-dropdown-2"
                  align="end"
                  className="select-route-dropdown-box-button"
                 >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
              </InputGroup>
            </div>
                
                

                
                    
                
                
              
            </div>

            <div className="select-route-start-button-box button-box container-flex">
            <Button className="select-route-start-button" variant="success">Start</Button>{' '}
            </div>

            <div className="select-route-back-button-box button-box container-flex">
            <Button className="select-route-back-button" onClick={() => navigate('/homepage')}>Back</Button>{' '}
            </div>
            
            
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="right-map-box container-flex"></div>
          </div>
          
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default SelectRoute;
