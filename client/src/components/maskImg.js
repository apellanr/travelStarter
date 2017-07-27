import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNewItin } from '../actions';

class MaskImg extends Component {
    handleClick() {
        this.props.createNewItin();
    }
    
    render() {
        const { header, location } = this.props;
        return (
            <div className={`jumbotron city-jumbo ${this.props.className}`}>
                <div className="jumbo-content">
                    <h1 style={{textShadow: '1px 1px 1px black'}} className={location === '/discover' ? 'display-4 text-center discover-header' : 'display-4 text-center' }>{header}</h1>
                    <p style={{textShadow: '1px 1px 1px black'}} className={location === '/discover' ? 'hide' : 'lead text-center'} id={`${this.props.id}`}>travelStarter is a place where you can discover past trips or build your own trip from scratch.</p>
                    <p className="lead">
                            <Link className={location === '/discover' ? 'hide' : 'btn btn-primary btn-lg'} to="/home" role="button" onClick={() => this.handleClick()}>Get Started</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(null, { createNewItin })(MaskImg)