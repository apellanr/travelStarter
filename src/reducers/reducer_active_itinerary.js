export default function(state= { active: null }, action) {
    switch(action.type){
        case 'ITINERARY_SELECTED':
            return {...state, active: action.payload};
    }

    return state;
}