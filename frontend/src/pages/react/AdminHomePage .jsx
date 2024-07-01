/* eslint-disable no-unused-vars */
import React from "react";
import "./../style/AdminHomePage .css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hazardlocationimage from "../assets/HazardLocation.jpg";
import approvehazardimage from "../assets/ApproveHazard.jpg";
import locomotivepilotimage from "../assets/LocomotivePilot.jpg";
import updatehazardimage from "../assets/UpdateHazard.jpg";

function AdminHomePage() {
  return (
    <>
      <div className="AdminHomePage-left-container-flex ">
        <div className="row">
          <div className="col-12 AdminHomePage-heading-box vh-20">
            <h1 className="AdminHomePage-heading-title ">Admin Home Page</h1>
          </div>
        </div>
      </div>

      <div className="AdminHomePage-right-container-flex ">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 AdminHomePage-card-box-1">
            <div className="AdminHomePage-inserted-card-box-1">
              <Card
                style={{ width: "100%", height: "100%", borderWidth: 5 }}
                className="AdminHomePage-inserted-card"
              >
                <Card.Img
                  variant="top"
                  src={approvehazardimage}
                  className="AdminHomePage-inserted-card-box-image"
                />
                <Card.Body>
                  <Card.Title className="AdminHomePage-inserted-card-box-title">
                    Approve Hazard
                  </Card.Title>
                  <Card.Text className="AdminHomePage-inserted-card-box-text">
                    This will display the newly reported hazards and details of
                    the reporting locomotive pilot.
                  </Card.Text>
                  <Button className="AdminHomePage-inserted-card-box-button">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 AdminHomePage-card-box-2">
            <div className="AdminHomePage-inserted-card-box-2">
              <Card
                style={{ width: "100%", height: "100%", borderWidth: 5 }}
                className="AdminHomePage-inserted-card"
              >
                <Card.Img
                  variant="top"
                  src={hazardlocationimage}
                  className="AdminHomePage-inserted-card-box-image"
                />
                <Card.Body>
                  <Card.Title className="AdminHomePage-inserted-card-box-title">
                    Hazard location
                  </Card.Title>
                  <Card.Text className="AdminHomePage-inserted-card-box-text">
                    The administrative officer can update hazards here, which
                    locomotive pilot fails to report.
                  </Card.Text>
                  <Button className="AdminHomePage-inserted-card-box-button">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 AdminHomePage-card-box-3">
            <div className="AdminHomePage-inserted-card-box-3">
              <Card
                style={{ width: "100%", height: "100%", borderWidth: 5 }}
                className="AdminHomePage-inserted-card"
              >
                <Card.Img
                  variant="top"
                  src={locomotivepilotimage}
                  className="AdminHomePage-inserted-card-box-image"
                />
                <Card.Body>
                  <Card.Title className="AdminHomePage-inserted-card-box-title">
                    Locomotive pilot Details
                  </Card.Title>
                  <Card.Text className="AdminHomePage-inserted-card-box-text">
                    Administrative officers can use this interface to update
                    locomotive pilot details.
                  </Card.Text>
                  <Button className="AdminHomePage-inserted-card-box-button">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 AdminHomePage-card-box-4">
            <div className="AdminHomePage-inserted-card-box-4">
              <Card
                style={{ width: "100%", height: "100%", borderWidth: 5 }}
                className="AdminHomePage-inserted-card"
              >
                <Card.Img
                  variant="top"
                  src={updatehazardimage}
                  className="AdminHomePage-inserted-card-box-image"
                />
                <Card.Body>
                  <Card.Title className="AdminHomePage-inserted-card-box-title">
                    Admin approve hazard location
                  </Card.Title>
                  <Card.Text className="AdminHomePage-inserted-card-box-text">
                    Admin can approve and update hazards which is reported by
                    locomotive pilots.
                  </Card.Text>
                  <Button className="AdminHomePage-inserted-card-box-button">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
