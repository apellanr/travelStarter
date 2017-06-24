import React from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import Home from './home';
import Search from './search';
import FindItin from './discover';

const footer = () => {
    return (
        <div id="footer">
            <div className="navbar fixed-bottom navbar-inverse bg-default footer">
                <div className="row" id="bottomNav">
                    <div className="col text-center icons"><Link to="/" className="icon-text"><i className="material-icons">perm_identity</i></Link></div>
                    <div className="col text-center icons"><Link to="/buildsearch/search" className="icon-text"><i className="material-icons">add</i></Link></div>
                    <div className="col text-center icons"><a href="#" className="icon-text"><i className="material-icons">inbox</i></a></div>
                </div>
            </div>
        </div>
    )
}

export default footer;