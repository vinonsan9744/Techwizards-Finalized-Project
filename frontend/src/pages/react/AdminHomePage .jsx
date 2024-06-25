/* eslint-disable no-unused-vars */
import React from "react";
import "./../style/AdminHomePage .css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hazardimage from '../assets/hazard.jpeg';

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
          <Card style={{ width: '100%',height:'100%',borderWidth:5,}} className="AdminHomePage-inserted-card">
            <Card.Img variant="top" src={hazardimage} className="AdminHomePage-inserted-card-box-image"/>
              <Card.Body>
              <Card.Title className="AdminHomePage-inserted-card-box-title">Approve Hazard</Card.Title>
              <Card.Text className="AdminHomePage-inserted-card-box-text">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
              <Button className="AdminHomePage-inserted-card-box-button">Go somewhere</Button>
           </Card.Body>
          </Card>
        </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3 AdminHomePage-card-box-2">
        <div className="AdminHomePage-inserted-card-box-2"> 
        <Card style={{ width: '100%',height:'100%',borderWidth:5,}} className="AdminHomePage-inserted-card">
            <Card.Img variant="top" src={hazardimage} className="AdminHomePage-inserted-card-box-image"/>
              <Card.Body>
              <Card.Title className="AdminHomePage-inserted-card-box-title">Approve Hazard</Card.Title>
              <Card.Text className="AdminHomePage-inserted-card-box-text">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
              <Button className="AdminHomePage-inserted-card-box-button">Go somewhere</Button>
           </Card.Body>
          </Card>
        </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3 AdminHomePage-card-box-3">
        <div className="AdminHomePage-inserted-card-box-3"> 
        <Card style={{ width: '100%',height:'100%',borderWidth:5,}} className="AdminHomePage-inserted-card">
            <Card.Img variant="top" src={hazardimage} className="AdminHomePage-inserted-card-box-image"/>
              <Card.Body>
              <Card.Title className="AdminHomePage-inserted-card-box-title">Approve Hazard</Card.Title>
              <Card.Text className="AdminHomePage-inserted-card-box-text">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
              <Button className="AdminHomePage-inserted-card-box-button">Go somewhere</Button>
           </Card.Body>
          </Card>
        </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3 AdminHomePage-card-box-4">
        <div className="AdminHomePage-inserted-card-box-4"> 
        <Card style={{ width: '100%',height:'100%',borderWidth:5,}} className="AdminHomePage-inserted-card">
            <Card.Img variant="top" src={hazardimage} className="AdminHomePage-inserted-card-box-image"/>
              <Card.Body>
              <Card.Title className="AdminHomePage-inserted-card-box-title">Approve Hazard</Card.Title>
              <Card.Text className="AdminHomePage-inserted-card-box-text">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
              <Button className="AdminHomePage-inserted-card-box-button">Go somewhere</Button>
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
