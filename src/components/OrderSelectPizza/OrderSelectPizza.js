import React, {Component} from 'react';
import PizzaList from './PizzaList.js'

class OrderSelectPizza extends Component {
    render() {
        return(
            <div>
                <PizzaList history={this.props.history}/>
            </div>
        )

    }
}

export default OrderSelectPizza;