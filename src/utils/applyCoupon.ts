import { ICouponItem } from 'models/ICouponItem';

export function applyCoupon(
    price: number,
    amount: number,
    coupon: ICouponItem,
) {
    const { type, discountRate, discountAmount } = coupon;

    if (type === 'rate') {
        return Math.floor(price * amount * (discountRate / 100));
    }

    return discountAmount * amount;
}
