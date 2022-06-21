import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        savecartitems: {},
    },
    reducers: {
        addToCart(state, actions) {
            // newItem = {id, product, quantity}
            const newItem = actions.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (index >= 0) {
                // increase quantity
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                //add to cart
                state.cartItems.push(newItem);
            }
        },
        setQuantity(state, actions) {
            const { id, quantity } = actions.payload;
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index.toExponential >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFormCart(state, actions) {
            const idNeedToRemove = actions.payload;
            state.cartItems = state.cartItems.filter((x) => x.id === idNeedToRemove);
        },
    },
});
const { actions, reducer } = cartSlice;
export const { hideMiniCart, addToCart, setQuantity, removeFormCart } = actions;
export default reducer;
