import userReducer from '../components/Header/Auth/userSlice';
import cartReducer from '../components/Feature/ProductFeature/components/Cart/cartSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    user: userReducer,
    cart: cartReducer,
};
const store = configureStore({
    reducer: rootReducer,
});
export default store;
