import axios from 'axios';
import actions from './types';

const BASE_URL = 'https://www.triposo.com/api/v2/poi.json?location_id=';
const END_URL = '&count=50&fields=all&tag_labels=';
const ACCOUNT = '2FYB6LGM';
const TOKEN = 'lkuszx1cd7srxliatwfs0dalj0blvyis';

const phpCall = axios.create('', {
    headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:3000'}
});

export function fetchPlaces(city, query) {
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
    return {
        type: 'ITINERARY_SELECTED',
        payload: itinerary
    }
}

export function itineraryClose(){
    return{
        type: 'CLOSE_ITINERARY',
        payload: {}
    }
}

export function addPlace(val) {
    const request = phpCall.get('http://localhost:8888/LFZ_Bootcamp/C4.17_travel_starter/prototypes/phpFileStructureProto/api.php?action=readItinerary').then((resp) => {
        console.log(resp)
    });

    return{
        type: actions.ADD_PLACE,
        payload: request
    }

}