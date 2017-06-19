import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import Build from './build';
import Search from './search';
import Footer from './footer';

class BuildSearch extends Component {
    render() {
        return(
            <div>
                <h1>Build/Search Page</h1>
                <ul>
                    <li><Link to="/buildsearch/build">Build</Link></li>
                    <li><Link to="/buildsearch/search">Search</Link></li>
                </ul>

                <Route path="/buildsearch/build" component={Build}/>
                <Route path="/buildsearch/search" component={Search}/>
                <Footer />
            </div>
        )
    }
}

export default BuildSearch;

