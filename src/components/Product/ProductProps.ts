import { IProductItem } from 'models/IProductItem';

export type ProductPriceProps = {
    availableCoupon: boolean;
    color: string;
};

export interface ProductItemProps extends IProductItem {
    isInCart: boolean;
}

export type ProductButtonProps = {
    isPointer: boolean;
};
