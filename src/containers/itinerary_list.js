import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchItineraries, selectItinerary} from '../actions/index';
import {bindActionCreators} from 'redux';
import ItineraryDetails from './itinerary_detail';
class ItineraryList extends Component {
    componentWillMount(){
        this.props.fetchItineraries();
    }

    renderList(){
        if(!this.props.allItins) {
            return(
                <div></div>
            )
        }
        
        const { itins } = this.props.allItins;

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
        allItins: state.allItins.allItins,
        active: state.itineraries.active
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchItineraries, selectItinerary}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);