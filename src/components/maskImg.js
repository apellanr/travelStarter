import React, { Component }from 'react';
import { Link } from 'react-router-dom';

// let style = {
//     'backgroundImage' : 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg)',
// }

export default props => {

    const { header, location } = props;
    return (
        <div className={`jumbotron city-jumbo ${props.className}`}>
            <div className="jumbo-content">
                <h1 className={location === '/discover' ? 'display-4 text-center discover-header' : 'display-4 text-center' }>{header}</h1>
                <p className="lead">
                    <Link className={location === '/discover' ? 'hide' : 'btn btn-primary btn-lg'} to="/home" role="button">Get Started</Link>
                </p>
            </div>
        </div>
    )
}
