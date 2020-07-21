import {
    ADD_COUPON_TO_LIST,
    REMOVE_COUPON_FROM_LIST,
    FETCH_COUPON_LIST_REQUEST,
    FETCH_COUPON_LIST_SUCCESS,
    FETCH_COUPON_LIST_FAILURE,
    OPEN_COUPON_MODAL_DIALOG,
    CLOSE_COUPON_MODAL_DIALOG,
    addCouponToList,
    removeCouponFromList,
    fetchCouponList,
    openCouponModalDialog,
    closeCouponModalDialog,
} from 'actions/couponAction';
import { ICouponItem } from 'models/ICouponItem';

describe('couponAction 액션 테스트', () => {
    const testCoupon: ICouponItem = {
        type: 'rate',
        title: 'test',
        discountRate: 10,
    };

    it('쿠폰 목록에 쿠폰을 추가하는 액션 테스트', () => {
        const expectedAction = {
            type: ADD_COUPON_TO_LIST,
            payload: testCoupon,
        };
        expect(addCouponToList(testCoupon)).toEqual(expectedAction);
    });

    it('쿠폰 목록에서 쿠폰을 제거하는 액션 테스트', () => {
        const expectedAction = {
            type: REMOVE_COUPON_FROM_LIST,
            payload: testCoupon,
        };
        expect(removeCouponFromList(testCoupon)).toEqual(expectedAction);
    });

    it('쿠폰 목록을 가져오는 요청 액션 테스트', () => {
        const expectedAction = {
            type: FETCH_COUPON_LIST_REQUEST,
        };
        expect(fetchCouponList.request()).toEqual(expectedAction);
    });

    it('쿠폰 목록을 가져오는데 성공한 액션 테스트', () => {
        const expectedAction = {
            type: FETCH_COUPON_LIST_SUCCESS,
            payload: { coupons: [testCoupon] },
        };
        expect(fetchCouponList.success({ coupons: [testCoupon] })).toEqual(
            expectedAction,
        );
    });

    it('쿠폰 목록을 가져오는데 실패한 액션 테스트', () => {
        const expectedAction = {
            type: FETCH_COUPON_LIST_FAILURE,
            payload: 'error',
        };
        expect(fetchCouponList.failure('error')).toEqual(expectedAction);
    });

    it('쿠폰 모달을 여는 액션 테스트', () => {
        const expectedAction = {
            type: OPEN_COUPON_MODAL_DIALOG,
            payload: 'test',
            meta: undefined,
        };
        expect(openCouponModalDialog('test')).toEqual(expectedAction);
    });

    it('쿠폰 모달을 닫는 액션 테스트', () => {
        const expectedAction = {
            type: CLOSE_COUPON_MODAL_DIALOG,
        };
        expect(closeCouponModalDialog()).toEqual(expectedAction);
    });
});
