import React, { useState, useEffect } from "react";
import "./../style/HazardLocation .css";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function HazardLocation() {
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
          setLocationNames(response.data.map(location => location.locationName));
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
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* Left side box */}
          <div className="hazard-location-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hazard-location-header-box container-flex w-100 vh-30">
              <h1 className="hazard-location-header-title">Hazard Location</h1>
            </div>

            <div className="hazard-location-dropdown-box container-flex">
              <div>
                {/* Dropdown for location types */}
                <InputGroup className="hazard-location-input-dropdown-box">
                  <Form.Control
                    aria-label="Text input with dropdown button"
                    id="hazard-location-input"
                    value={selectedLocationType}
                    readOnly
                  />

                  <DropdownButton
                    variant="outline-secondary"
                    title="Location Route"
                    id="hazard-location-input-group-dropdown-2"
                    align="end"
                    className="hazard-location-dropdown-box-button"
                  >
                    {locationTypes.map((type, index) => (
                      <Dropdown.Item key={index} onClick={() => handleLocationTypeSelect(type)}>{type}</Dropdown.Item>
                    ))}
                  </DropdownButton>
                </InputGroup>

                {/* Dropdown for location names */}
                <InputGroup className="hazard-location-input-dropdown-box">
                  <Form.Control
                    aria-label="Text input with dropdown button"
                    id="hazard-location-input"
                    value={selectedLocationName}
                    readOnly
                  />

                  <DropdownButton
                    variant="outline-secondary"
                    title="Location Name"
                    id="hazard-location-input-group-dropdown-2"
                    align="end"
                    className="hazard-location-dropdown-box-button"
                  >
                    {locationNames.map((name, index) => (
                      <Dropdown.Item key={index} onClick={() => handleLocationNameSelect(name)}>{name}</Dropdown.Item>
                    ))}
                  </DropdownButton>
                </InputGroup>
              </div>
            </div>

            <div className="hazard-location-button-box1 container-flex vh-30">
              <Button className="hazard-location-search-button">Search</Button>
            </div>

            <div className="hazard-location-button-box2 container-flex vh-30">
              <Button className="hazard-location-back-button">Back</Button>
            </div>
          </div>

          {/* Right side box */}
          <div className="hazard-location-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hazard-location-location-box container-flex vh-30">
              <h1 className="hazard-location-heading">Kekkirawa</h1>
            </div>

            <div className="hazard-location-possible-main-box container-flex vh-30">
              <div className="row">
                <div className="hazard-location-possible-header-box container-flex">
                  <h2 className="hazard-location-possible-header-heading">Possible Hazards</h2>
                </div>

                <div className="hazard-location-possible-content-box1 container-flex">
                  <h2 className="hazard-location-possible-content-heading">Bull</h2>
                </div>

                <div className="hazard-location-possible-content-box1 container-flex">
                  <h2 className="hazard-location-possible-content-heading">Elephant</h2>
                </div>

                <div className="hazard-location-possible-content-box1 container-flex">
                  <h2 className="hazard-location-possible-content-heading">Landslide</h2>
                </div>

                <div className="hazard-location-possible-content-box1 container-flex">
                  <h2 className="hazard-location-possible-content-heading">Other</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HazardLocation;
