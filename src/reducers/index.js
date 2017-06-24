import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    cityplaces: searchReducer
})

export default rootReducer;