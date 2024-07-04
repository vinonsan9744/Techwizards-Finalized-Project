/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "./../style/AdminHazardLocation.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaRoute } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import axios from 'axios';

function AdminHazardLocation() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = React.useState('card'); // Using React.useState
  const [locationTypes, setLocationTypes] = useState([]);
  const [selectedLocationType, setSelectedLocationType] = useState('');
  const [locationNames, setLocationNames] = useState([]);
  const [selectedLocationName, setSelectedLocationName] = useState('');

   // Fetch location types on component mount
   useEffect(() => {
    const fetchLocationTypes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/location');
        const uniqueTypes = [...new Set(response.data.map(location => location.locationType))];
        setLocationTypes(uniqueTypes);
      } catch (error) {
        console.error('Error fetching location types:', error);
      }
    };

    fetchLocationTypes();
  }, []);

  // Fetch location names based on selected location type
  useEffect(() => {
    const fetchLocationNames = async () => {
      try {
        if (selectedLocationType) {
          const response = await axios.get(`http://localhost:4000/api/location?locationType=${selectedLocationType}`);
          const filteredNames = response.data
            .filter(location => location.locationType === selectedLocationType)
            .map(location => location.locationName);
          setLocationNames(filteredNames);
        }
      } catch (error) {
        console.error('Error fetching location names:', error);
      }
    };

    fetchLocationNames();
  }, [selectedLocationType]);

    // Handle selection of location type
    const handleLocationTypeSelect = (type) => {
      setSelectedLocationType(type);
      setSelectedLocationName(''); // Reset selected location name when location type changes
      setLocationNames([]); // Clear previous location names
      
    };

  // Handle selection of location name
  const handleLocationNameSelect = (name) => {
    setSelectedLocationName(name);
  };


  

  return (
    <>

    {/* ..........this is the main division of screen.......... */}
    <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="admin-hazard-location-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="admin-hazard-location-header-box container-flex ">
              <div className="admin-hazard-location-title">Hazards Locations</div>
            </div>

           
              <InputGroup className="update-hazard-input-dropdown-box">
                <FloatingLabel controlId="floatingTextarea2" label="Select Route">
                  <Form.Control
                    placeholder="Leave a comment here"
                    style={{ height: '5px' }}
                    aria-label="Text input with dropdown button"
                    id="update-hazard-input"
                  value={selectedLocationType}
                            readOnly
                  />
                </FloatingLabel>
                <Dropdown align="end">
                  <Dropdown.Toggle as={Button} variant="outline-secondary" id="update-hazard-input-group-dropdown-2" className="custom-dropdown-toggle">
                    <FaRoute />
                  </Dropdown.Toggle>
                <Dropdown.Menu>
                     {locationTypes.map((type, index) => (
                         <Dropdown.Item key={index} onClick={() => handleLocationTypeSelect(type)}>{type}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
                </Dropdown>
              </InputGroup>

              <InputGroup className="update-hazard-input-dropdown-box">
                <FloatingLabel controlId="floatingTextarea2" label="Location">
                  <Form.Control
                    placeholder="Leave a comment here"
                    style={{ height: '5px' }}
                    aria-label="Text input with dropdown button"
                    id="update-hazard-input"
                    value={selectedLocationName}
                            readOnly
                  />
                </FloatingLabel>
                <Dropdown align="end">
                  <Dropdown.Toggle as={Button} variant="outline-secondary" id="update-hazard-input-group-dropdown-2" className="custom-dropdown-toggle">
                      <MdAddLocationAlt />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {locationNames.map((name, index) => (
                        <Dropdown.Item key={index} onClick={() => handleLocationNameSelect(name)}>{name}</Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                  </Dropdown>
              </InputGroup>

            <div className="admin-hazard-location-left-radio-button-box container-flex ">

            <div className="admin-hazard-location-payment-methods">
            <label className={`admin-hazard-location-method ${selectedMethod === 'card' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={selectedMethod === 'card'}
                    onChange={() => setSelectedMethod('card')}
                    className='admin-hazard-location-radio-button'
                />
                <span className="admin-hazard-location-method-text">Elephant</span>
            </label>
            <label className={`admin-hazard-location-method ${selectedMethod === 'cash' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={selectedMethod === 'cash'}
                    onChange={() => setSelectedMethod('cash')}
                    className='admin-hazard-location-radio-button'

                />
                <span className="admin-hazard-location-method-text">Bull</span>
            </label>
            <label className={`admin-hazard-location-method ${selectedMethod === 'paypal' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={selectedMethod === 'paypal'}
                    onChange={() => setSelectedMethod('paypal')}
                    className='admin-hazard-location-radio-button'

                />
                <span className="admin-hazard-location-method-text">Landslide</span>
            </label>
        </div>
              
            </div>

            <div className="admin-hazard-location-button-box">
              <div className="row">
                <Button  className='admin-hazard-location-button' variant="dark">Update</Button>
                <Button  className='admin-hazard-location-button' variant="dark">Back</Button>
              </div>
            
            </div>

            
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="admin-hazard-location-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">

            <div className="right-admin-hazard-location-header-box container-flex ">
              <h1 className="right-admin-hazard-location-header-heading">
                Hazard Location
              </h1>
            </div>

            <div className="right-admin-hazard-location-header-box-line container-flex "></div>

            <div className="right-admin-hazard-location-location-box container-flex ">
              <h2 className="right-admin-hazard-location-location-heading">Kekkirawa</h2>
            </div>

            <div className="right-admin-hazard-location-possible-hazards-main-box container-flex ">
              <div className="row">
                <div className="right-admin-hazard-location-possible-hazards-title-box container-flex">
                  <h3 className="right-admin-hazard-location-possible-hazards-title">Possible Hazards</h3>
                </div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  <h3 className="right-admin-hazard-location-possible-hazards-content">Elephant</h3>
                </div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  <h3 className="right-admin-hazard-location-possible-hazards-content">Bull</h3>
                </div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  <h3 className="right-admin-hazard-location-possible-hazards-content">Landslides</h3>
                </div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  <h3 className="right-admin-hazard-location-possible-hazards-content">Other</h3>
                </div>



              </div>
            </div>
          </div>
          {/* ..........right side box ended.......... */}
        </div>
      </div>


     
    </>
  );
}

export default AdminHazardLocation;
