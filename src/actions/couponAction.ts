import { deprecated, createAsyncAction, ActionType } from 'typesafe-actions';
import { ICouponItem } from 'models/ICouponItem';

export const ADD_COUPON_TO_LIST = 'ADD_COUPON_TO_LIST';
export const REMOVE_COUPON_FROM_LIST = 'REMOVE_COUPON_FROM_LIST';

export const FETCH_COUPON_LIST_REQUEST = 'FETCH_COUPON_LIST_REQUEST';
export const FETCH_COUPON_LIST_SUCCESS = 'FETCH_COUPON_LIST_SUCCESS';
export const FETCH_COUPON_LIST_FAILURE = 'FETCH_COUPON_LIST_FAILURE';

export const OPEN_COUPON_MODAL_DIALOG = 'OPEN_COUPON_MODAL_DIALOG';
export const CLOSE_COUPON_MODAL_DIALOG = 'CLOSE_COUPON_MODAL_DIALOG';

const { createStandardAction } = deprecated;

type AsyncActionPayload = {
    coupons: ICouponItem[];
};

/* =========================== *
 * 목록에 쿠폰을 추가하는 액션 *
 * TPayload : { 쿠폰 객체 }    *
 * =========================== */
export const addCouponToList = createStandardAction(ADD_COUPON_TO_LIST)<
    ICouponItem
>();

/* ============================= *
 * 목록에서 쿠폰을 삭제하는 액션 *
 * TPayload : { 쿠폰 객체 }      *
 * ============================= */
export const removeCouponFromList = createStandardAction(
    REMOVE_COUPON_FROM_LIST,
)<ICouponItem>();

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
    addCouponToList,
    removeCouponFromList,
    fetchCouponList,
    openCouponModalDialog,
    closeCouponModalDialog,
};

export type CouponAction = ActionType<typeof actions>;
