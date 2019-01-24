import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <header>
                <h1>RAAQ Pizza!</h1>
                <h3>Total: [placeholder]</h3>
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Header);