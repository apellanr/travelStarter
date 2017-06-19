import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import './app.css';
import Home from './home';
import BuildSearch from './buildsearch';
import Itinerary from './my_itineraries';
import FindItin from './discover';

const nav_links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Destinations',
        path:'/destinations'
    },
    {
        title: 'Blog',
        path: '/wanderlosters'
    },
    {
        title: 'About',
        path: '/about'
    }
];

const App = () => (
    <Router>
        <div>
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buildsearch">Build/Search Page</Link></li>
                    <li><Link to="/discover">Find Itinerary</Link></li>
                </ul>

                <Route exact path="/" component={Home} />
                <Route path="/buildsearch" component={BuildSearch} />
                <Route path="/my_itineraries" component={Itinerary}/>
                <Route path="/discover" component={FindItin} />
            </div>
        </div>
    </Router>
);

export default App;
