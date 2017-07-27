import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlace } from '../actions';
import noImg from './imgs/no_image_thumb.gif'

class Card extends Component {
    handleClick() {
        const place = {data: {
            userId: 1,
            place: this.props.info
        }}
        this.props.addPlace(place, this.props.itinId);
    }

    render() {
        return (
            <div>
                <div className="card" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" 
                        src={ this.props.img } 
                        alt="Card image cap" 
                        onError={ (event) => event.target.setAttribute("src", noImg) }
                    />
                    <div className="card-block">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.text}</p>
                        <p className="card-text">{this.props.tags}</p>
                        <button className="btn btn-primary" onClick={() => this.handleClick()}>Add to Itinerary</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        itinId: state.itinId.itinId.data._id
    }
}

export default connect(mapStateToProps, { addPlace })(Card);