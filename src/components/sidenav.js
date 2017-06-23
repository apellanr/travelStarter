import React from 'react';
import WorldImg from './imgs/world.png';

const SideNav = (props) => {
    return (
        <div className={props.className}>
            <img src={WorldImg} className="img-fluid sideNav-img" alt="Responsive image"/>
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