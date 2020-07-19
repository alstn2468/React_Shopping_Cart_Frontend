import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
    ProductTopInfoProp,
    ProductTopInfoTextProp,
} from 'components/Cart/CartItemProps';
import { ICartItem } from 'models/ICartItem';
import {
    removeProductFromCart,
    selectProductAtCart,
    removeCouponFromProduct,
} from 'actions/cartAction';
import { openCouponModalDialog, addCouponToList } from 'actions/couponAction';
import { numberWithComma } from 'utils/numberWithComma';
import ProductAmount from 'components/Cart/ProductAmount';
import CartCheckBox from 'components/Cart//CartCheckBox';
import ApplyCouponButton from 'components/Cart/ApplyCouponButton';
import RemoveCouponButton from 'components/Cart/RemoveCouponButton';
import ProductRemoveButton from 'components/Cart/ProductRemoveButton';
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

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const TotalPriceText = styled.div`
    height: 40px;
    width: calc(100% - 120px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
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
                <ProductPriceContainer>
                    <ProductPriceText>
                        {numberWithComma(price)}원
                    </ProductPriceText>
                    <ProductAmount amount={amount} productId={id} />
                </ProductPriceContainer>
            </CartItemDetail>
            <Divisor />
            <ConfirmationContainer>
                <ApplyCouponButton
                    availableCoupon={availableCoupon}
                    onButtonClicked={() => dispatch(openCouponModalDialog(id))}
                    hasCoupon={Boolean(coupon)}
                    couponTitle={Boolean(coupon) && coupon.title}
                />
                {availableCoupon && Boolean(coupon) && (
                    <RemoveCouponButton
                        onButtonClicked={() => {
                            dispatch(
                                removeCouponFromProduct({
                                    productId: id,
                                    coupon,
                                }),
                            );
                            dispatch(addCouponToList(coupon));
                        }}
                    />
                )}
                <TotalPriceText>
                    총 {numberWithComma(price * amount)} 원
                </TotalPriceText>
            </ConfirmationContainer>
        </CartItemContainer>
    );
}

export default CartItem;
