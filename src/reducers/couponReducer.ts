import {
    FETCH_COUPON_LIST_REQUEST,
    FETCH_COUPON_LIST_SUCCESS,
    FETCH_COUPON_LIST_FAILURE,
    OPEN_COUPON_MODAL_DIALOG,
    CLOSE_COUPON_MODAL_DIALOG,
    REMOVE_COUPON_FROM_LIST,
    ADD_COUPON_TO_LIST,
    CouponAction,
} from 'actions/couponAction';
import { createReducer } from 'typesafe-actions';
import { ICouponItem } from 'models/ICouponItem';

export type CouponState = {
    loading: boolean;
    isOpen: boolean;
    coupons: ICouponItem[];
    selectedProductId: string;
    error?: string;
};

const initialState: CouponState = {
    loading: false,
    isOpen: false,
    coupons: [],
    selectedProductId: '',
    error: null,
};

const couponReducer = createReducer<CouponState, CouponAction>(initialState, {
    [ADD_COUPON_TO_LIST]: (state, action) => ({
        ...state,
        coupons: [...state.coupons, action.payload],
    }),
    [REMOVE_COUPON_FROM_LIST]: (state, action) => ({
        ...state,
        coupons: [
            ...state.coupons.filter(
                (coupon) => coupon.title !== action.payload.title,
            ),
        ],
    }),
    [FETCH_COUPON_LIST_REQUEST]: (state) => ({ ...state, loading: true }),
    [FETCH_COUPON_LIST_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        ...action.payload,
    }),
    [FETCH_COUPON_LIST_FAILURE]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
    }),
    [OPEN_COUPON_MODAL_DIALOG]: (state, action) => ({
        ...state,
        isOpen: true,
        selectedProductId: action.payload,
    }),
    [CLOSE_COUPON_MODAL_DIALOG]: (state) => ({
        ...state,
        isOpen: false,
        selectedProductId: '',
    }),
});

export default couponReducer;
