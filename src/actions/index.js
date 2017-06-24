import axios from 'axios';

export function selectItinerary(itinerary){
    return{
        type: 'ITINERARY_SELECTED',
        payload: itinerary
    }
}