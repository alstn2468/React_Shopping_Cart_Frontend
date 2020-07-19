import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ICouponItem } from 'models/ICouponItem';
import { numberWithComma } from 'utils/numberWithComma';
import { removeCouponFromProduct } from 'actions/cartAction';
import { openCouponModalDialog, addCouponToList } from 'actions/couponAction';
import ApplyCouponButton from 'components/Cart/ApplyCouponButton';
import RemoveCouponButton from 'components/Cart/RemoveCouponButton';

type ProductConfirmProp = {
    productId: string;
    availableCoupon: boolean;
    coupon?: ICouponItem;
    totalPrice: number;
};

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

function ProductConfirm({
    productId,
    coupon,
    totalPrice,
    availableCoupon,
}: ProductConfirmProp): React.ReactElement {
    const dispatch = useDispatch();

    return (
        <ConfirmationContainer>
            <ApplyCouponButton
                availableCoupon={availableCoupon}
                onButtonClicked={() =>
                    dispatch(openCouponModalDialog(productId))
                }
                hasCoupon={Boolean(coupon)}
                couponTitle={Boolean(coupon) && coupon.title}
            />
            {availableCoupon && Boolean(coupon) && (
                <RemoveCouponButton
                    onButtonClicked={() => {
                        dispatch(
                            removeCouponFromProduct({
                                productId,
                                coupon,
                            }),
                        );
                        dispatch(addCouponToList(coupon));
                    }}
                />
            )}
            <TotalPriceText>총 {numberWithComma(totalPrice)} 원</TotalPriceText>
        </ConfirmationContainer>
    );
}

export default ProductConfirm;
