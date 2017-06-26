import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { itineraryClose } from '../actions/index';

class ItineraryDetail extends Component {
    render() {

        return(
            <div className="card" style={{width: 20 + 'rem'}}>
                <img className="card-img-top" src={this.props.itinerary.image} alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">{this.props.itinerary.place}</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.itinerary.locations[0]}</li>
                    <li className="list-group-item">{this.props.itinerary.locations[1]}</li>
                    <li className="list-group-item">{this.props.itinerary.locations[2]}</li>
                </ul>
                <div className="card-block">
                    <a href="#" className="card-link">Card link</a>
                    <a onClick = {()=> this.props.itineraryClose()} type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        itinerary: state.activeItinerary
    };
}

export default connect(null, {itineraryClose})(ItineraryDetail);