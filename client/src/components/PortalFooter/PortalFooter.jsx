import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  NavLink,
  MDBIcon,
  MDBTooltip,
} from "mdbreact";
import "./style.css"

const Footer = () => {
  return (
    <MDBFooter
      color="white"
      className="font-small darken-3 pt-0 z-depth-1-half footer"
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-2">
            <div className="mb-5 flex-center">
            <MDBTooltip material placement="top">
              <NavLink exact={true} to="/portal/dashboard" activeClassName="activeClass">
                <MDBIcon
                  icon="chart-pie"
                  className="black-text mr-md-5 mr-3 fa-2x"
                  title="Smiley face"
                ></MDBIcon>
              </NavLink><div>Dashboard</div>
              </MDBTooltip>
              {/* <MDBTooltip material placement="top">
              <NavLink exact={true} to="/portal/profile" activeClassName="activeClass">
                <MDBIcon
                  icon="user"
                  className="black-text mr-md-5 mr-3 fa-2x"
                ></MDBIcon>
              </NavLink><div>Profile</div>
              </MDBTooltip> */}
              <MDBTooltip material placement="top">
              <NavLink exact={true} to="/portal/volunteer" activeClassName="activeClass">
                <MDBIcon
                  icon="table"
                  className="black-text mr-md-5 mr-3 fa-2x"
                ></MDBIcon>
              </NavLink><div>Volunteers</div>
              </MDBTooltip>
              <MDBTooltip material placement="top">
              <NavLink exact={true} to="/portal/message" activeClassName="activeClass">
                <MDBIcon
                  icon="sms"
                  className="black-text mr-md-5 mr-3 fa-2x"
                ></MDBIcon>
              </NavLink><div>Messaging</div>
              </MDBTooltip>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="elegant-color-dark text-center py-3">
        <MDBContainer fluid >
        <h6 className="copy-text">&copy; {new Date().getFullYear()} Copyright:
           Conveyance</h6>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
