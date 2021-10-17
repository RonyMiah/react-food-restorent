import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from "../../Image/logo2.png"
import "./Header.css"

const Header = () => {
    return (
        <div >
            <Navbar>
  <Container>
    <Navbar.Brand href="#home"><img className=" text-start logo" src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <i className="fas fa-shopping-cart"></i>
      </Navbar.Text>

      <Navbar.Text className="ms-5">
         <a className="ms-3 text-decoration-none fw-bold  btn btn-warning" href="#login">LogIn</a>
         <a className="ms-3 text-decoration-none fw-bold btn btn-info" href="#login">SignIn</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;