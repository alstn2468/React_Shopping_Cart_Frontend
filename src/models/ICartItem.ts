import { IProductItem } from 'models/IProductItem';
import { ICouponItem } from 'models/ICouponItem';

export interface ICartItem extends IProductItem {
    amount: number;
    isSelected: boolean;
    coupon?: ICouponItem;
}
