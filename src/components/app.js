import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import './app.css';
import Home from './home';
import BuildSearch from './buildsearch';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/buildsearch">Build/Search Page</Link></li>

            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/buildsearch" component={BuildSearch} />
        </div>
    </Router>
);

export default App;
