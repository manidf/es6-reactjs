import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../actions/app-actions';

export default (props) => {
    return (
        <tr>
            <td>
                <CartButton
                    txt="x"
                    handler={AppActions.removeItem.bind(null, props.item )}
                />
            </td>
            <td> {props.item.title} </td>
            <td> {props.item.qty} </td>
            <td>
                
            </td>
            <td> </td>
        </tr>
    )
}