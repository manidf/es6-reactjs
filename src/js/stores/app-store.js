import { dispatch, register } from '../dispatchers/app-dispatcher';
import  AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _catalog = [];

for ( let i = 1; i < 9 ; i++) {
    _catalog.push({
        'id': 'Phone' + i,
        'title': 'Meizu Pro 5' + i,
        'description': '5.7inch 1080p screen with a re-tuned delta cool color AMOLED screen',
        'cost': i
    });
}

var cartItems = [];

const _removeItem = ( item ) => { 
    _cartItems.splice( _cartItems.findIndex( i => i === item ), 1 );
}

const _findCartItem = ( item ) => {
    return _cartItems.find( cartItems => cartItem.id === item.id )
}

const _increaseItem = ( item ) => item.qty++;

const _decreaseItem = ( item ) => {
    item.qty--;
    if ( item.qty === 0 ) {
        _removeItem( item )
    }
}

const _addItem = ( item ) => {
    const cartItem = _findCartItem( item );
    if ( !cartItem ) {
        _cartItems.push( Object.assign( {qty: 1}, item ) );
    } else {
        _increaseItem( cartItem );
    }
}

const _cartTotals = ( qty = 0, total = 0 ) => {
    _cartItems.forEach( cartItems => {
        qty += cartItems.qty;
        total += cartItem.qty * cartItem.cost;
    });
    return {qty, total};
}

const AppStore = Object.assign(EventEmitter.prototype, {
    emitChange(){
        this.emit( CHANGE_EVENT )
    },
    
    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback )
    },
    
    removeChangeListener( callback ) {
        this.removeListener( CHANGE_EVENT, callback )
    },
    
    getCart() {
        return _cartItems;
    },

    getCatalog() {
        return _catalog.map(item => {
            return Object.assign( {}, item, _cartItems.find( cItem => cItem.id === item.id) );
        });
    },

    getCartTotals() {
        return _cartTotals;
    },

    dispatchIndex: register( function( action ) {
        switch(action.actionType) {
            case AppConstants.ADD_ITEM:
                    _addItem( action.item );
                    break;
            case AppConstants.REMOVE_ITEM:
                    _addItem( action.item );
                    break;
            case AppConstants.INCREASE_ITEM:
                    _addItem( action.item );
                    break;
            case AppConstants.DECREASE_ITEM:
                    _addItem( action.item );
                    break;
        }

        AppStore.emitChange();
    })
})

export default AppStore;