import React, {useState} from 'react';
import { NavLink as NavLinkRRD, useHistory } from 'react-router-dom';
import { Nav, Navbar, Container, NavbarBrand,NavItem, NavLink, Button } from 'reactstrap';

export const List = [
    {
        name: 'Home',
        icon: '../assets/icons/home.png',
        route: '/dashboard/home'
    },
    {
        name: 'Transactions',
        icon: '../assets/icons/transactions.png',
        route: '/dashboard/transactions'
    },
    {
        name: 'Subscription Plan',
        icon: '../assets/icons/subscription.png',
        route: '/dashboard/subscription'
    },
    {
        name: 'Settlement',
        icon: '../assets/icons/settlement.png',
        route: '/dashboard/settlement'
    },
    {
        name: 'Disputes',
        icon: '../assets/icons/disputes.png',
        route: '/dashboard/disputes'
    },
    {
        name: 'Refunds',
        icon: '../assets/icons/refunds.png',
        route: '/dashboard/refunds'
    },
    {
        name: 'Customers',
        icon: '../assets/icons/customers.png',
        route: '/dashboard/customers'
    },
    {
        name: 'Offers',
        icon: '../assets/icons/offers.png',
        route: '/dashboard/offers'
    },
    {
        name: 'Rewards',
        icon: '../assets/icons/rewards.png',
        route: '/dashboard/rewards'
    },
    {
        name: 'My Account',
        icon: '../assets/icons/account.png',
        route: '/dashboard/account'
    },
    {
        name: 'Settings',
        icon: '../assets/icons/settings.png',
        route: '/dashboard/settings'
    }
]

const DashSidebar = () =>{
    const[active, setActive] = useState('Home');
    const history = useHistory();

    const selectActive = (name) =>{
        setActive(name);
    }

    return (
        <>
            <Navbar className="navbar-vertical fixed-left navbar-dark sidebar d-none d-md-block">
                <Container fluid>
                    <NavbarBrand className="mt-3">
                        <span className="brand-name">Subspace.</span>
                    </NavbarBrand>
                    <Nav navbar className="mt-5 mb-3">
                        {List.map((item, index) => {
                            return(
                                <NavItem key={index}>
                                    <NavLink to={item.route} className={active===item.name? "active" : "unactive"}
                                      tag={NavLinkRRD} onClick={()=>selectActive(item.name)}>
                                        <img src={item.icon} alt=" " height="15px" width="15px" />
                                        <span className="sidebar-text">{item.name}</span>
                                    </NavLink>
                                </NavItem>
                            )
                        })}
                        <NavItem className="mt-5 mb-3">
                            <Button onClick={()=> history.push("/auth")} type="button" color="primary">Log Out</Button>
                        </NavItem>
                    </Nav>                       
                </Container>
            </Navbar>
        </>
    )
}

export default DashSidebar;
