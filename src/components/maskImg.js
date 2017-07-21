import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNewItin } from '../actions';

// let style = {
//     'backgroundImage' : 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg)',
// }

class MaskImg extends Component {
    handleClick() {
        console.log('Clicked!')
        this.props.createNewItin();
    }
    
    render() {
        const { header, location } = this.props;
        return (
            <div className={`jumbotron city-jumbo ${this.props.className}`}>
                <div className="jumbo-content">
                    <h1 className={location === '/discover' ? 'display-4 text-center discover-header' : 'display-4 text-center' }>{header}</h1>
                    <p className="lead">
                        <Link className={location === '/discover' ? 'hide' : 'btn btn-primary btn-lg'} to="/home" role="button" onClick={() => this.handleClick()}>Get Started</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(null, { createNewItin })(MaskImg)