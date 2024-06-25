
import "./../style/UpdateLPDetails.css";
import Button from "react-bootstrap/Button";

function UpdateLPDetails() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="LPheader-box container-flex w-100 vh-30">
              <div className="LPtitle">header</div>
            </div>

            <div className="LPinput-details-main-box container-flex vh-30">
              <div className="row">
                <div className="LPinput1-box container-flex"></div>
                <div className="LPinput2-box container-flex"></div>
                <div className="LPinput2-box container-flex"></div>
                <div className="LPinput2-box container-flex"></div>
                <div className="LPinput2-box container-flex"></div>
              </div>
            </div>

            <div className="LPbutton-box button-box container-flex">
              <Button>Secondary</Button>{" "}
            </div>
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="LPoutput-details-main-box container-flex vh-30">
              <div className="row">
                <div className="right-LPoutput-title-box container-flex"></div>
                <div className="right-LPoutput-box container-flex"></div>
                <div className="right-LPoutput-box container-flex"></div>
                <div className="right-LPoutput-box container-flex"></div>
                <div className="right-LPoutput-box container-flex"></div>
                <div className="right-LPoutput-box container-flex"></div>
              </div>
            </div>
          </div>
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default UpdateLPDetails;
