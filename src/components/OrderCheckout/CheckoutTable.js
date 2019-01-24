import React, { Component } from 'react';
import {connect} from 'react-redux';

class CheckoutTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <th>Pizza Name</th>
                    <th> Pizza Price</th>
                </thead>
                <tbody>
                    {this.props.reduxStore.pizzaOrder.map((pizza) => {
                        return (<tr>
                                    <td>{pizza.name}</td>
                                    <td>{pizza.price}</td>
                               </tr>
                        )
                    })}
                    
                </tbody>
                <tfoot> 
                    <td>Total</td>
                    <td>your total here</td>
                </tfoot>
            </table>
        )
    }
}

const mapStoreToProps = (reduxStore) => { return { reduxStore: reduxStore }}
export default connect(mapStoreToProps)(CheckoutTable);