import React, {Component} from 'react';

class PizzaItem extends Component {
    addToOrder = () => {
        console.log('add pressed');
        
    }
    render() {
        return (
            <div>
                <li><igm src={this.props.pizza.image_path} /></li>
                <li>{this.props.pizza.name}</li>
                <li>{this.props.pizza.description}</li>
                
                <li>{this.props.pizza.price}</li>
                <li><button onClick={this.addToOrder}>Add</button></li>
                <li><button>Remove</button></li>
            </div>
        )
    }
}


export default PizzaItem;