import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from './components/Layout/AuthLayout';
import DashLayout from './components/Layout/DashLayout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/dashboard" render={(props) => <DashLayout {...props} />} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
