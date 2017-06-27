import React from 'react';
import Mask from './maskImg';
import ItineraryList from '../containers/itinerary_list';
import Footer from './footer';

export default ()=>{
    return(
        <div className="discover-container">
            <Mask header="Featured Itineraries"/>
            <div>
              <ItineraryList/>
              <Footer />
            </div>
        </div>
    )
}

