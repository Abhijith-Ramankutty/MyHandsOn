import React, { Component } from 'react';
import {
    BrowserRouter,
    NavLink,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';

import HomeScreen from './HomeScreen';
import MyTripsScreen from './MyTripsScreen';
import MySelectionScreen from './MySelectionScreen';
import MyProfileScreen from './MyProfileScreen';
import PlanATripScreen from './PlanATripScreen';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                    <div>
                        <ul className="nav">
                            <li><NavLink exact to="/">Homepage</NavLink></li>
                            <li><NavLink to="/planATrip">Plan a Trip</NavLink></li>
                            <li><NavLink to="/myTrips">My Trips</NavLink></li>
                            <li><NavLink to="/mySelection">My Selection</NavLink></li>
                            <li><NavLink to="/myProfile">My Profile</NavLink></li>
                        </ul>
                        <Switch>
                            <Route path="/planATrip" component={PlanATripScreen}/>
                            <Route path="/myTrips" component={MyTripsScreen}/>
                            <Route path="/mySelection" component={MySelectionScreen}/>
                            <Route path="/myProfile" component={MyProfileScreen}/>
                            <Route path="/" component={HomeScreen}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
