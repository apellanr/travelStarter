export default function(state=null, action) {
    switch(action.type){
        case 'ITINERARY_SELECTED':
            return action.payload;

    }

    return state;
}