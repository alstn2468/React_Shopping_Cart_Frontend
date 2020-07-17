import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_ALL_PRODUCT_FROM_CART,
    SELECT_PRODUCT_AT_CART,
    SELECT_ALL_PRODUCT_AT_CART,
    CartAction,
} from 'actions/cartAction';
import { createReducer } from 'typesafe-actions';
import { ICartItem } from 'src/models/ICartItem';

export type CartState = {
    cartItemCounts: number;
    cartItems: ICartItem[];
    selectedItems: ICartItem[];
    price: number;
    error?: string;
};

const initialState: CartState = {
    cartItemCounts: 0,
    cartItems: [],
    selectedItems: [],
    price: 0,
    error: null,
};

const cartReducer = createReducer<CartState, CartAction>(initialState, {
    [ADD_PRODUCT_TO_CART]: (state, action) => {
        if (state.cartItemCounts >= 3) {
            return state;
        }

        return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            cartItemCounts: state.cartItemCounts + 1,
        };
    },
    [REMOVE_PRODUCT_FROM_CART]: (state, action) => {
        return {
            ...state,
            cartItems: [
                ...state.cartItems.filter(
                    (item) => item.id !== action.payload.id,
                ),
            ],
            cartItemCounts: state.cartItemCounts - 1,
        };
    },
    [REMOVE_ALL_PRODUCT_FROM_CART]: (state) => {
        return { ...state, ...initialState };
    },
    [SELECT_PRODUCT_AT_CART]: (state, action) => {
        return {
            ...state,
            selectedItems: [...state.selectedItems, action.payload],
            price: state.price + action.payload.price,
        };
    },
    [SELECT_ALL_PRODUCT_AT_CART]: (state) => {
        return {
            ...state,
            selectedItems: [...state.cartItems],
            price: state.cartItems.reduce(
                (accumulator, currentValue) => accumulator + currentValue.price,
                0,
            ),
        };
    },
});

export default cartReducer;
