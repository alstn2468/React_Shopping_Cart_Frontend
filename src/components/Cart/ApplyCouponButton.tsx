import * as React from 'react';
import styled from 'styled-components';

type StyledButtonProp = {
    availableCoupon: boolean;
};

type ApplyCouponButtonProp = {
    availableCoupon: boolean;
    onButtonClicked: () => void;
    hasCoupon: boolean;
    couponTitle?: string;
};

const Button = styled.button<StyledButtonProp>`
    height: 40px;
    width: 120px;
    min-width: 120px;
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

function ApplyCouponButton({
    availableCoupon,
    onButtonClicked,
    hasCoupon,
    couponTitle,
}: ApplyCouponButtonProp): React.ReactElement {
    return (
        <Button
            disabled={!availableCoupon}
            availableCoupon={availableCoupon}
            onClick={onButtonClicked}
        >
            {availableCoupon
                ? hasCoupon
                    ? `${couponTitle}`
                    : '쿠폰 적용하기'
                : '쿠폰 적용 불가'}
        </Button>
    );
}

export default ApplyCouponButton;
