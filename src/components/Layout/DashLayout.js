import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashSidebar from '../Sidebar/DashSidebar';
import DashNavbar from '../Navbar/DashNavbar';
import Home from '../Dashboard/Home';
import Account from '../Dashboard/Account';
import Customers from '../Dashboard/Customers';
import Disputes from '../Dashboard/Disputes';
import Offers from '../Dashboard/Offers';
import Refunds from '../Dashboard/Refunds';
import Rewards from '../Dashboard/Rewards';
import Settings from '../Dashboard/Settings';
import Settlement from '../Dashboard/Settlement';
import Subscription from '../Dashboard/Subscription';
import Transactions from '../Dashboard/Transactions';

const DashLayout = () =>{
    return (
        <div className="d-md-flex flex-row">
           <DashSidebar />
           <div className="wrapper-dash">
                <DashNavbar />
                <Switch>
                        <Route path="/dashboard/home" component={Home} />
                        <Route path="/dashboard/transactions" component={Transactions} />
                        <Route path="/dashboard/subscription" component={Subscription} />
                        <Route path="/dashboard/settlement" component={Settlement} />
                        <Route path="/dashboard/disputes" component={Disputes} />
                        <Route path="/dashboard/refunds" component={Refunds} />
                        <Route path="/dashboard/customers" component={Customers} />
                        <Route path="/dashboard/offers" component={Offers} />
                        <Route path="/dashboard/rewards" component={Rewards} />
                        <Route path="/dashboard/account" component={Account} />
                        <Route path="/dashboard/settings" component={Settings} />
                        <Redirect from="*" to="/dashboard/home" />
                </Switch>
           </div>
        </div>
    )
}

export default DashLayout;
