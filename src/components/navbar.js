import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.linkElements = this.props.links.map((link, index) => {
            return <li key={index} className="nav-item"><a href={link.path} className="nav-link">{link.title}</a></li>
        });
    }

    render() {
        console.log('navbar component', this.props);
        
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand">{this.props.brand}</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.linkElements}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;

//<li key={index} className="nav-item"><a href={link.path} className="nav-link">{link.title}</a></li>