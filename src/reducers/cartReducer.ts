import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_CART_PRODUCT_AMOUNT,
    DECREASE_CART_PRODUCT_AMOUNT,
    SELECT_PRODUCT_AT_CART,
    ADD_COUPON_AT_PRODUCT,
    REMOVE_COUPON_FROM_PRODUCT,
    CartAction,
} from 'actions/cartAction';
import { createReducer } from 'typesafe-actions';
import { ICartItem } from 'models/ICartItem';
import { applyCoupon } from 'utils/applyCoupon';

export type CartState = {
    cartItemCounts: number;
    cartItems: ICartItem[];
    price: number;
    discountPrice: number;
    error?: string;
};

const initialState: CartState = {
    cartItemCounts: 0,
    cartItems: [],
    price: 0,
    discountPrice: 0,
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
        const product = action.payload;
        const { coupon, amount, isSelected } = state.cartItems.find(
            (item) => item.id === product.id,
        );

        return {
            ...state,
            cartItems: [
                ...state.cartItems.filter((item) => item.id !== product.id),
            ],
            cartItemCounts: state.cartItemCounts - 1,
            price: state.price - (isSelected ? product.price * amount : 0),
            discountPrice:
                state.discountPrice -
                (coupon && isSelected ? applyCoupon(product.price, coupon) : 0),
        };
    },
    [INCREASE_CART_PRODUCT_AMOUNT]: (state, action) => {
        let product: ICartItem;
        const newCartItems = state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload) {
                product = cartItem;
                return {
                    ...cartItem,
                    amount: cartItem.amount + 1,
                };
            }
            return {
                ...cartItem,
            };
        });

        return {
            ...state,
            cartItems: newCartItems,
            price: state.price + (product.isSelected ? product.price : 0),
        };
    },
    [DECREASE_CART_PRODUCT_AMOUNT]: (state, action) => {
        let product: ICartItem;
        const newCartItems = state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload) {
                product = cartItem;
                return {
                    ...cartItem,
                    amount: cartItem.amount - 1,
                };
            }
            return {
                ...cartItem,
            };
        });

        return {
            ...state,
            cartItems: newCartItems,
            price: state.price - (product.isSelected ? product.price : 0),
        };
    },
    [SELECT_PRODUCT_AT_CART]: (state, action) => {
        const product = state.cartItems.find(
            (cartItem) => cartItem.id === action.payload,
        );
        const newCartItems = state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, isSelected: !cartItem.isSelected };
            }
            return { ...cartItem };
        });
        const newDiscountPrice = product.coupon
            ? applyCoupon(product.price, product.coupon)
            : 0;

        return {
            ...state,
            cartItems: newCartItems,
            price:
                state.price +
                (product.isSelected
                    ? -(product.price * product.amount)
                    : product.price * product.amount),
            discountPrice:
                state.discountPrice +
                (product.isSelected ? -newDiscountPrice : newDiscountPrice),
        };
    },
    [ADD_COUPON_AT_PRODUCT]: (state, action) => {
        const product = {
            ...state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.productId,
            ),
            coupon: action.payload.coupon,
        };

        return {
            ...state,
            cartItems: state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.productId) {
                    return {
                        ...product,
                        isSelected: true,
                    };
                }
                return { ...cartItem };
            }),
            price:
                state.price +
                (!product.isSelected ? product.price * product.amount : 0),
            discountPrice:
                state.discountPrice +
                applyCoupon(product.price, action.payload.coupon),
        };
    },
    [REMOVE_COUPON_FROM_PRODUCT]: (state, action) => {
        const product = state.cartItems.find(
            (cartItem) => cartItem.id === action.payload.productId,
        );

        return {
            ...state,
            cartItems: state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.productId) {
                    return {
                        ...product,
                        coupon: null,
                    };
                }
                return { ...cartItem };
            }),
            discountPrice:
                state.discountPrice -
                (product.isSelected
                    ? applyCoupon(product.price, action.payload.coupon)
                    : 0),
        };
    },
});

export default cartReducer;
