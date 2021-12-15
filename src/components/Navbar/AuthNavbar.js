import {
  NavbarBrand,
  Navbar,
  NavbarText,
  Container,
  Button
} from "reactstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

const AuthNavbar = () => {
  const history = useHistory();
  const location = useLocation();

  const signupbtn = () =>{
    history.push("/auth/signup");
  }
  const loginbtn = () =>{
    history.push("/auth/login");
  }

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="d-flex justify-content-between align-items-center">
          <NavbarBrand to="/" tag={Link}>
            <span className="brand-name">Subspace.</span>
          </NavbarBrand>

          {location.pathname === "/auth/login" ?
            <NavbarText className="text-white d-none d-sm-block">
              <span className="me-3">New to Subspace ?</span>
              <Button color="primary" size="sm" type="button" onClick={signupbtn}>Sign Up</Button>
            </NavbarText>
            :
            <NavbarText className="text-white d-none d-sm-block">
              <span className="me-3">Already a user ?</span>
              <Button color="primary" size="sm" type="button" onClick={loginbtn}>Log In</Button>
            </NavbarText> }

        </Container>
      </Navbar>
    </>
  );
};

export default AuthNavbar;
