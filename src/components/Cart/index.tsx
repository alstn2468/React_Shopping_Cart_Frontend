import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import {
    selectProductAtCart,
    selectAllProductAtCart,
    removeAllProductFromCart,
} from 'actions/cartAction';
import CartItem from 'components/Cart/CartItem';
import { ICartItem } from 'src/models/ICartItem';

const CartListContainer = styled.div`
    display: flex;
    width: 90%;
    height: 80%;
    margin: 0 auto;
    align-items: center;
    padding: 20px 0;
`;

function Cart() {
    const { cartItemCounts, cartItems, selectedItems, price } = useSelector(
        (state: RootState) => state.cart,
    );

    return (
        <CartListContainer>
            {cartItems.map((cartItem: ICartItem) => (
                <CartItem key={cartItem.id} {...cartItem} />
            ))}
        </CartListContainer>
    );
}

export default Cart;
