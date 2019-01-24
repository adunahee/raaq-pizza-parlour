import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import AdminOrders from '../AdminOrders/AdminOrders.js';
import Header from '../Header/Header.js';
import OrderCustomerInfo from './../OrderCustomerInfo/OrderCustomerInfo.js';
import OrderSelectPizza from '../OrderSelectPizza/OrderSelectPizza.js'

//Remeber to import your components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* HasRouter */}
        <Router>
          <div>
            {/* write in your order select pizza link */}
            <Link to="/order-select-pizza">Order Select Pizza</Link>
            <Route exact path="/order-select-pizza" component={OrderSelectPizza} />
            

            {/* write in your order customer info link */}
            <Link to="/order-customer-info">Order Customer Info</Link>
            {/* write in your order checkout link */}

            {/* write in your admin order link */}

            {/* Routes */}

            {/* write in your order select pizza route */}
            <Route exact path="/order-customer-info" component={OrderCustomerInfo} />
            {/* write in your order customer info route */}

            {/* write in your order checkout route */}

            {/* write in your admin order route */}
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
