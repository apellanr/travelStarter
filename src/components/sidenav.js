import React from 'react';
import WorldImg from './imgs/world.png';
import Globe from './imgs/globe-icon.png';

const SideNav = (props) => {
    return (
        <div className={props.className}>
            <div className="row sidenav-header">
                
            </div>
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