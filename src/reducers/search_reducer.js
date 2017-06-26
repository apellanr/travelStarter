import actions from '../actions/types';

const DEFAULT_STATE = {
    poi: {}
}

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case actions.FETCH_PLACES:
            return { ...state, poi: action.payload };
        default:
            return state;
    }
}