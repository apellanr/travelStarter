import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './imgs/travelstarter_logo.png';

const SideNav = (props) => {
    console.log('sideNav props:', props);
    return (
        <div className={props.className} >
            <img className="img-fluid sideNav-img"src={Logo} alt="Logo"/>
            <hr />
            {/*<img src={WorldImg} className="img-fluid sideNav-img" alt="Responsive image"/>*/}
            <div className="container sideNav-links" onClick={ () => props.closeNav()}>
                <Link to="/">Home</Link>
                <Link to="/buildsearch/cityselect">Destinations</Link>
                <Link to="/my_itineraries">My Trips</Link>
                <Link to="#">About</Link>
            </div>
        </div>
    )
}

export default SideNav;