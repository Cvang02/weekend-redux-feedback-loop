import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// REDUCERS + OUR ACTIONS
const feedbackReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK') {
        console.log('what is:', action.payload);
        return action.payload;
    }
    return state
} // END OF feedbackReducer FUNCTION.

// STOREINSTANCE
const storeInstance = createStore(
    
    combineReducers({
        feedbackReducer
    }),

    applyMiddleware(logger)

) // END OF storeInstance. 

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
