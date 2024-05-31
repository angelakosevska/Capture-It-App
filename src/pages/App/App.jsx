import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { UserProvider, useUser } from '../../components/UserContext';
import Header from '../../components/Header';
import Login from '../LogInPage';
import Home from '../HomePage';
import Profile from '../../' /*nemame profile??? */
import Event from '../EventPage';

const user = {
    firstName: "John",
    lastName: "Doe"
};

const App = () => {
    const isLoggedIn = true;

    return (
        <Router>
            <div>
                {isLoggedIn ? <Header user={user} /> : null}
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/profile" component={Profile} /> /*nemame profilche oopsie */
                    <Route path="/event" component={Event} />
                    <Redirect from="/" to="/Login " />
                </Switch>
            </div>
        </Router>
    );
};

export default App;