import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import searchReducer from './search_reducer';
import ItinerariesReducer from './reducer_itineraries';


const rootReducer = combineReducers({
    form: formReducer,
    itineraries: ItinerariesReducer
});

export default rootReducer;