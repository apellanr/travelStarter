import actions from '../actions/types';

const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case actions.VIEW_CURRENT_DRAFT:
            return {...state, currentDraft: action.payload.data};
        default:
            return state;
    };
};