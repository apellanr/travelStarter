import axios from 'axios';
import actions from './types';

const BASE_URL = 'https://www.triposo.com/api/v2/poi.json?location_id=';
const END_URL = '&count=40&fields=all&tag_labels=';
const ACCOUNT = '2FYB6LGM';
const TOKEN = 'lkuszx1cd7srxliatwfs0dalj0blvyis';
const ROOT_URL = 'https://thawing-beyond-11730.herokuapp.com/itin';

const LOGIN_URL = 'http://localhost:8888/travel_final_project/prototypes/facebookLogin/fb_login_data/fb_user_info.php';

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

export function addPlace(place, id) {
    const request = axios.patch(`${ROOT_URL}/${id}`, place).then((resp) => console.log(resp));
    
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

export function signUp({email, password}) {
    return (dispatch) => {
        axios.post(`${LOGIN_URL}/signup`, { email, password }).then((resp) => {
            console.log('response from signup:', resp);

            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: action.SIGN_UP,
            })
        }).catch( error => {
            console.log('error', error.response.data.error);
            dispatch(sendError(error.response.data.error));
        });
    }    
}

export function signIn({ email, password }) {
    return (dispatch) => {
        axios.post(`${LOGIN_URL}/signin`, { email, password}).then((resp) => {
            console.log('response from signin:', resp);

            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: actions.SIGN_IN,
            })
        }).catch( error => {
                
        })
    }
}

export function facebookSignin(facebookUser) {
    return (dispatch) => {
        axios.post(`${LOGIN_URL}`, facebookUser).then((resp) => {
            console.log('response from signin:', resp);

            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: actions.SIGN_IN,
            })
        }).catch( error => {
                console.log('There was an error:', error);

                dispatch({ type: 'idk'});
        })
    }
}

export function facebookSignup(facebookUser) {
    return (dispatch) => {
        axios.post(`${LOGIN_URL}`, facebookUser).then((resp) => {
            console.log('response from signup:', resp);

            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: actions.SIGN_UP,
            })
        }).catch( error => {
                console.log('There was an error:', error);

                dispatch({ type: 'idk'});
        })
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