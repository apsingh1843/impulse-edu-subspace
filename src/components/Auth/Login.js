import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Col, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import Advertisement from './Advertisement';

const Login = () => {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/dashboard");
    }

    return (
        <>
            <Col className="form-login px-2 py-3 py-lg-5" xs="12" md="5">
                <div className="head2 mt-4 text-center">Log in to Dashboard</div>
                <div className="text-center my-2">
                    <Button type="button" size="sm" color="primary" onClick={()=>history.push("/dashboard")}>Click to see Dashboard</Button>
                </div>
                <div className="text-center my-1 d-sm-none">
                   New to Subspace ?{" "}
                   <Link to="/auth/signup" style={{"text-decoration":"none"}}>Sign Up</Link>
                </div>
                <Form role="form" onSubmit={handleSubmit} className="mx-2 mx-md-2 mx-lg-5 mt-3">
                    <FormGroup className="position-relative">
                        <Label for="Email" className="head3">Your Email</Label>
                        <Input type="email" id="Email" name="Email" placeholder="Email" required/>
                        <FormFeedback tooltip valid>
                            Sweet! that name is available
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label for="Password" className="head3">Password</Label>
                        <Input type="password" id="Password" name="Password" placeholder="Password" required/>
                        <FormFeedback tooltip valid>
                            Sweet! that name is available
                        </FormFeedback>
                    </FormGroup>
                    <div className="mt-3 d-flex justify-content-end text-primary">
                        Forgot Password ?
                    </div>
                    <div className="text-center">
                        <Button className="mt-4" size="md" color="primary" type="submit">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Col>
            <Col className="adv-login p-md-3" xs="12" md="7">
                <Advertisement />
            </Col>
        </>
    )
}
export default Login;