import React from 'react';
import Mask from './maskImg';
import ItineraryList from '../containers/itinerary_list';
import Footer from './footer';

export default ()=>{
    return(
        <div className="discover-container">
            <h1>Find Itinerary Page</h1>
            <Mask />
      
            <div>
              <ItineraryList/>
              <Footer />
            </div>
        </div>
    )
}

