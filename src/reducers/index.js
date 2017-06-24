import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ItinerariesReducer from './reducer_itineraries';
import ActiveItinerary  from './reducer_active_itinerary';

const rootReducer = combineReducers({
    form: formReducer,
    itineraries: ItinerariesReducer,
    activeItinerary: ActiveItinerary

});

export default rootReducer;