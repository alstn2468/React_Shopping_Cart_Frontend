import { deprecated, ActionType } from 'typesafe-actions';
import { ICartItem } from 'models/ICartItem';
import { ICouponItem } from 'models/ICouponItem';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREASE_CART_PRODUCT_AMOUNT = 'INCREASE_CART_PRODUCT_AMOUNT';
export const DECREASE_CART_PRODUCT_AMOUNT = 'DECREASE_CART_PRODUCT_AMOUNT';
export const SELECT_PRODUCT_AT_CART = 'SELECT_BUYING_PRODUCT_AT_CART';
export const ADD_COUPON_AT_PRODUCT = 'ADD_COUPON_AT_PRODUCT';
export const REMOVE_COUPON_FROM_PRODUCT = 'REMOVE_COUPON_FROM_PRODUCT';

type ProductCoupon = {
    productId: string;
    coupon: ICouponItem;
};

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

/* ====================================== *
 * 상품에 쿠폰을 적용하는 액션            *
 * TPayload : { 상품 객체 ID, 쿠폰 객체 } *
 * ====================================== */
export const addCouponAtProduct = createStandardAction(ADD_COUPON_AT_PRODUCT)<
    ProductCoupon
>();

/* ====================================== *
 * 상품에 적용된 쿠폰을 제거하는 액션     *
 * TPayload : { 상품 객체 ID, 쿠폰 객체 } *
 * ====================================== */
export const removeCouponFromProduct = createStandardAction(
    REMOVE_COUPON_FROM_PRODUCT,
)<ProductCoupon>();

const actions = {
    addProductToCart,
    removeProductFromCart,
    increaseCartProductAmount,
    decreaseCartProductAmount,
    selectProductAtCart,
    addCouponAtProduct,
    removeCouponFromProduct,
};

export type CartAction = ActionType<typeof actions>;
