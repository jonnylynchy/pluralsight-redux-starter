import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

// middle ware
// for more middleware and how to apply:
// https://github.com/coryhouse/react-slingshot
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		// () - invoke reduxImmutableStateInvariant
		applyMiddleware(reduxImmutableStateInvariant())
	);
}
