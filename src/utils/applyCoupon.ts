import { ICouponItem } from 'models/ICouponItem';

export function applyCoupon(price: number, coupon: ICouponItem): number {
    const { type, discountRate, discountAmount } = coupon;

    if (type === 'rate') {
        return Math.floor(price * (discountRate / 100));
    }

    return price > discountAmount ? discountAmount : price;
}
