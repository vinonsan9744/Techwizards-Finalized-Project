
import "./../style/SelectRoute .css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SelectRoute() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="select-route-header-box container-flex ">
              <div className="select-route-title">Select Route</div>
            </div>

            <div className="select-route-dropdown-box container-flex">
              <div className="row">
                <div className="select-route-selection-box1 container-flex">
                    <InputGroup className="mb-3">
                      <Form.Control aria-label="Text input with dropdown button" />

                        <DropdownButton
                          variant="outline-secondary"
                          title="Dropdown"
                          id="input-group-dropdown-2"
                          align="end"
                        >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                    
                </div>
                <div className="select-route-selection-box2 container-flex"></div>
                <div className="select-route-selection-box2 container-flex"></div>
              </div>
            </div>
            <div className="select-route-start-button-box button-box container-flex"></div>
            <div className="select-route-back-button-box button-box container-flex"></div>
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
