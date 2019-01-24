import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
    }

    // Runs after the page loads
    componentDidMount() {
        this.getOrders();
    }

    // Request all previous orders from the server (via route /api/order GET)
    getOrders = () => {
        axios({
            method:'GET',
            url:'/api/order',
         }).then( (response) => {    
            this.setState({
                orders: response.data,
            });
        }).catch((error) => {
            const errorMessage = `Server Error: ${error}`;
            alert(errorMessage);
            console.log(errorMessage);
        })
    }

    // Display this component
    render() {
        return (
            <div>
                {JSON.stringify(this.state.orders)}
                <p>[AdminOrders]</p>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});

export default connect(mapReduxStoreToProps)(AdminOrders);