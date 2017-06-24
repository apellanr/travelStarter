import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import Footer from './footer';

class BuildSearchCitySelect extends Component {
    render() {
        return(
            <div>
                <h1>Pick A City</h1>
                <ul>
                    <li><Link to="/buildsearch/search/:id">Madrid</Link></li>
                    <li><Link to="/buildsearch/search/:id">Orange County</Link></li>
                </ul>

                <Footer />
            </div>
        )
    }
}

export default BuildSearchCitySelect;