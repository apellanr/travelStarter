import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Link,
} from 'react-router-dom';
import { clearPlaces } from '../actions';
import Footer from './footer';

class BuildSearchCitySelect extends Component {
    componentDidMount() {
        this.props.clearPlaces();
    }

    render() {
        return(
            <div>
                <h1>Pick A City</h1>
                <ul>
                    <li><Link to="/buildsearch/search/Madrid">Madrid</Link></li>
                    <li><Link to="/buildsearch/search/Los_Angeles">Los Angeles</Link></li>
                </ul>

                <Footer />
            </div>
        )
    }
}

export default connect(null, { clearPlaces })(BuildSearchCitySelect);