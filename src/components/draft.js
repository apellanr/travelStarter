import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItinerary, getDrafts} from '../actions/index';
import {bindActionCreators} from 'redux';
import ItineraryDetails from '../containers/itinerary_detail';
import DraftData from '../draftdata';

class ItineraryList extends Component {
    componentWillMount(){
        this.props.getDrafts();
    }
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
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a onClick = {()=> this.props.selectItinerary(itinerary)} className="btn btn-primary">select itinerary</a>
                    </div>
                </div>
            );
        });
    }
    render(){
        console.log('Active:', this.props);
        return(
            <div className="container">
                {this.renderList()}
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('The state is:', state);
    return{
        itineraries: state.itineraries.list,
        active: state.itineraries.active
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectItinerary, getDrafts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);