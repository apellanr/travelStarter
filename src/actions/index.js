import axios from 'axios';
import actions from './types';

const BASE_URL = 'https://www.triposo.com/api/v2/poi.json?location_id=';
const END_URL = '&count=40&fields=all&tag_labels=';
const ACCOUNT = '2FYB6LGM';
const TOKEN = 'lkuszx1cd7srxliatwfs0dalj0blvyis';
const ROOT_URL = 'https://thawing-beyond-11730.herokuapp.com/itin';

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

export function fetchItineraries() {
    return (dispatch) => {
        const user = {
            userId: 1
        };
        const request = axios.get(`${ROOT_URL}/all`).then((resp) => {
            dispatch({
                type: 'ALL_ITINERARIES',
                payload: resp
            })
        });
    }
}

export function selectItinerary(itinerary){
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

export function addPlace(place, id) {
    const request = axios.patch(`${ROOT_URL}/${id}`, place);
    
    return{
        type: actions.ADD_PLACE,
        payload: request
    }
}

export function removePlace(place, id) {
    const request = axios.patch(`${ROOT_URL}/item/${id}`, place)

    return{
        type: actions.DELETE_PLACE,
        payload: request
    }
}

export function viewCurrentDraft(id) {
    const request = axios.get(`${ROOT_URL}/${id}`);
    
    return{
        type: actions.VIEW_CURRENT_DRAFT,
        payload: request
    }
}

export function editTitleTrue() {
    return{
        type: actions.EDIT_TITLE_TRUE,
        payload: true
    }
}

export function editTitleFalse() {
    return{
        type: actions.EDIT_TITLE_FALSE,
        payload: false
    }
}

export function editTitleText(val, id) {
    const request = axios.patch(`${ROOT_URL}/title/${id}`, val);

    return{
        type: actions.EDIT_TITLE,
        payload: request
    }
}

export function publishItin(itin, id) {
    const request = axios.patch(`${ROOT_URL}/publish/${id}`, itin);

    return{
        type: actions.PUBLISH_ITIN,
        payload: request
    }
}

export function createNewItin() {
    return(dispatch) => {
        const user = { userId: 1};
        const request = axios.post(`${ROOT_URL}/create`, user).then((resp) => {
            dispatch({
                type: actions.CREATE_ITIN,
                payload: resp
            })
        })
    }
}

export function setNewItin(id) {
    const userObj = {data: {_id: id}};

    return{
        type: actions.SET_ITIN,
        payload: userObj
    }
}

export function deleteItin(id) {
    const request = axios.delete(`${ROOT_URL}/${id}`);

    return{
        type: actions.DELETE_ITIN,
        payload: request
    }
}

function sendError(error){
    return {
        type: actions.ERROR,
        error
    }
}

export function getDrafts(){
    return (dispatch) => {
        const user = {
            userId: 1
        };
        const request = axios.post(`${ROOT_URL}/mine/drafts`, user).then((resp) => {
            dispatch({
                type: 'SAVED_DRAFTS',
                payload: resp
            })
        });
    }
}

export function savedDrafts(){
    return (dispatch) => {
        const user = {
            userId: 1
        };
        const request = axios.post(`${ROOT_URL}/mine/done`, user).then((resp) => {
            dispatch({
                type: 'SAVED_DRAFTS',
                payload: resp
            })
        });
    }
}