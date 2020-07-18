import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { MdClear } from 'react-icons/md';
import {
    ProductTopInfoProp,
    ProductTopInfoTextProp,
    ApplyCouponButtonProp,
    CheckBoxProp,
} from 'components/Cart/CartItemProps';
import { ICartItem } from 'models/ICartItem';
import {
    removeProductFromCart,
    increaseCartProductAmount,
    decreaseCartProductAmount,
    selectProductAtCart,
} from 'actions/cartAction';
import { numberWithComma } from 'utils/numberWithComma';

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

const ProductAmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ProductAmountButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #000000;
    transition: all 0.5s ease;
    border-radius: 3px;

    &:active {
        background-color: #000000;
        color: #ffffff;
    }

    &:focus {
        outline: none;
    }
`;

const ProductAmountText = styled.div`
    margin: 0 6px;
    width: 10px;
    text-align: center;
`;

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ApplyCouponButton = styled.button<ApplyCouponButtonProp>`
    height: 40px;
    width: 120px;
    font-size: 12px;
    font-weight: 600;
    padding: 2px 0;
    color: #ffffff;
    background-color: #000000;
    border: none;
    cursor: ${(prop) => prop.availableCoupon && 'pointer'};
    visibility: ${(prop) => !prop.availableCoupon && 'hidden'};

    &:focus {
        outline: none;
    }
`;

const TotalPriceText = styled.div`
    height: 40px;
    width: calc(100% - 120px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const StyledCheckbox = styled.div<CheckBoxProp>`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #000000;
    background: ${(props) => (props.isSelected ? '#000000' : '#ffffff')};
    border-radius: 3px;
    transition: all 150ms;

    ${Icon} {
        visibility: ${(props) => (props.isSelected ? 'visible' : 'hidden')};
    }
`;

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
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
}: ICartItem) {
    const item = {
        id,
        title,
        coverImage,
        price,
        score,
        availableCoupon,
        amount,
        isSelected,
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
                <CheckboxContainer>
                    <HiddenCheckbox />
                    <StyledCheckbox
                        isSelected={isSelected}
                        onClick={() => dispatch(selectProductAtCart(id))}
                    >
                        <Icon viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                        </Icon>
                    </StyledCheckbox>
                </CheckboxContainer>
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
                    <ProductAmountContainer>
                        <ProductAmountButton
                            disabled={amount <= 1}
                            onClick={() =>
                                dispatch(decreaseCartProductAmount(id))
                            }
                        >
                            -
                        </ProductAmountButton>

                        <ProductAmountText>{amount}</ProductAmountText>
                        <ProductAmountButton
                            onClick={() =>
                                dispatch(increaseCartProductAmount(id))
                            }
                        >
                            +
                        </ProductAmountButton>
                    </ProductAmountContainer>
                </ProductPriceContainer>
            </CartItemDetail>
            <Divisor />
            <ConfirmationContainer>
                <ApplyCouponButton
                    disabled={!availableCoupon}
                    availableCoupon={availableCoupon}
                >
                    {availableCoupon ? '쿠폰 적용하기' : '쿠폰 적용 불가'}
                </ApplyCouponButton>
                <TotalPriceText>
                    총 {numberWithComma(price * amount)} 원
                </TotalPriceText>
            </ConfirmationContainer>
        </CartItemContainer>
    );
}

export default CartItem;
