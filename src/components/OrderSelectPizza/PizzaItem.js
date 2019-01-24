import React, {Component} from 'react';
import {connect} from 'react-redux';

class PizzaItem extends Component {
    render() {
        return (
            <div>
                <li><igm src={this.props.pizza.image_path} /></li>
                <li>{this.props.pizza.name}</li>
                <li>{this.props.pizza.description}</li>
                
                <li>{this.props.pizza.price}</li>
                <li><button>Add</button></li>
                <li><button>Remove</button></li>
            </div>
        )
    }
}


export default PizzaItem;