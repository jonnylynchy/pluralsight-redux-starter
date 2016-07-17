import {combineReducers} from 'redux';
// courses is an alias for the only exported function
import courses from './courseReducer';

// This function is used to combine all reducers in the application
// just pass in what you want to combine
const rootReducer = combineReducers({
	courses: courses
});

export default rootReducer;
