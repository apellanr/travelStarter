import React from 'react';
import Logo from './imgs/travelstarter_logo.png';

const SideNav = (props) => {
    return (
        <div className={props.className}>
            <img className="img-fluid sideNav-img"src={Logo} alt="Logo"/>
            <hr />
            {/*<img src={WorldImg} className="img-fluid sideNav-img" alt="Responsive image"/>*/}
            <div className="container sideNav-links">
            <a href="#">Home</a>
            <a href="#">Destinations</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            </div>
        </div>
    )
}

export default SideNav;