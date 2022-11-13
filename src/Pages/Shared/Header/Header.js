import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "./images/Cooking_icon.png";
import "./Header.css";
import { MDBBtn } from "mdb-react-ui-kit";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Image src={image} style={{ height: 40, width: 40 }}></Image>
        &nbsp;&nbsp;
        <Link className="link fs-4" to="/">
          Hungry
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FaBars></FaBars>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            {/* <Link className="link" to="courses">
              Courses
            </Link> */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="link" to="/services">
              Meals
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="link" to="/blog">
              Blog
            </Link>
          </Nav>

          <Nav className="text-center">
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  {/* <span>{user?.displayName}</span> */}
                  {user?.displayName ? (
                    <>{isHovering && <span>{user?.displayName}</span>}</>
                  ) : (
                    <>{isHovering && <span>Name Null</span>}</>
                  )}
                  &nbsp;
                  <>
                    <Link className="link" to="/addServices">
                      Add Meals
                    </Link>
                  </>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <>
                    <Link className="link" to="/myreviews">
                      My Reviews
                    </Link>
                  </>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <>
                    {/* <Button variant="light" onClick={handleLogOut}>
                      Logout
                    </Button> */}
                    <Link className="link" onClick={handleLogOut}>
                      Logout
                    </Link>
                  </>
                </>
              ) : (
                <>
                  <Link className="link" to="/login">
                    Login
                  </Link>
                  {/* <Link to="/signup">Signup</Link> */}
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <div>
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  ></Image>
                </div>
              ) : (
                <FaUser
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                ></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
