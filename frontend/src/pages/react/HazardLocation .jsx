import React, { useState, useEffect } from "react";
import "./../style/HazardLocation .css";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { FaRoute } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";

function HazardLocation() {
  const [locationTypes, setLocationTypes] = useState([]);
  const [selectedLocationType, setSelectedLocationType] = useState('');
  const [locationNames, setLocationNames] = useState([]);
  const [selectedLocationName, setSelectedLocationName] = useState('');
  const [hazards, setHazards] = useState([]);

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
          // Filter location names based on selected location type
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

  // Fetch hazards based on selected location name
  useEffect(() => {
    const fetchHazards = async () => {
      try {
        if (selectedLocationName) {
          const response = await axios.get(`http://localhost:4000/api/hazard/locationName/${selectedLocationName}`);
          setHazards(response.data);
        }
      } catch (error) {
        console.error('Error fetching hazards:', error);
      }
    };

    fetchHazards();
  }, [selectedLocationName]);

  // Handle selection of location type
  const handleLocationTypeSelect = (type) => {
    setSelectedLocationType(type);
    setSelectedLocationName(''); // Reset selected location name when location type changes
  };

  // Handle selection of location name
  const handleLocationNameSelect = (name) => {
    setSelectedLocationName(name);
  };

  // Handle clear button click
  const handleClear = () => {
    setSelectedLocationType('');
    setSelectedLocationName('');
    setHazards([]);
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

                {/* Dropdown for location types */}
                <InputGroup className="hazard-location-input-dropdown-box">
                  <FloatingLabel controlId="floatingInputLocationName" label="Location Type" className="hazard-location-floating-label">
                    <Form.Control
                      aria-label="Text input with dropdown button"
                      id="hazard-location-input"
                      value={selectedLocationType}
                      readOnly
                    />
                  </FloatingLabel>
                  <DropdownButton
                    variant="outline-secondary"
                    title={<FaRoute />}
                    id="hazard-location-input-group-dropdown-2"
                    align="end"
                    className="hazard-location-dropdown-box-button"
                  >
                    <div className="hazard-location-scrollable-dropdown-menu">
                      {locationTypes.map((type, index) => (
                        <Dropdown.Item key={index} onClick={() => handleLocationTypeSelect(type)}>{type}</Dropdown.Item>
                      ))}
                    </div>
                  </DropdownButton>
                </InputGroup>

                {/* Dropdown for location names */}
                <InputGroup className="hazard-location-input-dropdown-box">
                  <FloatingLabel controlId="floatingInputLocationName" label="Location Name" className="hazard-location-floating-label">
                    <Form.Control
                      aria-label="Text input with dropdown button"
                      id="hazard-location-input"
                      value={selectedLocationName}
                      readOnly
                    />
                  </FloatingLabel>
                  <DropdownButton
                    variant="outline-secondary"
                    title={<MdAddLocationAlt />}
                    id="hazard-location-input-group-dropdown-2"
                    align="end"
                    className="hazard-location-dropdown-box-button"
                  >
                    <div className="hazard-location-scrollable-dropdown-menu">
                      {locationNames.map((name, index) => (
                        <Dropdown.Item key={index} onClick={() => handleLocationNameSelect(name)}>{name}</Dropdown.Item>
                      ))}
                    </div>
                  </DropdownButton>
                </InputGroup>

            <div className="hazard-location-button-box1 container-flex vh-30">
              <Button className="hazard-location-search-button" onClick={handleClear}>Clear</Button>
            </div>

            <div className="hazard-location-button-box2 container-flex vh-30">
              <Button className="hazard-location-back-button">Back</Button>
            </div>
          </div>

          {/* Right side box */}
          <div className="hazard-location-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hazard-location-location-box container-flex vh-30">
              <h1 className="hazard-location-heading">{selectedLocationName}</h1>
            </div>

            <div className="hazard-location-possible-main-box container-flex vh-30">
              <div className="row">
                <div className="hazard-location-possible-header-box container-flex">
                  <h2 className="hazard-location-possible-header-heading">Possible Hazards</h2>
                </div>

                {hazards.map((hazard, index) => (
                  <div key={index} className="hazard-location-possible-content-box1 container-flex">
                    <h2 className="hazard-location-possible-content-heading">{hazard.hazardType}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HazardLocation;
