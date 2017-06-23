import React from 'react';

const footer = () => {
    return (
        <div id="footer">
        <div className="navbar fixed-bottom navbar-inverse bg-default footer">
            <div className="row" id="bottomNav">
                <div className="col text-center icons"><a href="#" className="icon-text"><i className="material-icons">perm_identity</i></a></div>
                <div className="col text-center icons"><a href="#" className="icon-text"><i className="material-icons">add</i></a></div>
                <div className="col text-center icons"><a href="#" className="icon-text"><i className="material-icons">inbox</i></a></div>
            </div>
        </div>
    </div>
    )
}

export default footer;