import React, { Component } from 'react';

class AdminTableRow extends Component {
    render() {
        const order = this.props.order;
        return (
            <tr>
                <td>{order.customer_name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.cost}</td>
            </tr>
        );
    }
}

export default AdminTableRow;