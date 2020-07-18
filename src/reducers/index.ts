import { combineReducers } from 'redux';
import productListReducer from 'reducers/productListReducer';
import cartReducer from 'reducers/cartReducer';
import couponReducer from 'reducers/couponReducer';

const rootReducer = combineReducers({
    product: productListReducer,
    cart: cartReducer,
    coupon: couponReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
