import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { AiOutlineShopping } from 'react-icons/ai';
import { RootState } from 'reducers';
import CartItem from 'components/Cart/CartItem';
import Purchase from 'components/Cart/Purchase';
import CouponDialog from 'components/CouponDialog';
import { ICartItem } from 'models/ICartItem';
import { CartState } from 'reducers/cartReducer';

type CartProp = {
    cartItems: ICartItem[];
    price: number;
    discountPrice: number;
};

const CartListContainer = styled.div`
    display: flex;
    width: 80%;
    height: 80%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
`;

const CartItemContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    padding: 20px 0;
    flex-direction: row;
`;

const CartEmptyContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    flex-direction: column;
`;

const CartEmptyIcon = styled(AiOutlineShopping)`
    width: 5%;
    height: auto;
    margin: 10px 0;
`;

function Cart() {
    const { cartItems, price, discountPrice } = useSelector(
        createSelector(
            (state: RootState): CartState => state.cart,
            (cart: CartState): CartProp => ({
                cartItems: cart.cartItems,
                price: cart.price,
                discountPrice: cart.discountPrice,
            }),
        ),
    );

    return (
        <CartListContainer>
            {cartItems.length >= 1 ? (
                <>
                    <CartItemContainer>
                        {cartItems.map((item: ICartItem) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </CartItemContainer>
                    <Purchase price={price} discountPrice={discountPrice} />
                </>
            ) : (
                <CartEmptyContainer>
                    <CartEmptyIcon />
                    장바구니가 비어있습니다.
                </CartEmptyContainer>
            )}
            <CouponDialog />
        </CartListContainer>
    );
}

export default Cart;
