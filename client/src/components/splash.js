import React from 'react';
import MaskImg from './maskImg';

const Splash = (props) =>  {
    return(
        <div>
            <div className="nav-container">
                <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-default">
                    <a to="/home" className="navbar-brand splash-brand">travelStarter</a>
                </nav>
            </div>
            <MaskImg className="splash-img" id="splash-lead" header="Experience Travel" />
        </div>
    )
}

export default Splash;