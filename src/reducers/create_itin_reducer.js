import actions from '../actions/types';

const DEFAULT_STATE = {itinId: {data: {_id: '59711c094adbf400115f2902'}}};
// const DEFAULT_STATE = {itinId: {data: {_id: null}}};

export default function(state = DEFAULT_STATE, action) {
    switch(action.type){
        case actions.CREATE_ITIN:
            console.log('from reducer', action.payload);
            return {...state, itinId: action.payload};
        default:
            return state;
    }
}