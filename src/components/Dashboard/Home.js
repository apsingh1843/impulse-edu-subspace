import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Input } from 'reactstrap';

const Home = () =>{
    return (
        <div className="p-2 p-md-1 p-lg-4">
            <Container>
                <div className="text1">Welcome to your Dashbaoard, Grow90</div>
                <Row className="px-3 py-5 bg-white w-100 mt-4 home-box1">
                    <Col xs="12">
                        <div className="text1"><b>Your are just steps away from enabling live payments</b></div>
                        <div className="text1 my-3">Submit a few KYC details and start accepting payments from your customers</div>
                        <div className="d-flex flex-row justify-content-between align-items-center my-4 w-75 px-3">
                            <img src="../assets/icons/complete.png" alt=" " />
                            <img src="../assets/icons/path.png" alt=" " height="6px"/>
                            <img src="../assets/icons/incomplete.png" alt=" " />
                            <img src="../assets/icons/path.png" alt=" " height="6px"/>
                            <img src="../assets/icons/incomplete.png" alt=" " />
                        </div>
                    </Col>
                    <Col xs="12" lg="4">
                        <div className="text1">Contact Details</div>
                    </Col>
                    <Col xs="12" lg="4">
                        <div className="text1">Live payments and Settlements</div>
                        <p className="head4 mb-3">Submit a few KYC details to start accepting payments and receive 
                            settlement in your account</p>
                        <Button type="button" color="primary">Submit KYC</Button>
                    </Col>
                    <Col xs="12" lg="4">
                        <div className="text1">Account Activation</div>
                        <p className="head4">Get all the KYC details approved to complete the account activation</p>
                    </Col>
                </Row>
                <Row className="p-3 bg-white w-100 my-4 home-box1">
                    <Col xs="12" md="6" className="d-flex flex-row justify-content-between align-items-center">
                        <Input id="daySelect" name="daySelect" size="sm" type="select" className="w-25">
                            <option> Past 30 Days </option>
                            <option> Past 15 Days </option>
                            <option> Past 6 Months </option>
                            <option> Past 1 Year </option>                   
                        </Input>
                        <Input id="date1" name="date1" placeholder="DD/MM/YYYY" size="sm" type="date" className="w-25" />
                        <span>to</span>
                        <Input id="date2" name="date2" placeholder="DD/MM/YYYY" size="sm" type="date" className="w-25" />
                    </Col>
                    <Col xs="12" md="6" className="text-center mt-4 mt-md-0">
                        <span>Current Balance :  Rs. 2.2L</span>
                        <span className="mx-2">|</span>
                        <Link to="/dashboard/settlement" style={{"text-decoration": "none"}}> View Settlements</Link>
                    </Col>
                </Row>

                <Row className="p-0 w-100 my-4 justify-content-between align-items-center">
                    <Col className="home-box2 bg-white p-3" xs="12" md="3">
                        <div>Payment Volume</div>
                        <div><b>Rs. 6.72L</b></div>
                    </Col>
                    <Col className="home-box2 bg-white p-3 my-3 my-md-0" xs="12" md="3">
                        <div>Number of Payments</div>
                        <div><b>Rs. 2.12K</b></div>
                    </Col>
                    <Col className="home-box2 bg-white p-3" xs="12" md="3">
                        <div>Number of Refunds</div>
                        <div><b>44</b></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
