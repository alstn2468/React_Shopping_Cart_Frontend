import { deprecated, createAsyncAction, ActionType } from 'typesafe-actions';
import { ICouponItem } from 'models/ICouponItem';

export const ADD_COUPON_AT_PRODUCT = 'APPLY_COUPON_AT_PRODUCT';
export const REMOVE_COUPON_FROM_PRODUCT = 'REMOVE_COUPON_FROM_PRODUCT';

export const FETCH_COUPON_LIST_REQUEST = 'FETCH_COUPON_LIST_REQUEST';
export const FETCH_COUPON_LIST_SUCCESS = 'FETCH_COUPON_LIST_SUCCESS';
export const FETCH_COUPON_LIST_FAILURE = 'FETCH_COUPON_LIST_FAILURE';

export const OPEN_COUPON_MODAL_DIALOG = 'OPEN_COUPON_MODAL_DIALOG';
export const CLOSE_COUPON_MODAL_DIALOG = 'CLOSE_COUPON_MODAL_DIALOG';

const { createStandardAction } = deprecated;

type ProductCoupon = {
    productId: string;
    coupon: ICouponItem;
};

type AsyncActionPayload = {
    coupons: ICouponItem[];
};

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

/* ================================== *
 * 쿠폰 목록을 가져오는 비동기 액션   *
 * TRequestPayload : void             *
 * TSuccessPayload : 쿠폰 목록 리스트 *
 * TFailurePayload : 실패 메시지      *
 * ================================== */
export const fetchCouponList = createAsyncAction(
    FETCH_COUPON_LIST_REQUEST,
    FETCH_COUPON_LIST_SUCCESS,
    FETCH_COUPON_LIST_FAILURE,
)<void, AsyncActionPayload, string>();

/* ========================== *
 * 쿠폰 목록 모달을 여는 액션 *
 * TPayload : void            *
 * ========================== */
export const openCouponModalDialog = createStandardAction(
    OPEN_COUPON_MODAL_DIALOG,
)();

/* ========================== *
 * 쿠폰 목록 모달을 닫는 액션 *
 * TPayload : void            *
 * ========================== */
export const closeCouponModalDialog = createStandardAction(
    CLOSE_COUPON_MODAL_DIALOG,
)();

const actions = {
    addCouponAtProduct,
    removeCouponFromProduct,
    fetchCouponList,
    openCouponModalDialog,
    closeCouponModalDialog,
};

export type CouponAction = ActionType<typeof actions>;
