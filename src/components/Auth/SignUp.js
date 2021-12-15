import React,{ useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Col, Form, FormGroup, Label, Input, FormFeedback, Button, InputGroup } from 'reactstrap';
import Advertisement from './Advertisement';

const SignUp = () => {
    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/dashboard");
    }

    const handleShow = (type) => {
        if(type === 'show1'){
            setShow1(!show1);
        }
        else{
            setShow2(!show2);
        }
    }

    return (
        <>
            <Col className="form-login  px-2 py-3 py-lg-5" xs="12" md="5">
                <div className="head2 mt-2 text-center">Create an Account</div>
                <div className="text-center my-2">
                    <Button type="button" color="primary" onClick={()=>history.push("/dashboard")}>Click to see Dashboard</Button>
                </div>
                <Form role="form" onSubmit={handleSubmit} className="mx-2 mx-md-2 mx-lg-5 mt-3">
                    <FormGroup className="position-relative">
                        <Label for="Mobile" className="head3">Enter Mobile</Label>
                        <Input type="number" id="Mobile" name="Mobile" placeholder="Mobile" required/>
                        <FormFeedback tooltip valid>
                            Correct
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label for="Email" className="head3">Enter Email</Label>
                        <Input type="email" id="Email" name="Email" placeholder="Email" required/>
                        <FormFeedback tooltip valid>
                            Correct
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label for="Password" className="head3">Password</Label>
                        <InputGroup>
                            <Input type={show1 ? "text" : "password"} id="Password" name="Password" placeholder="Password" required/>
                            <Button type="button" onClick={()=>handleShow('show1')} outline>
                                {show1 ? "Hide" : "See"}
                            </Button>
                        </InputGroup>
                            <FormFeedback tooltip valid>
                                Correct
                            </FormFeedback>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label for="CPassword" className="head3">Confirm Password</Label>
                        <InputGroup>
                            <Input type={show2 ? "text" : "password"} id="CPassword" name="CPassword" placeholder="Confirm Password" required/>
                            <Button type="button" onClick={()=>handleShow('show2')} outline>
                                {show2 ? "Hide" : "See"}
                            </Button>
                        </InputGroup>
                        <FormFeedback tooltip valid>
                            Correct
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup check>
                        <Input id="Check" name="Check" type="checkbox" />
                        <Label check for="Check" className="head4">
                            I hearby confirm that I am above 18 years old.
                        </Label>
                    </FormGroup>
                    <div>
                        <Button className="mt-4" size="md" color="primary" type="submit">
                            Verify OTP
                        </Button>
                    </div>
                    <div className="mt-3 mb-3 head4">
                        By creating this account, you agree to our <span className="text-primary">Privacy Policy</span> and 
                        <span className="text-primary">Terms of Use</span>.
                    </div>
                </Form>
            </Col>
            <Col className="adv-login p-md-3" xs="12" md="7">
                <Advertisement />
            </Col>
        </>
    )
}
export default SignUp;