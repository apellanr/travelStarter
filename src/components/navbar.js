import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';
import SideNav from './sidenav';


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.linkElements = this.props.links.map((link, index) => {
            return <li key={index} className="nav-item"><a href={link.path} className="nav-link">{link.title}</a></li>
        });

        this.state = {
            shiftIn : false
        }
    }

    menuIconClick() {
        console.log('burger clicked');
        this.setState({
            shiftIn: !this.state.open
        });
    }

    render() {        
        return (
            <div className="nav-container">
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
                    <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <Icon handleClick={() => this.menuIconClick()}/>
                    </button>
                    <Link to="/" className="navbar-brand text-center">{this.props.brand}</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.linkElements}
                        </ul>
                    </div>
                    <SideNav visible={this.state.shiftIn}/>
                </nav>
            </div>
            
        )
    }
}

export default Navbar;

//<li key={index} className="nav-item"><a href={link.path} className="nav-link">{link.title}</a></li>