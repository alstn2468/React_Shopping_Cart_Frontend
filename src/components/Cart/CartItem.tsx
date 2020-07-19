import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ICartItem } from 'models/ICartItem';
import { removeProductFromCart, selectProductAtCart } from 'actions/cartAction';
import CartCheckBox from 'components/Cart/CartCheckBox';
import CartItemDetail from 'components/Cart/CartItemDetail';
import ProductRemoveButton from 'components/Cart/ProductRemoveButton';
import ProductConfirm from 'components/Cart/ProductConfirm';
import ProductBadge from 'components/Cart/ProductBadge';
import Divisor from 'components/Common/Divisor';

const CartItemContainer = styled.div`
    position: relative;
    display: flex;
    width: calc(33.333333% - 40px);
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

const CartItemImage = styled.img`
    height: 250px;
    width: 100%;
    border-radius: 5px;
    margin: 8px 0;
`;

function CartItem({
    id,
    title,
    coverImage,
    price,
    score,
    availableCoupon = true,
    amount,
    isSelected = false,
    coupon,
}: ICartItem) {
    const item: ICartItem = {
        id,
        title,
        coverImage,
        price,
        score,
        availableCoupon,
        amount,
        isSelected,
        coupon,
    };
    const dispatch = useDispatch();

    return (
        <CartItemContainer>
            <ProductRemoveButton
                onButtonClicked={() => dispatch(removeProductFromCart(item))}
            />
            <CartItemTopContainer>
                <CartCheckBox
                    isSelected={isSelected}
                    onCheckBoxClicked={() => dispatch(selectProductAtCart(id))}
                />
                <ProductBadge
                    backgroundColor="#000000"
                    color="#ffffff"
                    children={`${score}명의 선택`}
                />
                {availableCoupon && (
                    <ProductBadge
                        backgroundColor="red"
                        color="#ffffff"
                        children="쿠폰 적용 가능"
                    />
                )}
            </CartItemTopContainer>
            <CartItemImage src={coverImage} />
            <CartItemDetail
                title={title}
                price={price}
                amount={amount}
                productId={id}
            />
            <Divisor />
            <ProductConfirm
                productId={id}
                availableCoupon={availableCoupon}
                coupon={coupon}
                totalPrice={price * amount}
            />
        </CartItemContainer>
    );
}

export default CartItem;
