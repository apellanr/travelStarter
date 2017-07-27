import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItinerary, savedDrafts, deleteItin } from '../actions/index';
import {bindActionCreators} from 'redux';
import ItineraryDetails from '../containers/itinerary_detail';
import Footer from './footer';
import noImg from '../components/imgs/no_image_thumb.gif';

class ItineraryList extends Component {
    componentWillMount(){
        this.props.savedDrafts();
    }

    handleDelete(id) {
        this.props.deleteItin(id).then(() => {
            this.props.savedDrafts()
        })
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

            const image = !itinerary.places[0] ? noImg : itinerary.places[0].images[0].source_url

            return(
                <div className="card" style={{width: 20 + 'rem'}} key={itinerary._id} >
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">{itinerary.city}</h4>
                        <p className="card-text">{itinerary.name}</p>
                        <a onClick = {()=> this.props.selectItinerary(itinerary)} className="btn btn-primary">View Trip</a>
                        <button className='btn btn-danger' onClick={() => {this.handleDelete(itinerary._id)}}>Delete</button>
                    </div>
                </div>
            );
        });
    }
    render(){
        return(
            <div>
                <div className='jumbotron city-jumbo mytrips-hero'>
                    <div className="jumbo-content">
                        <h1 style={{textShadow: '1px 1px 1px black'}} className='display-4 text-center'>my trips</h1>
                    </div>
                </div>
                <div className="card-grid">
                    {this.renderList()}
                </div>
                <Footer />
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
    return bindActionCreators({ selectItinerary, savedDrafts, deleteItin }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);