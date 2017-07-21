import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItinerary, savedDrafts} from '../actions/index';
import {bindActionCreators} from 'redux';
import ItineraryDetails from '../containers/itinerary_detail';
import DraftData from '../draftdata';

class ItineraryList extends Component {
    componentWillMount(){
        this.props.savedDrafts();
    }
    renderList(){
        if(!this.props.itineraries) {
            return(
                <div></div>
            )
        }
        
        const { itins } = this.props.itineraries;

        return itins.map((itinerary)=>{
            if(this.props.active && itinerary.name === this.props.active.name ){
                return (
                    <ItineraryDetails key={itinerary.name} itinerary={itinerary}/>
                )
            }
            return(
                <div className="card" style={{width: 20 + 'rem'}} key={itinerary.name} >
                    <img className="card-img-top" src={itinerary.places[0].images[0].source_url} alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">{itinerary.city}</h4>
                        <p className="card-text">{itinerary.name}</p>
                        <a onClick = {()=> this.props.selectItinerary(itinerary)} className="btn btn-primary">select itinerary</a>
                    </div>
                </div>
            );
        });
    }
    render(){
        return(
            <div className="container">
                <h1>My Finished Itineraries</h1>
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
    return bindActionCreators({ selectItinerary, savedDrafts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);