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
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a onClick = {()=> this.props.selectItinerary(itinerary)} className="btn btn-primary">select itinerary</a>
                    </div>
                </div>

            );
        });
    }


    render(){
        console.log('Active:', this.props.active);
        return(
            <div className="container">
                {this.renderList()}
            </div>
        )
    }
}


function mapStateToProps(state){
    //whatever is returned will show up as props inside BookList
    return{
        itineraries: state.itineraries.list,
        active: state.itineraries.active
    };
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectItinerary}, dispatch)
}

//promotes BookList from component to container -- it needs to know about this new dispatch method, selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);