import * as React from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

type CouponDialogCloseButtonProp = {
    onButtonClicked: () => void;
};

const Button = styled.button`
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

const ButtonIcon = styled(AiOutlineCloseCircle)`
    fill: #ffffff;
    width: 18px;
    height: auto;
`;

function CouponDialogCloseButton({
    onButtonClicked,
}: CouponDialogCloseButtonProp): React.ReactElement {
    return (
        <Button onClick={onButtonClicked}>
            <ButtonIcon />
        </Button>
    );
}

export default CouponDialogCloseButton;
