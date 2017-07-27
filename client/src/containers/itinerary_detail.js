import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { itineraryClose } from '../actions/index';
class ItineraryDetail extends Component {
    list() {
        return this.props.itinerary.places.map((place) => {
            return <li key={place.id} className="list-group-item">{place.name}</li>
        })
    }
    
    render() {
        if(!this.props.itinerary) {
            return(
                <div>Loading...</div>
            )
        }
        
        return(
            <div className="card" style={{width: 20 + 'rem'}}>
                <img className="card-img-top" src={this.props.itinerary.places[0].images[0].source_url} alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">{this.props.itinerary.city}</h4>
                    <p className="card-text">{this.props.itinerary.name}</p>
                </div>
                 <ul className="list-group list-group-flush">
                    {this.list()}
                </ul> 
                <div className="card-block">
                    <a onClick = {()=> this.props.itineraryClose()} type="button" className="close" aria-label="Close"><span style={{padding: '0 5px'}} aria-hidden="true">&times;</span></a>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        itinerary: state.active.active
    };
}
export default connect(mapStateToProps, {itineraryClose})(ItineraryDetail);