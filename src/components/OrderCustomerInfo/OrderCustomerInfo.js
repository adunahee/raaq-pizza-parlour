import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class OrderCustomerInfo extends Component {
    constructor() {
        super();
        this.state = {
            customer_name: '',
        }
    }
    handleChange = (event) => {
        console.log(event.target.id);
        let key = event.target.id;
        console.log(event.target.value);
        let value = event.target.value;
        if (key === 'pickupId') {
            this.setState({
                type: 'Pick Up',
            })
        }
        else if (key === 'deliveryId') {
            this.setState({
                type: "Delivery",
            })
        } else {
            this.setState({
                [key]: value,
            })
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        const action = { type: 'SUBMIT_CUSTOMER_INFO', payload: this.state };
        this.props.dispatch(action);
        //submitting to the reducer
        this.props.history.push('/order-checkout');
        
    }
    

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="customer_name">
                    Name
                </label>
                <input type="text"
                    id="customer_name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    required>
                </input>
                <br />

                <label htmlFor="street_address">
                    Address
                </label>
                <input type="text"
                    id="street_address"
                    placeholder="Address"
                    onChange={this.handleChange}
                    required>
                </input>
                <br />

                <label htmlFor="city">
                    City
                </label>
                <input type="text"
                    id="city"
                    placeholder="City"
                    onChange={this.handleChange}
                    required>
                </input>
                <br />

                <label htmlFor="zip">
                    Zip
                </label>
                <input type="number"
                    id="zip"
                    placeholder="Zip"
                    onChange={this.handleChange}
                    required>
                </input>

                <input type="radio"
                    id="pickupId"
                    name="orderType"
                    onChange={this.handleChange}
                    required>
                </input>
                <label htmlFor="pickupId">
                    Pick up
                </label>

                <input type="radio"
                    id="deliveryId"
                    name="orderType"
                    onChange={this.handleChange}>
                </input>
                <label htmlFor="deliveryId">
                    Delivery
                </label>
                <button type ="submit">Submit</button>

            </form>
        )
    }
}

export default connect()(OrderCustomerInfo);