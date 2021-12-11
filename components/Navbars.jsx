import React from 'react'
import {Navbar, Nav, NavItem,Container} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
export default function Navbars() {
    return (
        <div>
            
            <Navbar className="color-nav" variant="dark">
    <Container>
    <Navbar.Brand href="/" className="color-fonts">GO Anime</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" className = 'text-dark' >Home</Nav.Link>
      <Nav.Link href="#features" className = 'text-dark'>เเนะนํา</Nav.Link>
      <Nav.Link href="#pricing" className = 'text-dark'>Pricing</Nav.Link>
     
      
      
      
      

    </Nav>
    </Container>
    <Nav className="navbar-right">
      <div style = {{paddingRight:50}}>
      <MDBBtn float = 'right'style = {{}}>LOGIN</MDBBtn>
      </div>

      </Nav>
  </Navbar>
        </div>
    )
}
