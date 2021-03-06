import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//This reducer runs when we are in our Pizza List component
const pizzaNames = (state = [], action) => {
    if (action.type === "SET_PIZZA_LIST") {
        console.log('in pizzanames');
        
        return action.payload;

    }
    return state;
}

//This reducer will run when Order Select Pizza > Pizza List > Pizza Item
const pizzaOrder = (state = [], action) => {
    if (action.type === "ADD_PIZZA") {
        //add pizza to cart.
        const newPayload = action.payload
        newPayload.quantity = 1
        return [...state, newPayload];
    } else if (action.type === "REMOVE_PIZZA") {
        let keptPizza = [];
        let foundFirst = false;
        for (const pizza of state) {

            if (pizza !== action.payload || foundFirst) {
                keptPizza.push(pizza);
            } else {
                foundFirst = true;
            }
            
        }
        return keptPizza
    }
    return state;
}

//This reducer will run when we are in our Order Checkout component
const customerInfo = (state = null, action) => {
    if (action.type === "SUBMIT_CUSTOMER_INFO") {
        //update this too
        return {...state, ...action.payload};
    } else if (action.type === "UPDATE_TOTAL") {
        //the person working on this is free to update it
        return state;
    }
    return state;
}

const totalPrice = (state = 0, action) => {
    if(action.type === "ADD_PIZZA") {
        return state += Number(action.payload.price);
    } else if (action.type === "REMOVE_PIZZA") {
        const newState = state - Number(action.payload.price);
        if (newState >= 0) {
            return newState;
        }
        return state;
    }

    return state;
} 

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        pizzaNames,
        pizzaOrder,
        customerInfo,
        totalPrice,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
