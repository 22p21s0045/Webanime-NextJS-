import React from "react";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import { authen } from "./Store/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import Swal from "sweetalert2";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
export default function Navbars() {
  const [user, setuser] = useState(null);
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
          title: "Login Success",
          text: "Welcome " + user.displayName,
          icon: "success",
          confirmButtonText: "OK",
        });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const logout = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        authen.signOut();
        setuser(null);
        console.log("heheboi");
      }
    });
  };

  console.log(user);
  if (user !== null) {
    return (
      <div>
        <Navbar className="color-nav" variant="dark">
          <Container >
            <Navbar.Brand href="/" className="color-fonts">
              GO Anime
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-dark">
                เเนะนํา
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-dark">
                Pricing
              </Nav.Link>
            </Nav>
          </Container>
          <Nav className="navbar-right">
            <div style={{ paddingRight: 55, paddingBottom: 1 }}>
              <Stack>
                <h7>{user.displayName}</h7>
                <Avatar src = {user.photoURL}/>
              </Stack>
            </div>
          </Nav>
          <Nav className="navbar-right">
            <div style={{ paddingRight: 50 }}>
              <MDBBtn float="right" onClick={logout}>
                SIGNOUT
              </MDBBtn>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar className="color-nav" variant="dark">
          <Container>
            <Navbar.Brand href="/" className="color-fonts">
              GO Anime
              <img
              src = 'https://www.img.in.th/images/485f5e71635dd9ed329031f92020c3a8.gif'
              height="50" width="100"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-dark">
                เเนะนํา
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-dark">
                Pricing
              </Nav.Link>
            </Nav>
          </Container>
          <Nav className="navbar-right">
            <div style={{ paddingRight: 55, paddingBottom: 1 }}>
              <Stack>
                <h7>Guest</h7>
                <Avatar />
              </Stack>
            </div>
          </Nav>
          <Nav className="navbar-right">
            <div style={{ paddingRight: 50 }}>
              <MDBBtn float="right" onClick={signIn}>
                LOGIN
              </MDBBtn>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
