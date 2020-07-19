import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import ProductAmountButton from 'components/Cart/ProductAmountButton';
import {
    increaseCartProductAmount,
    decreaseCartProductAmount,
} from 'actions/cartAction';

type ProductAmountProp = {
    amount: number;
    productId: string;
};

const ProductAmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ProductAmountText = styled.div`
    margin: 0 6px;
    width: 10px;
    text-align: center;
`;

function ProductAmount({ amount, productId }: ProductAmountProp) {
    const dispatch = useDispatch();

    return (
        <ProductAmountContainer>
            <ProductAmountButton
                disabled={amount <= 1}
                onClickButton={() =>
                    dispatch(decreaseCartProductAmount(productId))
                }
                children="-"
            />
            <ProductAmountText>{amount}</ProductAmountText>
            <ProductAmountButton
                disabled={false}
                onClickButton={() =>
                    dispatch(increaseCartProductAmount(productId))
                }
                children="+"
            />
        </ProductAmountContainer>
    );
}

export default ProductAmount;
