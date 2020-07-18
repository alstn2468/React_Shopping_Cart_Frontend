import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RootState } from 'reducers';
import CouponItem from 'components/CouponDialog/CouponItem';
import { closeCouponModalDialog } from 'actions/couponAction';
import { ICartItem } from 'models/ICartItem';
import { ICouponItem } from 'models/ICouponItem';

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

const CouponDialogCloseIcon = styled(AiOutlineCloseCircle)`
    fill: #ffffff;
    width: 18px;
    height: auto;
`;

const CouponDialogCloseButton = styled.button`
    width: 18px;
    height: 18px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const CouponDialogContent = styled.div`
    width: 100%;
    height: 270px;
    padding: 10px 0;
    overflow: auto;
`;

const LoaderContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Loader = styled.div`
    height: 50px;
    width: 50px;
    margin: 0 auto;
    border: 6px solid #000;
    border-top: 6px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadingText = styled.div`
    margin: 0 auto;
    font-size: 22px;
    color: #000000;
    text-align: center;
    margin: 15px;
`;

function CouponDialog(): React.ReactElement {
    const dispatch = useDispatch();
    const { loading, isOpen, coupons, error } = useSelector(
        (state: RootState) => state.coupon,
    );

    return (
        isOpen && (
            <OverlayDialogContainer>
                <CouponDialogContainer>
                    <CouponDialogHeader>
                        <CouponDialogCloseButton
                            onClick={() => dispatch(closeCouponModalDialog())}
                        >
                            <CouponDialogCloseIcon />
                        </CouponDialogCloseButton>
                    </CouponDialogHeader>
                    <CouponDialogContent>
                        {loading ? (
                            <LoaderContainer>
                                <Loader />
                                <LoadingText>Loading...</LoadingText>
                            </LoaderContainer>
                        ) : (
                            coupons.map((coupon: ICouponItem) => (
                                <CouponItem {...coupon} />
                            ))
                        )}
                    </CouponDialogContent>
                </CouponDialogContainer>
            </OverlayDialogContainer>
        )
    );
}

export default CouponDialog;
