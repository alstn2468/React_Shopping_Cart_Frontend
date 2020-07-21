import couponReducer from 'reducers/couponReducer';
import {
    FETCH_COUPON_LIST_REQUEST,
    FETCH_COUPON_LIST_SUCCESS,
    FETCH_COUPON_LIST_FAILURE,
    OPEN_COUPON_MODAL_DIALOG,
    CLOSE_COUPON_MODAL_DIALOG,
    REMOVE_COUPON_FROM_LIST,
    ADD_COUPON_TO_LIST,
} from 'actions/couponAction';
import { ICartItem } from 'models/ICartItem';
import { ICouponItem } from 'models/ICouponItem';

describe('couponReducer 리듀서 테스트', () => {
    const testCoupon: ICouponItem = {
        type: 'amount',
        title: '테스트쿠폰',
        discountAmount: 500,
    };

    it('쿠폰 목록을 요청하는 액션 테스트', () => {
        expect(
            couponReducer(
                {
                    loading: false,
                    isOpen: false,
                    coupons: [],
                    selectedProductId: '',
                    error: null,
                },
                {
                    type: FETCH_COUPON_LIST_REQUEST,
                    payload: null,
                },
            ),
        ).toEqual({
            loading: true,
            isOpen: false,
            coupons: [],
            selectedProductId: '',
            error: null,
        });
    });

    it('쿠폰 목록 요청을 성공하는 액션 테스트', () => {
        expect(
            couponReducer(
                {
                    loading: true,
                    isOpen: false,
                    coupons: [],
                    selectedProductId: '',
                    error: null,
                },
                {
                    type: FETCH_COUPON_LIST_SUCCESS,
                    payload: { coupons: [{ ...testCoupon }] },
                },
            ),
        ).toEqual({
            loading: false,
            isOpen: false,
            coupons: [{ ...testCoupon }],
            selectedProductId: '',
            error: null,
        });
    });

    it('쿠폰 목록 요청을 실패하는 액션 테스트', () => {
        expect(
            couponReducer(
                {
                    loading: true,
                    isOpen: false,
                    coupons: [],
                    selectedProductId: '',
                    error: null,
                },
                {
                    type: FETCH_COUPON_LIST_FAILURE,
                    payload: 'error',
                },
            ),
        ).toEqual({
            loading: false,
            isOpen: false,
            coupons: [],
            selectedProductId: '',
            error: 'error',
        });
    });

    it('쿠폰 목록에 쿠폰을 추가하는 액션 테스트', () => {
        expect(
            couponReducer(
                {
                    loading: false,
                    isOpen: false,
                    coupons: [],
                    selectedProductId: '',
                    error: null,
                },
                {
                    type: ADD_COUPON_TO_LIST,
                    payload: testCoupon,
                },
            ),
        ).toEqual({
            loading: false,
            isOpen: false,
            coupons: [{ ...testCoupon }],
            selectedProductId: '',
            error: null,
        });
    });

    it('쿠폰 목록에서 쿠폰을 삭제 삭제하는 액션 테스트', () => {
        expect(
            couponReducer(
                {
                    loading: false,
                    isOpen: false,
                    coupons: [{ ...testCoupon }],
                    selectedProductId: '',
                    error: null,
                },
                {
                    type: REMOVE_COUPON_FROM_LIST,
                    payload: testCoupon,
                },
            ),
        ).toEqual({
            loading: false,
            isOpen: false,
            coupons: [],
            selectedProductId: '',
            error: null,
        });
    });

    it('쿠폰 목록 모달을 여는 액션 테스트', () => {
        expect(
            couponReducer(
                {
                    loading: false,
                    isOpen: false,
                    coupons: [],
                    selectedProductId: '',
                    error: null,
                },
                {
                    type: OPEN_COUPON_MODAL_DIALOG,
                    payload: 'test',
                },
            ),
        ).toEqual({
            loading: false,
            isOpen: true,
            coupons: [],
            selectedProductId: 'test',
            error: null,
        });
    });

    it('쿠폰 목록 모달을 닫는 액션 테스트', () => {
        expect(
            couponReducer(
                {
                    loading: false,
                    isOpen: true,
                    coupons: [],
                    selectedProductId: 'test',
                    error: null,
                },
                {
                    type: CLOSE_COUPON_MODAL_DIALOG,
                },
            ),
        ).toEqual({
            loading: false,
            isOpen: false,
            coupons: [],
            selectedProductId: '',
            error: null,
        });
    });
});
