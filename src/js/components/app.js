import React from 'react';
import AppActions from '../actions/app-actions';

export default class App extends React.Component {
    render() {
        return <h3
        onClick={AppActions.addItem.bind(null, 'this is an item')}
        > React, Flux Architecture</h3>;
    }
}