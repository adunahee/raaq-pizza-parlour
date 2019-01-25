import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeliveryInfo extends Component {
    render() {
        return (
                <div>
                    <p>{this.props.reduxStore.customerInfo.customer_name}</p>
                    <p>{this.props.reduxStore.customerInfo.street_address}</p>
                    <p>{this.props.reduxStore.customerInfo.city}</p>
                    <p>{this.props.reduxStore.customerInfo.type}</p>
                </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => { return { reduxStore: reduxStore } }
export default connect(mapStoreToProps)(DeliveryInfo);