import axios from 'axios';
import actions from './types';

const BASE_URL = 'https://www.triposo.com/api/v2/poi.json?location_id=';
const END_URL = '&count=25&fields=all&tag_labels=';
const ACCOUNT = '2FYB6LGM';
const TOKEN = 'lkuszx1cd7srxliatwfs0dalj0blvyis';

export function fetchPlaces(city, query) {
    window.location.query = `c=${city}&q=${query}`;
    const request = axios.get(`${BASE_URL}${city}${END_URL}${query}`, {
        params: {
            account: ACCOUNT,
            token: TOKEN
        }
    })

    return{
        type: actions.FETCH_PLACES,
        payload: request
    }
}

export function clearPlaces() {
    return{
        type: actions.CLEAR_PLACES,
        payload: {}
    }
}

export function currentPage(num) {
    return{
        type: actions.CURRENT_PAGE,
        payload: num
    }
}

export function selectItinerary(itinerary){
    console.log('itinerary in action creator:', itinerary);
    return{
        type: 'ITINERARY_SELECTED',
        payload: itinerary
    }
}
