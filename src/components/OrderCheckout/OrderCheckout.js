import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DeliveryInfo from './../OrderCheckout/DeliveryInfo';
import CheckoutTable from './../OrderCheckout/CheckoutTable';

class OrderCheckout extends Component {

    submitOrder = () => {
        const order = { ...this.props.reduxStore.customerInfo, total: this.props.reduxStore.totalPrice, pizzas: this.props.reduxStore.pizzaOrder};
        console.log(order);
        
        axios({
            method: 'POST',
            url: '/api/order',
            data: order
        }).then((response) => {
            this.props.history.push('/');
        }).catch((error) => {
            const errorMessage = `Server error: ${error}`;
            alert(errorMessage);
            console.log(errorMessage);
        });


        // street_address,
        //     city,
        //     zip,
        //     type,
        //     total,
        //     pizzas("order_id", "pizza_id", "quantity")
    }

    render() {
        return(
            <div>
                <h2>Step 3: Confirm Checkout</h2>
                <DeliveryInfo />
                <CheckoutTable />
                <button onClick={this.submitOrder}>Submit Order</button>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(OrderCheckout);