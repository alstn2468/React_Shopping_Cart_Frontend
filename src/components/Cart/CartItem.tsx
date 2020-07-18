import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { MdClear } from 'react-icons/md';
import {
    ProductTopInfoProp,
    ProductTopInfoTextProp,
} from 'components/Cart/CartItemProps';
import { ICartItem } from 'models/ICartItem';
import { removeProductFromCart } from 'actions/cartAction';

const CartItemContainer = styled.div`
    position: relative;
    display: flex;
    width: 33.333%;
    height: auto;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 2px 5px,
        rgba(0, 0, 0, 0.04) 0px 3px 7px, rgba(0, 0, 0, 0.04) 0px 7px 10px;
    border-radius: 5px;
`;

const CartItemTopContainer = styled.div`
    line-height: 0px;
    height: 20px;
`;

const ProductTopInfo = styled.div<ProductTopInfoProp>`
    min-width: 20px;
    height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    background-color: ${(prop) => prop.backgroundColor};
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    flex: 0 0 auto;
    margin-right: 4px;
`;

const ProductTopInfoText = styled.div<ProductTopInfoTextProp>`
    font-size: 9px;
    line-height: 12px;
    letter-spacing: normal;
    color: ${(prop) => prop.color};
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    margin: 0px;
`;

const ProductRemoveButton = styled.button`
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 15px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const ProductRemoveIcon = styled(MdClear)`
    width: 25px;
    height: 25px;
`;

const CartItemImage = styled.img`
    height: 250px;
    width: 100%;
    border-radius: 5px;
    margin: 8px 0;
`;

const CartItemDetail = styled.div``;

const ProductTitle = styled.h2`
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
    height: 20px;
`;

const Divisor = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid rgb(242, 244, 245);
`;

function CartItem({
    id,
    title,
    coverImage,
    price,
    score,
    availableCoupon = true,
    amount,
}: ICartItem) {
    const item = {
        id,
        title,
        coverImage,
        price,
        score,
        availableCoupon,
        amount,
    };
    const dispatch = useDispatch();

    return (
        <CartItemContainer>
            <ProductRemoveButton
                onClick={() => dispatch(removeProductFromCart(item))}
            >
                <ProductRemoveIcon />
            </ProductRemoveButton>
            <CartItemTopContainer>
                <ProductTopInfo backgroundColor="#000000">
                    <ProductTopInfoText color="#ffffff">
                        {score}명의 선택
                    </ProductTopInfoText>
                </ProductTopInfo>
                {availableCoupon && (
                    <ProductTopInfo backgroundColor="red">
                        <ProductTopInfoText color="#ffffff">
                            쿠폰 적용 가능
                        </ProductTopInfoText>
                    </ProductTopInfo>
                )}
            </CartItemTopContainer>
            <CartItemImage src={coverImage} />
            <CartItemDetail>
                <ProductTitle>{title}</ProductTitle>
                <Divisor />
                <div>
                    {price} * {amount} = {price * amount}
                </div>
                <div>{amount}</div>
            </CartItemDetail>
        </CartItemContainer>
    );
}

export default CartItem;
