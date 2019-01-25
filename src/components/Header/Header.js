import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    getTotal = () => {
        const path = this.props.history.location.pathname;
        if (path === '/order-select-pizza' || path === '/order-customer-info') {
            const total = Number(this.props.reduxStore.totalPrice).toFixed(2);
            if (total > 0) {
                return `Total: $${total}`;
            }
        }
    } 

    render() {
        return (
            <header>
                <h1>RAAQ Pizza!</h1>
                <h3>{this.getTotal()}</h3>
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Header);