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


const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/buildsearch">Build/Search Page</Link></li>

            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/buildsearch" component={BuildSearch} />
            <Route path="/my_itineraries" component={Itinerary}/>
        </div>
    </Router>
);

export default App;
