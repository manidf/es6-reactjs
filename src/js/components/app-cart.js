import React from 'react';
import AppStore from '../stores/app-store';
import AppCartItem from './app-cart-item';

const cartItems = () => {
    return { items: AppStore.getCart() };
};

class Cart extends React.Component {
    constructor() {
        super();
        this.state = cartItems;
        this._onChange = this._onChange.bind(this);
    }
    componentWillMount() {
        AppStore.addChangeListener( this._onChange );
    }
    componentWillUnmount() {
        AppStore.addChangeListener( this._onChange );
    }
    _onChange() {
        this.setState( cartItems );        
    }
    render() {
        var total = 0; 
        var items = this.state.items.map( ( item, i ) => {
            let subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                <AppCartItem
                    subtotal={subtotal}
                    key={i}
                    item={item}
                />
            );
        });
        return (
            <div>
                <h1>Cart</h1>
                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                <thead>
                    <th></th>
                    <th className="mdl-data-table__cell--non-numeric">Item</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th></th>
                </thead>
                <tbody>
                   {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">
                            Total
                        </td>
                        <td>
                            ${total}
                        </td>
                    </tr>
                </tfoot>
                </table>
            </div>
        );
    }
}

export default Cart;