import React, { Component } from 'react';

class AdminTableRow extends Component {
    render() {
        const order = this.props.order;
        return (
            <tr>
                <td>{order.customer_name}</td>
                <td>{order.time.substr(11, 5)}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
            </tr>
        );
    }
}

export default AdminTableRow;