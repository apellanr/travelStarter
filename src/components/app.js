import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import './app.css';
import Home from './home';
import BuildSearch from './buildsearch';
import FindItin from './discover';


const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/buildsearch">Build/Search Page</Link></li>
                <li><Link to="/discover">Find Itinerary</Link></li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/buildsearch" component={BuildSearch} />
            <Route path="/discover" component={FindItin} />
        </div>
    </Router>
);

export default App;
