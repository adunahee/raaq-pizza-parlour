import React from 'react';
import { Component } from 'react';
import DeliveryInfo from './../OrderCheckout/DeliveryInfo';
import CheckoutTable from './../OrderCheckout/CheckoutTable';

class OrderCheckout extends Component {
    render() {
        return(
            <div>
                <h2>Step 3: Confirm Checkout</h2>
                <DeliveryInfo />
                <CheckoutTable />
                <button>Submit Order</button>
            </div>
        )
    }
}

export default OrderCheckout;