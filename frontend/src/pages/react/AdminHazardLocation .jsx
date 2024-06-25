/* eslint-disable no-unused-vars */
import React from "react";
import "./../style/AdminHazardLocation.css";
import { Form, Button } from "react-bootstrap";


function AdminHazardLocation() {
  const [selectedMethod, setSelectedMethod] = React.useState('card'); // Using React.useState

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

            <div className="admin-hazard-location-left-heading-box container-flex ">
              <input
                type="text"
                placeholder="Enter the location"
                className="admin-hazard-location-location-textbox"
              />
            </div>



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
            <label className={`admin-hazard-location-method ${selectedMethod === 'bitcoin' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="bitcoin"
                    checked={selectedMethod === 'bitcoin'}
                    onChange={() => setSelectedMethod('bitcoin')}
                    className='admin-hazard-location-radio-button'

                />
                <span className="admin-hazard-location-method-text">Other</span>
            </label>
        </div>
              
            </div>

            <div className="admin-hazard-location-left-button-box1 container-flex">
              <button className="admin-hazard-location-update-button">Update</button>
            </div>

            <div className="admin-hazard-location-left-button-box2 container-flex">
              <button className="admin-hazard-location-back-button">Back</button>
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
