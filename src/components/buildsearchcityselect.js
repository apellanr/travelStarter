import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import CitySelect from './city_selector';
import { citySelect } from './city_fxns';
import Footer from './footer';

class BuildSearchCitySelect extends Component {
    render() {
        return(
            <div className="select-container">
                <h2 className="header-text text-center">City Navigator</h2>
                    <Link to="/buildsearch/search/:id"><CitySelect name="Los Angeles" className="la"/></Link>
                    <Link to="/buildsearch/search/:id"><CitySelect name="Madrid" className="mad"/></Link>
                <Footer />
            </div>
        )
    }
}

export default BuildSearchCitySelect;