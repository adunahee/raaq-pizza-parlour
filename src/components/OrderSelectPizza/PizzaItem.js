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

    // will create new reducer to keep current total - and then will create component Class total 
    //that will only display total that can be imported to other pages   
    //     totalPrice = () => {
    //     const action = {type: 'UPDATE_TOTAL', payload: this.props.pizza.price}
    //     this.props.dispatch(action)
    // }

    render() {
        return (
            <div>
                <li><img src={this.props.pizza.image_path} /></li>
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