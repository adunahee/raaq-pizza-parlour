import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import OrderCustomerInfo from './../OrderCustomerInfo/OrderCustomerInfo.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//Remeber to import your components

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>

        {/* HasRouter */}
        <Router>
          <div>
            {/* write in your order select pizza link */}

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
          </div>
        </Router>
        

        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
      </div>
    );
  }
}

export default App;
