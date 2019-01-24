import React, {Component} from 'react';
import {connect} from 'react-redux';


class PizzaItem extends Component {
    addToOrder = () => {
        console.log(this.props.pizza.id);
        const action = {type: 'ADD_PIZZA', payload: this.props.pizza}
        this.props.dispatch(action)
    }

    removePizza = () => {
        const action = {type: 'REMOVE_PIZZA', payload: this.props.pizza}
        this.props.dispatch(action)
    }
    render() {
        return (
            <div>
                <li><igm src={this.props.pizza.image_path} /></li>
                <li>{this.props.pizza.name}</li>
                <li>{this.props.pizza.description}</li>
                
                <li>{this.props.pizza.price}</li>
                <li><button onClick={this.addToOrder}>Add</button></li>
                <li><button onClick={this.removePizza}>Remove</button></li>
            </div>
        )
    }
}


export default connect()(PizzaItem);