import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import searchReducer from './search_reducer';
import ItinerariesReducer from './reducer_itineraries';
import authReducer from './auth_reducer';
import currentDraftReducer from './draft_reducer';
import editTitleReducer from './edit_reducer';
import createItin from './create_itin_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    itineraries: ItinerariesReducer,
    cityplaces: searchReducer,
    currentPage: searchReducer,
    auth: authReducer,
    currentDraft: currentDraftReducer,
    editTitle: editTitleReducer,
    itinId: createItin,
    active: ItinerariesReducer,
    allItins: ItinerariesReducer
});

export default rootReducer;