import React,{ useState } from 'react';
import {NavLink as NavLinkRRD, useHistory} from 'react-router-dom';
import {Container, Button, Navbar, Nav, NavbarBrand, NavLink, NavItem, Badge, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {List} from '../Sidebar/DashSidebar';
const user = {
  name: "Groww90",
  avatar: "../assets/icons/avatar.png",
  notifications: 20
}
  
const DashNavbar = () => {
  const[modal, setModal] = useState(false);
  const[active, setActive] = useState('Home');
  const history = useHistory();

  const selectActive = (name) =>{
      setActive(name);
  }

  const openModal = () =>{
    setModal(!modal);
  }

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-light bg-white" expand="xs">
        <Container className="d-flex justify-content-between align-items-center px-md-5">
          <button className="btn d-block d-md-none" type="button" 
            onClick={openModal} outline>
            <span className="navbar-toggler-icon" />
          </button>
          <NavbarBrand>
            <span className="head2">Dashboard</span>
          </NavbarBrand>

          <Nav navbar>
            <NavItem className="me-1 me-lg-4">
              <img src="../assets/icons/search.png" alt="Search" />
            </NavItem>
            <NavItem className="me-1 me-lg-4">
              <img src="../assets/icons/more.png" alt="More" />
            </NavItem>
            <NavItem className="me-1 me-lg-4 d-none d-md-block">
              <Badge color="primary" pill>
                <img src="../assets/icons/bell.png" alt="notifications" />
                {" "}{user.notifications}
              </Badge>
            </NavItem>
            <NavItem className="d-none d-md-block">
              <img src={user.avatar} alt="User" />
              <span className="ms-2">{user.name}</span>
            </NavItem>
          </Nav> 

          <Modal isOpen={modal} toggle={openModal}>
            <ModalHeader toggle={openModal}>
              <Nav navbar className="d-flex flex-row align-items-center">
                <NavItem className="me-5">
                  <Badge color="primary" pill>
                    <img src="../assets/icons/bell.png" alt="notifications" />
                    {" "}{user.notifications}
                  </Badge>
                </NavItem>
                <NavItem>
                  <img src={user.avatar} alt="User" />
                  <span className="ms-2">{user.name}</span>
                </NavItem>
              </Nav>
            </ModalHeader>
            <ModalBody>
              <Nav navbar className="mt-3 mb-3">
                {List.map((item, index) => {
                    return(
                        <NavItem key={index}>
                            <NavLink to={item.route} className={active===item.name? "active-modal" : "unactive-modal"}
                              tag={NavLinkRRD} onClick={()=>selectActive(item.name)}>
                                <img src={item.icon} alt=" " height="15px" width="15px" />
                                <span className="modal-text">{item.name}</span>
                            </NavLink>
                        </NavItem>
                    )
                })}
              </Nav>
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=> history.push("/auth")} type="button" color="primary">Log Out</Button>
            </ModalFooter>
          </Modal>

        </Container>
      </Navbar>
    </>
  );
};

export default DashNavbar;
  