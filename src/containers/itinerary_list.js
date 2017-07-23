import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItinerary} from '../actions/index';
import {bindActionCreators} from 'redux';
import ItineraryDetails from './itinerary_detail';
class ItineraryList extends Component {
    renderList(){
        return this.props.itineraries.map((itinerary)=>{
            if(this.props.active && itinerary.name === this.props.active.name ){
                return (
                    <ItineraryDetails key={itinerary.name} itinerary={itinerary}/>
                )
            }
            return(
                <div className="card" style={{width: 20 + 'rem'}} key={itinerary.name} >
                    <img className="card-img-top" src={itinerary.image} alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">{itinerary.place}</h4>
                        <p className="card-text">{itinerary.name}</p>
                        <a onClick = {()=> this.props.selectItinerary(itinerary)} className="btn btn-primary">View Trip</a>
                    </div>
                </div>
            );
        });
    }
    render(){
        console.log('Active:', this.props.active);
        return(
            <div className="card-grid">
                {this.renderList()}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        itineraries: state.itineraries.list,
        active: state.itineraries.active
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectItinerary}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);