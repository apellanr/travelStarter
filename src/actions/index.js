import axios from 'axios';
import actions from './types';

const BASE_URL = 'https://www.triposo.com/api/v2/poi.json?location_id=';
const END_URL = '&count=40&fields=all&tag_labels=';
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
        payload: null
    }
}

export function currentPage(arr) {
    return{
        type: actions.CURRENT_PAGE,
        payload: arr
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
    const request = axios.post('http://travelstarter.world/prototypes/phpFileStructureProto/api.php?action=createItem', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: val
    }).then((resp) => console.log(resp));
    return{
        type: actions.ADD_PLACE,
        payload: request
    }
}