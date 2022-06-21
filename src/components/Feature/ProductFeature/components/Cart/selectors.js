import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItems;
//cart(store.js) cartItems(cartSlice)

export const cartitemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0),
);

export const cartitemsTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((total, item) => total + item.detail.salePrice * item.quantity, 0),
);
export const cartitemsIdSelector = createSelector(cartItemsSelector, (cartItems) => cartItems);
