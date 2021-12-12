import React from 'react'
import {Navbar, Nav, NavItem,Container} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { authen } from './Store/firebase';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import Swal from 'sweetalert2'
export default function Navbars() {
  const [user,setuser] = useState(null);
  const provider = new GoogleAuthProvider();
  const signIn = () => {
    signInWithPopup(authen, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setuser(user);
    Swal.fire({
      title: 'Login Success',
      text: 'Welcome '+user.displayName,
      icon: 'success',
      confirmButtonText: 'OK'
    })
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  
  console.log(user);
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
      <MDBBtn float = 'right' onClick = {signIn}>LOGIN</MDBBtn>
      </div>

      </Nav>
  </Navbar>
        </div>
    )
}
