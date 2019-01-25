import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import AdminOrders from '../AdminOrders/AdminOrders.js';
import Header from '../Header/Header.js';
import OrderCustomerInfo from './../OrderCustomerInfo/OrderCustomerInfo.js';
import OrderSelectPizza from '../OrderSelectPizza/OrderSelectPizza.js'
import OrderCheckout from './../OrderCheckout/OrderCheckout.js';

//Remeber to import your components

class App extends Component {
  render() {
    return (
      <div className="App">

       

        {/* HasRouter */}
        <Router>
          <div>
            {/* Links */}
            <Link to="/order-select-pizza">Order Select Pizza</Link>
            <Link to="/order-customer-info">Order Customer Info</Link>
            <Link to="/order-checkout">Confirm Checkout</Link>

            {/* Routes */}
            <Route path='/' component={Header} />
            <Route exact path="/order-select-pizza" component={OrderSelectPizza} />
            <Route exact path="/order-customer-info" component={OrderCustomerInfo} />
            <Route exact path="/order-checkout" component={OrderCheckout} />
            <Route exact path="/admin" component={AdminOrders} />
          </div>
        </Router>


        {/* <br />
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p> */}
      </div>
    );
  }
}

export default App;
