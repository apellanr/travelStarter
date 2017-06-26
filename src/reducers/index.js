import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ItinerariesReducer from './reducer_itineraries';

const rootReducer = combineReducers({
    form: formReducer,
    itineraries: ItinerariesReducer

});

export default rootReducer;