import axios from 'axios';

export function selectItinerary(itinerary){
    console.log('itinerary in action creator:', itinerary);
    return{
        type: 'ITINERARY_SELECTED',
        payload: itinerary
    }
}
