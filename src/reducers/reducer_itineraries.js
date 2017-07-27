const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, action) {
    switch(action.type){
        case 'ALL_ITINERARIES':
            return {...state, allItins: action.payload.data}
        case 'ITINERARY_SELECTED':
            return {...state, active: action.payload};
        case 'CLOSE_ITINERARY':
            return {...state, active: null};
        case 'GET_DRAFTS':
            return { ...state, list: action.payload.data};
        case 'SAVED_DRAFTS':
            return {...state, list: action.payload.data};
        default:
            return state;
    }
}