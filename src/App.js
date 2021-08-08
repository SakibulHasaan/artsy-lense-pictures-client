import { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './App.css';
import CheckoutService from './components/CheckoutService/CheckoutService';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ViewService from './components/ViewService.js/ViewService';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/checkout/:id">
                <CheckoutService></CheckoutService>
            </PrivateRoute>
            <Route path="/view/:id" component={ViewService} />
          </Switch>
        </Router>
      </div>

    </UserContext.Provider>
  );
}

export default App;
