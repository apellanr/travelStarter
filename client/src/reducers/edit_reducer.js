import actions from '../actions/types';

const DEFAULT_STATE = false;

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case actions.EDIT_TITLE_TRUE:
            return {...state, editTitle: action.payload};
        case actions.EDIT_TITLE_FALSE:
            return {...state, editTitle: action.payload};
        default:
            return state;
    };
};