import * as React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineShopping } from 'react-icons/ai';
import { RootState } from 'reducers';
import CartItem from 'components/Cart/CartItem';
import CouponDialog from 'components/CouponDialog';
import { getCouponList } from 'actions/thunkAction';
import { ICartItem } from 'models/ICartItem';
import { numberWithComma } from 'utils/numberWithComma';

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

const PurchaseContainer = styled.div`
    width: calc(100% - 40px);
    border: 1px solid #c6c6c6;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 30px 40px;
`;

const PurchaseTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #000000;
    align-items: center;
    margin: 5px 0;
`;

const PurchaseTextLabel = styled.div`
    min-width: 100px;
    text-align: right;
`;

const PurchaseText = styled.div`
    margin-left: 10px;
    min-width: 160px;
    text-align: right;
`;

const PurchaseButton = styled.button`
    margin-top: 20px;
    height: 50px;
    width: 240px;
    font-size: 18px;
    font-weight: 600;
    padding: 2px 0;
    color: #ffffff;
    background-color: #000000;
    border: none;

    &:focus {
        outline: none;
    }
`;

function Cart() {
    const dispatch = useDispatch();
    const { cartItems, price, discountPrice } = useSelector(
        (state: RootState) => state.cart,
    );

    React.useEffect(() => {
        dispatch(getCouponList());
    }, []);

    return (
        <CartListContainer>
            {cartItems.length >= 1 ? (
                <>
                    <CartItemContainer>
                        {cartItems.map((item: ICartItem) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </CartItemContainer>
                    <PurchaseContainer>
                        <PurchaseTextContainer>
                            <PurchaseTextLabel>상품 금액</PurchaseTextLabel>
                            <PurchaseText>
                                {numberWithComma(price)}원
                            </PurchaseText>
                        </PurchaseTextContainer>
                        <PurchaseTextContainer>
                            <PurchaseTextLabel>할인 금액</PurchaseTextLabel>
                            <PurchaseText>
                                {numberWithComma(discountPrice)}원
                            </PurchaseText>
                        </PurchaseTextContainer>
                        <PurchaseTextContainer>
                            <PurchaseTextLabel>총 금액</PurchaseTextLabel>
                            <PurchaseText>
                                {numberWithComma(price - discountPrice)}원
                            </PurchaseText>
                        </PurchaseTextContainer>
                        <PurchaseButton>구매하기</PurchaseButton>
                    </PurchaseContainer>
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
