import React from "react";
import "./../style/HomePage .css";
import { FaCloudRain } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
// import { FaCloudPrecipitation } from "react-icons/fa";
import { BsFillCloudFog2Fill } from "react-icons/bs";

function HomePage() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........1st container box starts.......... */}
          <div className="main-1st col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="home-page-left-main-container-box container-flex">
              {/* ...left upper container... */}
              <div className="row">
                <div className="home-page-left-upper-container-box container-flex">
                  <div className="row">
                    <div className="home-page-left-upper-date-day-time-location-rain-percentage-container-box container-flex">
                      <div className="home-page-side-button container-flex">
                        <div class="home-page-side-button-triangle"></div>
                      </div>
                      <div className="row">
                        <div className="home-page-left-upper-container-date-box container-flex">
                          <div className="home-page-left-upper-container-date-date-box container-flex">
                            <h1 className="home-page-left-upper-container-date-date">
                              1st of January 2024,
                            </h1>
                          </div>
                          <div className="home-page-left-upper-container-date-day-box container-flex">
                            <h1 className="home-page-left-upper-container-date-day">
                              Friday
                            </h1>
                          </div>
                        </div>
                        <div className="home-page-left-upper-container-time-box container-flex">
                          <h1 className="home-page-left-upper-container-time">
                            01:30 p.m
                          </h1>
                        </div>
                        <div className="home-page-left-upper-container-location-box container-flex">
                          <h1 className="home-page-left-upper-container-location">
                            Jaffna
                          </h1>
                        </div>
                        <div className="home-page-left-upper-container-rain-percentage-box container-flex">
                          <div className="home-page-left-upper-container-rain-percentage-text-box container-flex">
                            <h1 className="home-page-left-upper-container-rain-percentage-text">
                              Chance of rain
                            </h1>
                          </div>
                          <div className="home-page-left-upper-container-rain-percentage-amount-box container-flex">
                            <h1 className="home-page-left-upper-container-rain-percentage-amount">
                              74%
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-page-left-upper-container-heat-rain-icon-box container-flex">
                      <div className="home-page-left-upper-container-heat-icon-box container-flex">
                        <h1 className="home-page-left-upper-container-heat-icon">
                          25&deg;
                        </h1>
                      </div>
                      <div className="row">
                        <div className="home-page-left-upper-container-rain-icon-box container-flex">
                          <FaCloudRain className="home-page-left-upper-container-rain-icon" />
                        </div>
                        <div className="home-page-left-upper-container-rain-message-box container-flex">
                          <h1 className="home-page-left-upper-container-rain-message">
                            Raining
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ;{/* ...left lower container... */}
                <div className="home-page-left-lower-container-box container-flex">
                  <div className="row">
                    <div className="home-page-left-lower-container-wind-precipitation-fog-icon-box container-flex">
                      <div className="row">
                        <div className="home-page-left-lower-container-wind-box container-flex">
                          <FaWind className="home-page-left-lower-container-wind-icon" />
                        </div>
                        <div className="home-page-left-lower-container-wind-message-box container-flex">
                          <h1 className="home-page-left-lower-container-wind-message">
                            8km/h
                          </h1>
                        </div>
                      </div>

                      <div className="row">
                        <div className="home-page-left-lower-container-precipitation-box container-flex">
                          <FaWind className="home-page-left-lower-container-precipitation-icon" />
                        </div>
                        <div className="home-page-left-lower-container-precipitation-message-box container-flex">
                          <h1 className="home-page-left-lower-container-precipitation-message">
                            120 mm
                          </h1>
                        </div>
                      </div>

                      <div className="row">
                        <div className="home-page-left-lower-container-fog-box container-flex">
                          <BsFillCloudFog2Fill className="home-page-left-lower-container-fog-icon" />
                        </div>
                        <div className="home-page-left-lower-container-fog-message-box container-flex">
                          <h1 className="home-page-left-lower-container-fog-message">
                            Low fog
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="home-page-left-lower-container-message-box container-flex">
                      <div className="row">
                        <div className="home-page-left-lower-container-message-box1 container-flex">
                          <h1 className="home-page-left-lower-container-message-box1-text">
                            Low visibility!!
                          </h1>
                        </div>
                        <div className="home-page-left-lower-container-message-box2 container-flex">
                          <h1 className="home-page-left-lower-container-message-box2-text">
                            No possible landslide
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ..........1st container box ended.......... */}

          {/* ..........2nd container box started.......... */}
          <div className="main-2nd col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="home-page-middle-main-container-box container-flex">
              {/* ...middle upper container... */}
              <div className="row">
                <div className="home-page-middle-upper-container-box container-flex">
                  <div className="home-page-middle-upper-container-image-box container-flex">
                    <div className="home-page-middle-upper-container-image-box container-flex"></div>
                  </div>
                </div>
                {/* ...middle lower container... */}
                <div className="home-page-middle-lower-container-box container-flex">
                  <div className="home-page-middle-lower-container-message-box container-flex">
                    <h1 className="home-page-middle-lower-container-message">
                      Elephant detected near the track!!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ..........2nd container box ended.......... */}

          {/* ..........3rd container box starts.......... */}
          <div className="main-3rd col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="home-page-right-main-container-box container-flex vh-30">
              {/* ...right upper container... */}
              <div className="row">
                <div className="home-page-right-upper-container-box container-flex">
                  <div className="row">
                    <div className="home-page-right-upper-container-header-box container-flex">
                      <h1 className="home-page-right-upper-container-header-location">
                        Next location
                      </h1>
                    </div>
                    <div className="home-page-right-upper-container-location-box container-flex">
                      <h1 className="home-page-right-upper-container-location">
                        Anuradhapura
                      </h1>
                    </div>
                    <div className="home-page-right-upper-container-rain-percentage-box container-flex">
                      <div className="home-page-right-upper-container-rain-percentage-text-box container-flex">
                        <h1 className="home-page-right-upper-container-rain-percentage-text">
                          Chance of rain
                        </h1>
                      </div>
                      <div className="home-page-right-upper-container-rain-percentage-amount-box container-flex">
                        <h1 className="home-page-right-upper-container-rain-percentage-amount">
                          74%
                        </h1>
                      </div>
                    </div>
                    <div className="home-page-right-upper-container-heat-rain-icon-box container-flex">
                      <div className="home-page-right-upper-container-heat-icon-box container-flex">
                        <h1 className="home-page-right-upper-container-heat-icon">
                          27&deg;
                        </h1>
                      </div>
                      <div className="row">
                        <div className="home-page-right-upper-container-rain-icon-box container-flex">
                          <FaCloudRain className="home-page-left-upper-container-rain-icon" />
                        </div>
                        <div className="home-page-right-upper-container-rain-message-box container-flex">
                          <h1 className="home-page-right-upper-container-rain-message">
                            Raining
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ...right lower container... */}
                <div className="home-page-right-lower-container-box container-flex">
                  <div className="row">
                    <div className="home-page-right-lower-container-wind-precipitation-fog-icon-box container-flex">
                      <div className="row">
                        <div className="home-page-right-lower-container-wind-box container-flex">
                          <FaWind className="home-page-right-lower-container-wind-icon" />
                        </div>
                        <div className="home-page-right-lower-container-wind-message-box container-flex">
                          <h1 className="home-page-right-lower-container-wind-message">
                            8km/h
                          </h1>
                        </div>
                      </div>

                      <div className="row">
                        <div className="home-page-right-lower-container-precipitation-box container-flex">
                          <FaWind className="home-page-right-lower-container-precipitation-icon" />
                        </div>
                        <div className="home-page-right-lower-container-precipitation-message-box container-flex">
                          <h1 className="home-page-right-lower-container-precipitation-message">
                            120 mm
                          </h1>
                        </div>
                      </div>

                      <div className="row">
                        <div className="home-page-right-lower-container-fog-box container-flex">
                          <BsFillCloudFog2Fill className="home-page-right-lower-container-fog-icon" />
                        </div>
                        <div className="home-page-right-lower-container-fog-message-box container-flex">
                          <h1 className="home-page-right-lower-container-fog-message">
                            Low fog
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="home-page-right-lower-container-message-box container-flex">
                      <div className="row">
                        <div className="home-page-right-lower-container-message-box1 container-flex">
                          <h1 className="home-page-right-lower-container-message-box1-text">
                            Low visibility!!
                          </h1>
                        </div>
                        <div className="home-page-right-lower-container-message-box2 container-flex">
                          <h1 className="home-page-right-lower-container-message-box2-text">
                            No possible landslide
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .......... 3rd container box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
