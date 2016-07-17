import * as types from '../actions/actionTypes';

// A reducer is a function that accepts a state and an action and returns a new state
export default function courseReducer(state = [], action) {
	// switch is most common, but series of if/else statements, lookup object/tables, etc.
	// as long as it returns a new copy of state from action
	switch(action.type){
		case types.CREATE_COURSE:
			// spread operator
			// this takes in state array, breaks it up into single values via spread
			// then appends a copy of the course
			// and returns new array (following redux pattern of immutable data)
			return [...state,
				Object.assign({}, action.course)
			];

		default:
			// if action isn't represented, just return state
			return state;
	}
}
