import React from 'react';
import AppActions from '../actions/app-actions';
import CartButton from './app-cart-button';


export default (props) => {
    return (
        <div className="mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet">
            <h4>{props.item.title}</h4>
            <img src="http://themwebs.me/images/MeizuMX5ProWhite.jpg" width="100%" className="img-responsive" />
            <p>{props.item.summary}</p>
            <p>${props.item.cost}</p>

            <CartButton
                handler={
                    AppActions.addItem.bind(null, props.item)
                }
                txt="ADD TO CART"
            />
        </div>
    )
}