import { applyCoupon } from 'utils/applyCoupon';
import { ICouponItem } from 'models/ICouponItem';

const RateCoupon: ICouponItem = {
    type: 'rate',
    title: '비율 테스트 쿠폰',
    discountRate: 5,
};

const AmountCoupon: ICouponItem = {
    type: 'amount',
    title: '값 테스트 쿠폰',
    discountAmount: 2000,
};

describe('applyCoupon 유틸 함수 테스트', () => {
    it('10000원 상품에 5% 비율 쿠폰 적용 테스트', () => {
        expect(500).toEqual(applyCoupon(10000, RateCoupon));
    });

    it('10000원 상품에 2000원 쿠폰 적용 테스트', () => {
        expect(2000).toEqual(applyCoupon(10000, AmountCoupon));
    });

    it('1000원 상품에 2000원 쿠폰 적용 제한 테스트', () => {
        expect(1000).toEqual(applyCoupon(1000, AmountCoupon));
    });

    it('7050원 상품에 5% 비율 쿠폰 적용 실수 내림 테스트', () => {
        expect(352).toEqual(applyCoupon(7050, RateCoupon));
    });
});
