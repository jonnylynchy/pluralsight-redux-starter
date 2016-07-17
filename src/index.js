/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
// Provider:
// Higher order component that attaches store to react container components
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// Web Pack imports styles
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Could pass initial state here:
// good place if you're rehydrating state from server or local storage, pass here
// firebase ref?
const store = configureStore();

// application entry point
// provider wraps app to "provide" store to react container components
render (
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
