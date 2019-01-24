import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class PizzaList extends Component {
    componentDidMount() {
        this.getPizza();
    }

    getPizza = () => {
        axios.get('/api/pizza').then(response => {
            console.log(response.data);
            const action = {type: 'SET_PIZZA_LIST', payload: response.data}
            this.props.dispatch(action);
        }).catch (error => {
            console.log('error in GET', error)
        })
    }
    render() {
        return (
            <ul></ul>
        )
    }
}

export default connect()(PizzaList);