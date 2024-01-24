import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/navbar.css";

const NavBar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#fc9670" }}
      expand="lg"
      className="bgcolor">
      <Container style={{ marginLeft: "38%" }}>
        <Navbar.Brand href="/#">Food-Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-around">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/#about">About Us</Nav.Link>

            <Nav.Link href="/#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
