import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PizzaItem from './PizzaItem.js'

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

    handleNextButton = (event) => {
        // console.log(this.props);
        // console.log(this.props.history);
        
        this.props.history.push('/order-customer-info');
    }

    render() {
        return (
            <div>
                <ul>
                    {/* {JSON.stringify(this.props.reduxStore.pizzaNames)} */}
                    {this.props.reduxStore.pizzaNames.map((pizza, i) =>{
                        return (<PizzaItem key={i} pizza={pizza} />)
                    })} 
                </ul>
                <button onClick={this.handleNextButton}>Next</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(PizzaList);