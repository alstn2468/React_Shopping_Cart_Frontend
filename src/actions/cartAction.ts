import { deprecated, ActionType } from 'typesafe-actions';
import { ICartItem } from 'src/models/ICartItem';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREASE_CART_PRODUCT_AMOUNT = 'INCREASE_CART_PRODUCT_AMOUNT';
export const DECREASE_CART_PRODUCT_AMOUNT = 'DECREASE_CART_PRODUCT_AMOUNT';

export const SELECT_PRODUCT_AT_CART = 'SELECT_BUYING_PRODUCT_AT_CART';

const { createStandardAction } = deprecated;

/* =========================== *
 * 카트에 상품을 추가하는 액션 *
 * TPayload : 상품 객체        *
 * =========================== */
export const addProductToCart = createStandardAction(ADD_PRODUCT_TO_CART)<
    ICartItem
>();

/* ============================= *
 * 카트에서 상품을 제거하는 액션 *
 * TPayload : 상품 객체          *
 * ============================= */
export const removeProductFromCart = createStandardAction(
    REMOVE_PRODUCT_FROM_CART,
)<ICartItem>();

/* ================================== *
 * 카트의 상품의 갯수를 증가하는 액션 *
 * TPayload : 상품 객체 ID            *
 * ================================== */
export const increaseCartProductAmount = createStandardAction(
    INCREASE_CART_PRODUCT_AMOUNT,
)<string>();

/* ================================== *
 * 카트의 상품의 갯수를 감소하는 액션 *
 * TPayload : 상품 객체 ID            *
 * ================================== */
export const decreaseCartProductAmount = createStandardAction(
    DECREASE_CART_PRODUCT_AMOUNT,
)<string>();

/* ========================================== *
 * 카트에서 구매할 상품을 선택, 취소하는 액션 *
 * TPayload : 상품 객체 ID                    *
 * ========================================== */
export const selectProductAtCart = createStandardAction(SELECT_PRODUCT_AT_CART)<
    string
>();

const actions = {
    addProductToCart,
    removeProductFromCart,
    increaseCartProductAmount,
    decreaseCartProductAmount,
    selectProductAtCart,
};

export type CartAction = ActionType<typeof actions>;
