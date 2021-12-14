import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from './components/Layout/AuthLayout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
