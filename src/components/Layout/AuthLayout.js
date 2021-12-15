import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import AuthNavbar from "../Navbar/AuthNavbar";

const Auth = (props) => {
  return (
    <>
      <div className="wrapper-auth">
        <AuthNavbar />
          <Container className="mt-5 pb-5 d-flex justify-content-center">
              <Row className="box-login">
                  <Switch>
                      <Route path="/auth/login" render={(props) => <Login {...props} />} />
                      <Route path="/auth/signup" render={(props) => <SignUp {...props} />} />
                      <Redirect from="*" to="/auth/login" />
                  </Switch>
              </Row>
          </Container>
      </div>
    </>
  );
};

export default Auth;
