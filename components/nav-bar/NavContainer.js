import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavContainer() {
  return (
    <>
      <Navbar
        className="nav-custom"
        bsPrefix="navbar-custom"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Navbar.Brand href="#flightandhotel">
          <img
            className="logo-travelook-home"
            src="/assets/img/Travelook_logo_primary.png"
            width="200px"
            alt="imglogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#flightandhotel">Flight + Hotel</Nav.Link>
            <Nav.Link href="#hotelsandhome">Hotels & Homes</Nav.Link>
            <Nav.Link href="#flights">Flights</Nav.Link>
            <Nav.Link href="#todaydeal">Today’s deals</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavContainer;
