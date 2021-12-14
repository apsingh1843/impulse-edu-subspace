import React from 'react';
import { Col, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import Advertisement from './Advertisement';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Col className="form-login px-2 py-3 py-lg-5" xs="12" md="5">
                <div className="head2 mt-4 text-center">Log in to Dashboard</div>
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