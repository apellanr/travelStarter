import React from 'react';
import Mask from './maskImg';
import ItineraryList from '../containers/itinerary_list';
import Footer from './footer';

export default (props)=>{
    return(
        <div className="discover-container">
            <Mask header="featured trips" lead="discover your next adventure" className="published-trips" location={props.match.url}/>
            <div>
              <ItineraryList/>
              <Footer />
            </div>
        </div>
    )
}

