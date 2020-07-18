import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { ICouponItem } from 'models/ICouponItem';
import { numberWithComma } from 'utils/numberWithComma';
import { addCouponAtProduct, selectProductAtCart } from 'actions/cartAction';
import {
    closeCouponModalDialog,
    removeCouponFromList,
} from 'actions/couponAction';

const CouponContainer = styled.div`
    width: 80%;
    height: 80px;
    min-height: min-content;
    border: 1px solid #000000;
    display: flex;
    flex-direction: row;
    margin: 10px auto;
    cursor: pointer;
`;

const CouponLeftContainer = styled.div`
    height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    width: 35%;
`;

const Circle = styled.div`
    position: absolute;
    top: calc(50% - 10px);
    width: 25px;
    height: 25px;
    left: -17px;
    background-color: #ffffff;
    border-radius: 100%;
`;

const CouponRightContainer = styled.div`
    height: 80px;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function CouponItem({
    type,
    title,
    discountAmount,
    discountRate,
}: ICouponItem): React.ReactElement {
    const dispatch = useDispatch();
    const { selectedProductId } = useSelector(
        (state: RootState) => state.coupon,
    );
    const coupon = {
        type,
        title,
        discountAmount,
        discountRate,
    };

    return (
        <CouponContainer
            onDoubleClick={() => {
                dispatch(
                    addCouponAtProduct({
                        productId: selectedProductId,
                        coupon,
                    }),
                );
                dispatch(selectProductAtCart(selectedProductId));
                dispatch(removeCouponFromList(coupon));
                dispatch(closeCouponModalDialog());
            }}
        >
            <CouponLeftContainer>
                <Circle />
                {type === 'rate'
                    ? `${discountRate} %`
                    : `${numberWithComma(discountAmount)}원`}
            </CouponLeftContainer>
            <CouponRightContainer>{title}</CouponRightContainer>
        </CouponContainer>
    );
}

export default CouponItem;
