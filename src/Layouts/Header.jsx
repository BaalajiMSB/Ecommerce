import { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { BsFillCartFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../App";

export default function Header() {
  const { cartProduct } = useContext(CartContext); 
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top"  className="bg-light shadow">
      <Container>
        <Navbar.Brand as={Link} to='/' className="fw-bold">STAR-MEK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">
              <Button as={Link} to="/carts" variant="light">
                <BsFillCartFill />
                <span className="mx-2">Carts</span>
                <Badge bg="danger">{cartProduct.length}</Badge>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
