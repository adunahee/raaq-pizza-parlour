import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Pizza Name</th>
                        <th> Pizza Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxStore.pizzaOrder.map((pizza, i) => {
                        return (<tr key={i}>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>your total here</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

const mapStoreToProps = (reduxStore) => { return { reduxStore: reduxStore } }
export default connect(mapStoreToProps)(CheckoutTable);