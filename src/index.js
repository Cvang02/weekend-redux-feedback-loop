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
const feelingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload;
    }
    return state
} // END OF feelingReducer FUNCTION.

const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload;
    }
    return state
} // END OF understandingReducer FUNCTION.

const supportReducer = (state = [], action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload;
    }
    return state
} // END OF supportReducer FUNCTION.

const commentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload;
    }
    return state
} // END OF supportReducer FUNCTION.


// STOREINSTANCE
const storeInstance = createStore(
    
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
    }),

    applyMiddleware(logger)

) // END OF storeInstance. 

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();