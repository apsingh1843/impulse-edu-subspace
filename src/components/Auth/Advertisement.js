import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Advertisement = () => {
    return (
        <Container>
            <Row className="text-center">
                <Col xs="12" className="mb-3">
                    <div className="head2">Why choose SubSpace?</div>
                    <div className="head3 mt-2">2000+ businesses trust their payments with SubSpace</div>
                </Col>
            </Row>
            <Row className="text-center p-2">                
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/netflix.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/prime.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/hotstar.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/sony.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/zee.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/voot.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/sun.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/aha.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/imb.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/toi.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/b.png" alt=" " />
                </Col>
                <Col xs="3" className="p-2">
                    <img className="adv-img" src="../assets/images/k.png" alt=" " />
                </Col>
            </Row>
            <Row className="text-center mt-3">
                <Col xs="12" className="p-2">
                    <div className="head4">Need help? We are just a click away. <b>Contact Us</b></div>
                </Col>
            </Row>
        </Container>
    )
}

export default Advertisement;
