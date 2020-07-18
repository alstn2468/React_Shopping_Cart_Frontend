import {
    ADD_COUPON_AT_PRODUCT,
    REMOVE_COUPON_FROM_PRODUCT,
    FETCH_COUPON_LIST_REQUEST,
    FETCH_COUPON_LIST_SUCCESS,
    FETCH_COUPON_LIST_FAILURE,
    OPEN_COUPON_MODAL_DIALOG,
    CLOSE_COUPON_MODAL_DIALOG,
    CouponAction,
} from 'actions/couponAction';
import { createReducer } from 'typesafe-actions';
import { ICouponItem } from 'src/models/ICouponItem';

export type CouponState = {
    loading: boolean;
    coupons: ICouponItem[];
    error?: string;
};

const initialState: CouponState = {
    loading: false,
    coupons: [],
    error: null,
};

const productListReducer = createReducer<CouponState, CouponAction>(
    initialState,
    {},
);

export default productListReducer;
