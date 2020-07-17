import { IProductItem } from 'models/IProductItem';

export interface ICartItem extends IProductItem {
    amount: number;
}
