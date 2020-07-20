import * as React from 'react';
import styled from 'styled-components';
import ProductAmount from 'components/Cart/ProductAmount';
import { numberWithComma } from 'utils/numberWithComma';

type CartItemDetailProp = {
    title: string;
    price: number;
    amount: number;
    productId: string;
};

const CartItemDetailContainer = styled.div``;

const ProductTitle = styled.h2`
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
    height: 20px;
`;

const ProductPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(27, 28, 29);
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

const ProductPriceText = styled.div`
    color: rgb(27, 28, 29);
`;

function CartItemDetail({
    title,
    price,
    amount,
    productId,
}: CartItemDetailProp): React.ReactElement {
    return (
        <CartItemDetailContainer>
            <ProductTitle>{title}</ProductTitle>
            <ProductPriceContainer>
                <ProductPriceText>{numberWithComma(price)}원</ProductPriceText>
                <ProductAmount amount={amount} productId={productId} />
            </ProductPriceContainer>
        </CartItemDetailContainer>
    );
}

export default React.memo(
    CartItemDetail,
    (prevProps: CartItemDetailProp, nextProps: CartItemDetailProp): boolean =>
        prevProps.price === nextProps.price &&
        prevProps.amount === nextProps.amount,
);
