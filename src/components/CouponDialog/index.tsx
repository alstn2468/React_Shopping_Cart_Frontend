import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'reducers';
import CouponItem from 'components/CouponDialog/CouponItem';
import { closeCouponModalDialog } from 'actions/couponAction';
import { getCouponList } from 'actions/thunkAction';
import { ICouponItem } from 'models/ICouponItem';
import CouponDialogCloseButton from 'components/CouponDialog/CouponDialogCloseButton';
import CouponDialogLoader from 'components/CouponDialog/CouponDialogLoader';

const OverlayDialogContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const CouponDialogContainer = styled.div`
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    color: #000000;
    border-radius: 10px;
`;

const CouponDialogHeader = styled.div`
    height: 30px;
    width: 100%;
    background-color: #000000;
    border-radius: 10px 10px 0 0;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const CouponDialogContent = styled.div`
    width: 100%;
    height: 270px;
    padding: 10px 0;
    overflow: auto;
`;

function CouponDialog(): React.ReactElement {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: RootState) => state.cart);
    const { loading, isOpen, coupons, error } = useSelector(
        (state: RootState) => state.coupon,
    );

    React.useEffect(() => {
        if (isOpen) {
            dispatch(getCouponList(cartItems));
        }
    }, [isOpen]);

    return (
        isOpen && (
            <OverlayDialogContainer>
                <CouponDialogContainer>
                    <CouponDialogHeader>
                        <CouponDialogCloseButton
                            onButtonClicked={() =>
                                dispatch(closeCouponModalDialog())
                            }
                        />
                    </CouponDialogHeader>
                    <CouponDialogContent>
                        {loading ? (
                            <CouponDialogLoader />
                        ) : (
                            coupons.map((coupon: ICouponItem, idx: number) => (
                                <CouponItem key={`coupon-${idx}`} {...coupon} />
                            ))
                        )}
                    </CouponDialogContent>
                </CouponDialogContainer>
            </OverlayDialogContainer>
        )
    );
}

export default CouponDialog;
